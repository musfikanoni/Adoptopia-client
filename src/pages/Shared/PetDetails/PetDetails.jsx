import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cover from "../Cover/Cover";

const PetDetails = () => {
    const pet = useLoaderData();
    const {pet_name, pet_image, pet_age, pet_location, order_date, 
    Description, pet_category, gender} = pet;
    const handleAdopte = (pet) => {
        console.log(pet)
    }

    return (
        <div className="pb-[450px] bg-lime-100">   
            <Helmet>
                <title>Adoptopia | Pet Details</title>
            </Helmet> 
            <div  className="h-[90vh] details-banner object-fill bg-cover w-full bg-no-repeat relative">
                <div className="mix-blend-darken h-[90vh]
                     bg-slate-900 opacity-60 relative"></div>
            <Cover subHeading={'Pet Details'} heading={"Let's Explore our pet details"}></Cover>
            </div>
            <div className=" lg:mx-64 -mt-32 absolute">
                <div className="bg-white border border-pcolor my-7 rounded-lg">
                    <div className="lg:flex md:flex flex-none lg:p-8 md:p-8 p-5">
                        <div className="">
                            <img className="h-72 rounded-lg lg:max-w-xl md:max-w-xl max-w-mxs" src={pet_image} />
                        </div>
                        <div className="lg:pl-7 md:pl-7 pl-0">
                            <h5 className="text-2xl font-bold lg:mt-0 mt-5 tracking-tight text-gray-900 dark:text-white">{pet_name}</h5>
                            <p>DesCription: {Description}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Pet Age: {pet_age}</p>
                            <p>Location: {pet_location}</p>
                            <p>Order Date: {order_date}</p>
                            <p>Category: {pet_category}</p>
                            <p>Pet Gender: {gender}</p>
                            <div className=" flex justify-end">
                                <button onClick={() => handleAdopte(pet)}
                                className="btn bg-pcolor px-6 py-2 mt-5 text-xl font-bold text-white rounded-lg">Adopt Now</button>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;