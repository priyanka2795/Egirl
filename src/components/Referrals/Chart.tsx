import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 20, color: '#6353C0' },
  { name: 'A', value: 80, color: '#23212F' },
];
const cx = 150;
const cy = 288;
// const iR = 50;
const iR = 116;
const oR = 144;
const value = 50;

interface NeedleProp{
    value:number, 
    data:Array<{ name: string; value: number; color: string }>
    cx: number
    cy:number, 
    iR:number, 
    oR:number,
    color:string
}

const needle = ({value, data, cx, cy, iR, oR, color} : NeedleProp) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    // <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    // <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};

const Chart = () => {
  return (
    <>
        {/* margin-top: -309px;
    margin-left: -10px; */}
        <PieChart width={300} height={400} className="-mt-[156px] -ml-[10px]">
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {/* <div className='flex flex-col items-center gap-2 absolute top-[39px] left-[1px] bottom-[10px] w-full h-full'>
                <div className='text-[#FFFFFF] text-center text-[26px] font-bold leading-8'>5%</div>
                <div className='text-[#FFFFFF] text-center text-[26px] font-bold leading-8'>Earnings</div>
                <div className='text-[#979797] text-[14px] font-normal leading-[18px]'>0/100 people referred</div>
              </div> */}
        {/* // {needle(value, data, cx, cy, iR, oR, '#d0d000')} */}
      </PieChart>
    </>
  )
}

export default Chart
