import Image from "next/image"

const announcements = [
    {
        id: 1,
        title: 'Announcement 1',
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "id": 2,
        "title": "Announcement 2",
        "time": "3:00 PM - 5:00 PM",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "id": 3,
        "title": "Announcement 3",
        "time": "6:00 PM - 8:00 PM",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md '>
    <div className='flex items-center justify-between '>
          <span className='text-lg font-bold'>Announcements</span>
          <span className="text-xs text-gray-400 cursor-pointer">View More</span>
      </div>
      <div className='flex flex-col gap-4 p-2'>
    {announcements.map((announcement) => (
      <div key={announcement.id} className=" rounded-md p-5 odd:bg-SkyLight even:bg-PurpleLight">
          <div className='flex items-center justify-between '>
          <span className='text-lg font-semibold text-gray-500'>{announcement.title}</span>
          <span className='text-[10px] text-gray-400'>{announcement.time}</span>
      </div>
        <h3></h3>
        <p className='text-gray-400 text-sm mt-2' >{announcement.description}</p>
      </div>
      
    ))}
    </div>
  </div>  )
  
}

export default Announcements