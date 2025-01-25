import * as React from 'react';
import ReactDOM from 'react-dom/client';
import '../../../tanTable.css';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAddedPets from '../../../hooks/useAddedPets';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const columnHelper = createColumnHelper();

const MyAddedPets = () => {
  const [addedPet] = useAddedPets();
  const [data, setData] = React.useState([]);
  const axiosSecure = useAxiosSecure();

  React.useEffect(() => {
    setData(addedPet || []);
  }, [addedPet]);

  // Delete handler
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
        axiosSecure.delete(`/petList/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your pet has been removed.", "success");
            setData((prevData) => prevData.filter((pet) => pet._id !== id)); // Update state
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
    columnHelper.accessor((row, i) => i + 1, { header: "S/N" }),
    columnHelper.accessor("pet_name", { header: "Pet Name" }),
    columnHelper.accessor("pet_category", { header: "Category" }),
    columnHelper.accessor("pet_image", {
      header: "Image",
      cell: (info) => (
        <img
          src={info.getValue()}
          alt="Pet"
          className="w-12 h-12 object-cover rounded"
        />
      ),
    }),
    columnHelper.accessor("adopted", {
      header: "Adoption Status",
      cell: (info) =>
        info.getValue() ? "✅ Adopted" : "Not Adopted",
    }),
    columnHelper.display({
      header: "Actions",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex gap-2">
            <button
              onClick={() => handleAdoptionStatus(row._id, row.adopted)}
              className={`px-2 py-1 rounded ${
                row.adopted ? "bg-blue-500" : "bg-green-500"
              } text-white`}
            >
              {row.adopted ? "Not Adopted" : " Adopted "}
            </button>
            <Link to={`/dashboard/updatePet/${row._id}`}>
              <button className="px-2 py-1 bg-yellow-500 rounded text-white">
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(row._id)}
              className="px-2 py-1 bg-red-500 rounded text-white"
            >
              Delete
            </button>
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
    <div>
      <SectionTitle subHeading={'My Added Pets'} heading={''} />
      <p>My added pets: {addedPet.length}</p>
      <div className="p-2 max-w-4xl mx-auto">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
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
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedPets;
