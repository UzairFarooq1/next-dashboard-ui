
import Image from "next/image"

const Usercard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-Purple even:bg-Yellow p-4 flex-1 min-w-[135px]'>
        <div className="flex justify-between items-center">
            <span className="rounded-full py-1 px-2 bg-white text-[10px]">2024/25</span>
            <Image className="cursor-pointer" src="/more.png" alt="" width={15} height={5} />
        </div>
        <h1 className="font-semibold my-4">1,234</h1>
        <h2 className=" capitalize font-medium text-sm text-gray-500">{type}</h2>
    </div>
  )
}

export default Usercard