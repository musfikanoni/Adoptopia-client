import useAdoptionReq from "../../../hooks/useAdoptionReq";
import { Table } from "flowbite-react";

const AdoptionRequest = () => {
    const [ requestedPets ] = useAdoptionReq();
    console.log(requestedPets);
    
    return (
        <div>
            <h2 className="text-3xl font-semibold mt-40">Total Adoption Request: {requestedPets}</h2>
            <div className="overflow-x-auto m-8">
            <Table hoverable>
                <Table.Head style={{backgroundColor: 'pcolor'}}>
                    <Table.HeadCell></Table.HeadCell>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Phone Number</Table.HeadCell>
                    <Table.HeadCell>Location</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                 {
                    requestedPets.map((data, index)=> <Table.Row key={data._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>{index + 1}</Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {data.name}
                        </Table.Cell>
                        
                        <Table.Cell>{data.email}</Table.Cell>
                        <Table.Cell>{data.phoneNumber}</Table.Cell>
                        <Table.Cell>{data.address}</Table.Cell>
                        <Table.Cell>
                        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                            Edit
                        </a>
                        </Table.Cell>
                    </Table.Row>)
                 }
                </Table.Body>
            </Table>
            </div>

        </div>
    );
};

export default AdoptionRequest;