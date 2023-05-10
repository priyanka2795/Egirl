import * as fs from 'fs';
import * as readline from 'readline';

// Parse csv file
async function parseCsvFile(
  filePath: string,
  numLines: number,
  useHeaders: boolean
): Promise<void> {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let headers: string[] | null = null;
  let lineCount = 0;

  for await (const line of rl) {
    lineCount += 1;
    if (lineCount > numLines) {
      break;
    }
    const values = line.split(',');

    if (!headers && useHeaders) {
      headers = values;
      continue;
    }

    const row: { [key: string]: string } = {};

    if (headers) {
      headers.forEach((header, i) => {
        row[header] = values[i];
      });
    } else {
      values.forEach((value, i) => {
        row[i.toString()] = value;
      });
    }

    console.log(row);
  }

  console.log('Processed csv');
}

parseCsvFile('./data/e621.csv', 10, false);
