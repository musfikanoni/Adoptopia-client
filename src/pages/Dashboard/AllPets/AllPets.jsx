import useALlPets from "../../../hooks/useALlPets";
// import '../../../tanTable.css';
import * as React from 'react';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const columnHelper = createColumnHelper();

const AllPets = () => {
    const axiosSecure = useAxiosSecure();
    const[allPets] = useALlPets();
      const [data, setData] = React.useState([]);
    
      React.useEffect(() => {
        setData(allPets || []);
      }, [allPets]);
    
    //   Delete handler
      const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/allPets/${id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your pet has been removed.", "success");
                setData((prevData) => prevData.filter((pet) => pet._id !== id));
              }
            });
          }
        });
      };
    
      const handleAdoptionStatus = (id, isAdopted) => {
        axiosSecure.patch(`/petList/${id}`, { adopted: !isAdopted }).then(() => {
          setData((prevData) =>
            prevData.map((pet) =>
              pet._id === id ? { ...pet, adopted: !isAdopted } : pet
            )
          );
        });
      };
    
      const columns = [
        columnHelper.accessor((row, i) => i + 1, { header: " "}),
        columnHelper.accessor("pet_name", { header: "Pet Name" }),
        columnHelper.accessor("pet_category", { header: "Category" }),
        columnHelper.accessor("pet_image", {
          header: "Image",
          cell: (info) => (
            <div className="flex justify-center items-center">
                <img
                src={info.getValue()}
                alt="Pet"
                className="max-w-lg p-2 h-20 object-cover rounded"
              />
            </div>
          ),
        }),
        columnHelper.accessor("adopted", {
          header: "Adoption Status",
          cell: (info) =>
            info.getValue() ? "Adopted" : "Not Adopted",
        }),
        columnHelper.display({
          header: "Actions",
          cell: (info) => {
            const row = info.row.original;
                    return (
          <div className="grid grid-cols-3 gap-2">
            <div className="flex justify-center py-3 px-2">
              <button
                onClick={() => handleAdoptionStatus(row._id, row.adopted)}
                className={`px-2 py-1 rounded ${
                  row.adopted ? "bg-lime-700" : "bg-lime-500"
                } text-white`}
              >
                {row.adopted ? "Not Adopted" : " Adopted "}
            </button>
            </div>
            <div className="flex justify-center py-3 px-2">
              <Link to={`/dashboard/updateAllPet/${row._id}`}>
                <button className="px-2 py-1 bg-zinc-500 rounded text-white">
                  Update
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handleDelete(row._id)}
                className="px-2 py-1 text-4xl text-red-500 rounded"
              >
                 <MdDeleteForever />
              </button>
            </div>
          </div>
        );
      },
    }),
  ];


  const table = useReactTable({
    data, // Dynamic data from state
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
    return (
        <div className='lg:mt-20'>
            {/* <h1 className='text-7xl'>Total Pets: {allPets.length}  </h1> */}
             <div>
      <Helmet>
          <title>Adoptopia | All Pets</title>
      </Helmet>
      <SectionTitle subHeading={'All Pets'} heading={'Manage all pets'} />

      <div className="p-2 max-w-fit mx-auto">
        <table className='border-pcolor'>
          <thead className='bg-pcolor text-white h-14'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className='border-none px-3'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className='border-b border-r border-pcolor text-center px-3'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default AllPets;