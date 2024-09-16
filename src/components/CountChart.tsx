"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 100,
        fill: '#ffff',
      },
  {
    name: 'Girls',
    count: 50,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 50,
    fill: '#C3EBFA',
  },


];


const CountChart = () => {
  return (


    
    <div className='w-full h-full p-4 bg-white rounded-xl'>
        {/* Title */}
        <div className='flex items-center justify-between '>
            <span className='text-l font-semibold'>Students</span>
            <Image className='cursor-pointer ' src="/moreDark.png" alt='' width={20} height={15}/>
        </div>
        {/* chart */}
        <div className=' relative w-full h-[75%]'> 
        <ResponsiveContainer  >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="/maleFemale.png" alt='' width={50} height={50} />
        </div>
        
        {/* legend */}
        <div className='flex justify-center gap-5'>
            <div className='flex flex-col'>
                <div className='w-5 h-5 bg-sky rounded-full'/>
                    <h1 className='font-semibold'>1,234</h1>
                    <h2 className='text-sm text-gray-500'>Boys (55%)</h2>
            </div>
            <div className='flex flex-col'>
                <div className='w-5 h-5 bg-Yellow rounded-full'/>
                    <h1 className='font-semibold'>1,234</h1>
                    <h2 className='text-sm text-gray-500'>Girls (45%)</h2>
            </div>
        </div>
    </div>
  )
}




export default CountChart