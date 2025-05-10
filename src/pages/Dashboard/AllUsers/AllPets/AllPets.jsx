import useALlPets from "../../../../hooks/useALlPets";

// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";


const AllPets = () => {
    const[allPets] = useALlPets();
    console.log(allPets);
    return (
        <div className='lg:mt-20'>
            <h1 className='text-7xl'>allPets: {allPets.length}  </h1>
        </div>
    );
};

export default AllPets;