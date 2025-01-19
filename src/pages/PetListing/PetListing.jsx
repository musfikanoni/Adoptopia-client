// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import usePetList from "../../hooks/usePetList";
import PetListCard from "../Shared/PetListCard/PetListCard";
import { IoIosSearch } from "react-icons/io";

const PetListing = () => {
        const [petList] = usePetList();
        // const [loading, setLoading] = useState(true);
    
        // useEffect(() => {
        //     fetch('')
        //     .then(res => res.json())
        //     .then(data => {
        //         setPetList(data);
        //     });
        // }, [])
        return (
            <div className="max-w-screen-xl mx-auto my-24">
                <Helmet>
                <title>Adoptopia | Register</title>
                </Helmet>
                <div className="flex my-10">
                    <div className="w-8/12 flex justify-center ml-20">
                        <input className="w-6/12 text-lg p-2.5 rounded-lg relative border-gray-400" id="email4" type="text" placeholder="search" required />
                        <div className="flex justify-end items-center">
                            <IoIosSearch className="text-2xl text-gray-500 absolute me-3"></IoIosSearch>
                        </div>
                    </div>
                    <div className="w-2/12">
                        <select className="w-full p-3 border-gray-400 rounded-lg -ml-52">
                            <option>Select Category</option>
                            <option>Cat</option>
                            <option>Rabbit</option>
                            <option>Bird</option>
                            <option>Dog</option>
                            <option>Fish</option>
                        </select>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-9">
                    {
                        petList.map(pet => <PetListCard key={pet._id} pet={pet}></PetListCard>)
                    }
                </div>
            </div>
        );
};

export default PetListing;