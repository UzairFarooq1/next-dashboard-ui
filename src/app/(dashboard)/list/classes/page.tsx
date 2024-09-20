import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, parentsData, role, studentsData, subjectsData, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Classes = {
  id: number;
  name: string;
  capacity: string;
  grade: string;
  supervisor: string;
};

const columns = [
  {
    header: "Class Name",
    accessor: "className",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",

  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",

  },
  {
    header: "Supervisor",
    accessor: "supervisor",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
const StudentListPage = () => {
  const renderRow = (item: Classes) => (
    <tr className=" even:bg-slate-50 text-sm hover:bg-PurpleLight  "   key={item.id}>
      <td className="flex items-center gap-4 p-4">
        {/* <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        /> */}
        <div className=" flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="">{item.supervisor}</td>


      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
          <button className="flex items-center justify-center rounded-full bg-sky">
            <Image src="/view.png" alt="" width={16} height={16}/>
          </button>
          </Link>
          {role === "admin" && (
            <button className="flex items-center justify-center rounded-full bg-Purple">
            <Image src="/delete.png" alt="" width={16} height={16}/>
          </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold ">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex rounded-full items-center justify-center bg-Yellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex rounded-full items-center justify-center bg-Yellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex rounded-full items-center justify-center bg-Yellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={classesData}/>
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default StudentListPage;
