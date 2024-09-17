"use client"
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    expense: 3490,
    income: 4300,
  },
  {
    name: 'Feb',
    expense: 5000,
    income: 5600,
  },
  {
    name: 'Mar',
    expense: 2000,
    income: 3500,
  },
  {
    name: 'Apr',
    expense: 3500,
    income: 4300,
  },
  {
    name: 'May',
    expense: 2000,
    income: 9800,
  },
  {
    name: 'Jun',
    expense: 2780,
    income: 3908,
  },
  {
    name: 'Jul',
    expense: 1890,
    income: 4800,
  },
  {
    name: 'Aug',
    expense: 2390,
    income: 3800,
  },
  {
    name: 'Sep',
    expense: 3490,
    income: 4300,
  },
  {
    name: 'Oct',
    expense: 5000,
    income: 9000,
  },
  {
    name: 'Nov',
    expense: 3500,
    income: 3000,
  },
  {
    name: 'Dec',
    expense: 7000,
    income: 9500,
  },
];
const FinanceChart = () => {
  return (
    <div className='bg-white h-full p-4'>
      {/* Title */}
        <div className='flex items-center justify-between '>
        <span className='text-l font-semibold'>Finance</span>
        <Image className='cursor-pointer ' src="/moreDark.png" alt='' width={20} height={15}/>
      </div>
      {/* Chart */}
      <div className='w-full h-full'>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name" axisLine= {false}  tickLine={false} tickMargin={10} />
          <YAxis axisLine= {false} tickLine={false} tickMargin={20}/>
          <Tooltip />
          <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={4} dot={{r:3, fill:"#CFCEFF"}}   />
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={4} dot={{r:3, fill:"#C3EBFA"}}/>
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default FinanceChart