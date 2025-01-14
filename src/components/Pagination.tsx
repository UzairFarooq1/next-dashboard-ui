const Pagination = () => {
  return (
    <div className='flex items-center justify-between p-4 text-gray-500'>
        <button className="p-2 rounded-md text-xs font-semibold bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
        <div className=" flex items-center gap-2 text-sm ">
            <button className="px-2 bg-sky">1</button>
            <button className="px-2">2</button>
            <button className="px-2 ">3</button>
            ....
            <button className="px-2">10</button>

        </div>
        <button className="p-2 rounded-md text-xs font-semibold bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed">Next</button>

    </div>
  )
}

export default Pagination