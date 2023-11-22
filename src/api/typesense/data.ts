import * as fs from 'fs';
import * as readline from 'readline';
import { createAutocompleteTags } from '../utils/tags';

// Parse csv file to JSON
async function parseCsvFileToJson(
  inputFilePath: string,
  headers: string[],
  outputFilePath: string,
  numLines: number
): Promise<any> {
  const fileStream = fs.createReadStream(inputFilePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  //let headers: string[] | null = null;
  let lineCount = 0;
  console.log('this is numLines: ', numLines);

  const csvRegex = /(?:^|,)(?=(?:[^"]|"[^"]*")*$)/;
  const parsedData: { [key: string]: any }[] = [];

  for await (const line of rl) {
    lineCount += 1;

    if (lineCount > numLines) {
      break;
    }
    const values = line
      .split(csvRegex)
      .map((value) => value.replace(/(^"|"$)/g, ''));

    const row: { [key: string]: string | number } = {};

    if (headers && headers.length > 0) {
      headers.forEach((header, i) => {
        const value = values[i];
        row[header] = !isNaN(Number(value)) ? Number(value) : value;
        //row[header] = values[i];
      });
    } else {
      values.forEach((value, i) => {
        row[i.toString()] = !isNaN(Number(value)) ? Number(value) : value;
        //row[i.toString()] = value;
      });
    }

    console.log(row);
    parsedData.push(row);
  }

  const jsonData = parsedData.map((row) => JSON.stringify(row)).join('\n');

  fs.writeFile(outputFilePath, jsonData, { encoding: 'utf8' }, (err) => {
    if (err) {
      console.error('Error writing to JSON file:', err);
    } else {
      console.log('JSON file written successfully');
    }
  });

  console.log('Processed csv');
  return parsedData;
}

// Get example JSON
async function getExampleJson() {
  const headers = ['tag', 'color_scheme', 'frequency', 'related_terms'];
  const parsedData = await parseCsvFileToJson(
    './data/danbooru.csv',
    headers,
    './data/danbooru.jsonl',
    100000
  );
  return parsedData;
}


async function getAndUploadTags() {
  const parsedData = await getExampleJson();
  console.log('this is parsedData: ', parsedData);
}

getAndUploadTags();
