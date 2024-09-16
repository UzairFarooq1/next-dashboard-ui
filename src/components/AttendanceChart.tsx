"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 80,
    absent: 30,
  },
  {
    name: 'Wed',
    present: 70,
    absent: 60,
  },
  {
    name: 'Thur',
    present: 70,
    absent: 50,
  },
  {
    name: 'Fri',
    present: 80,
    absent: 20,
  },
  {
    name: 'Sat',
    present: 70,
    absent: 10,
  },
  {
    name: 'Sun',
    present: 80,
    absent: 50,
  },
];

const AttendanceChart = () => {
  return (
    <div className=' h-full rounded-lg bg-white p-4 gap-4'>
        <div className='flex items-center justify-between  '>
            <span className='text-l font-semibold'>Students</span>
            <Image className='cursor-pointer ' src="/moreDark.png" alt='' width={20} height={20}/>
        </div>
        <div className=' w-full h-[90%]'>
        <ResponsiveContainer >
        <BarChart
          width={500}
          height={300}
          data={data}

        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="ddd" />
          <XAxis dataKey="name" axisLine= {false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}} />
          <Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10,10,0,0]} activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10,10,0,0]} activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default AttendanceChart