import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import Usercard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 md:flex-row'>
      {/* Left */ }
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/*UserCards */}
      <div className=" justify-between flex gap-4 flex-wrap">
        <Usercard type="student"/>
        <Usercard type="teacher"/>
        <Usercard type="parent"/>
        <Usercard type="staff"/>
      </div>
      {/* chart */}
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="w-full h-[450px] lg:w-1/3">
        <CountChart/>
        </div>
        <div className="w-full h-[450px] lg:w-2/3">
        <AttendanceChart/>
        </div>
      </div>
      </div>
      {/*Right*/}
      <div className="w-full lg:w-1/3">
      R
      </div>
    </div>
  )
}

export default AdminPage