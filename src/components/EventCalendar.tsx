"use client"
import { time } from 'console';
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: 'Event 1',
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "id": 2,
        "title": "Event 2",
        "time": "3:00 PM - 5:00 PM",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "id": 3,
        "title": "Event 3",
        "time": "6:00 PM - 8:00 PM",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md '>
      <Calendar onChange={onChange} value={value} />
      <div className='flex items-center justify-between '>
            <span className='text-lg font-bold'>Events</span>
            <Image className='cursor-pointer ' src="/moreDark.png" alt='' width={20} height={15}/>
        </div>
        <div className='flex flex-col gap-4 p-2'>
      {events.map((event) => (
        <div key={event.id} className=" rounded-md border-2 border-t-4 border-gray-100  p-5 odd:border-t-sky even:border-t-Purple">
            <div className='flex items-center justify-between '>
            <span className='text-lg font-semibold text-gray-500'>{event.title}</span>
            <span className='text-[10px] text-gray-400'>{event.time}</span>
        </div>
          <h3></h3>
          <p className='text-gray-400 text-sm mt-2' >{event.description}</p>
        </div>
        
      ))}
      </div>
    </div>  )
}

export default EventCalendar