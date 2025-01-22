import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Avatar, Table } from "flowbite-react";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }   
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
                });
            }
        })
    }
  
    return (
        <div>
            <div className="pl-32 text-xl font-bold py-5">Total Users: {users.length}</div>
            <div className="overflow-x-auto mx-32">
            <Table hoverable>
                <Table.Head className="bg-pcolor h-12">
                <th></th>
                <th className="pl-6">User name</th>
                <th className="pl-6">Email</th>
                <th className="pl-14">Profile</th>
                <th className="pl-6">Role</th>
                </Table.Head>
                <Table.Body className="divide-y">
                {
                    users.map((user, index) =>
                        <Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>{index + 1}</Table.Cell>
                            <Table.Cell>{user.name}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell><Avatar img={user.photoURL} rounded size="md"></Avatar></Table.Cell>
                            <Table.Cell>
                                {user.role === 'admin' ? 'Admin' :
                                <button onClick={() => handleMakeAdmin(user)}>
                                    <FaUsers className="text-3xl text-pcolor" />
                                </button>}
                            </Table.Cell>
                        </Table.Row>  
                    )
                }
                </Table.Body>
            </Table>
            </div>
        </div>
    );
};

export default AllUsers;