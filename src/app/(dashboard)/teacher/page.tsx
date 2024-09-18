import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import EventCalendar from "@/components/EventCalendar"

const TeacherPage = () => {
  return (
    <div className='p-4 flex-1 flex flex-col xl:flex-row'>
      {/* left */}
      <div className=' w-full xl:w-2/3'>
      <div className="p-4 h-full bg-white rounded-md ">
        <h1 className="text-xl font-semibold">Schedule</h1>
        <BigCalendar />
      </div>
      </div>
      {/* Right */}
      <div className="w-full flex flex-col gap-8 xl:w-1/3">
      <Announcements/>
      </div>
    </div>
  )
}

export default TeacherPage