import Usercard from "@/components/usercard"

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 md:flex-row'>
      {/* Left */ }
      <div className="w-full lg:w-2/3">
      {/*UserCards */}
      <div className=" justify-between flex gap-4">
        <Usercard type="student"/>
        <Usercard type="teacher"/>
        <Usercard type="parent"/>
        <Usercard type="staff"/>
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