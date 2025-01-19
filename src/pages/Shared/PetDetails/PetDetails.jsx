import { useLoaderData } from "react-router-dom";
import { Card } from "flowbite-react";
import { Helmet } from "react-helmet";

const PetDetails = () => {
    const pet = useLoaderData();
    const {_id, pet_name, pet_image, pet_age, pet_location, order_date, 
Description, pet_category, gender} = pet;
    return (
        <div>   
            <Helmet>
                <title>Adoptopia | Pet Details</title>
            </Helmet> 
            <div className="w-6/12">
            <Card className="max-w-sm" horizontal>
                <div className="flex">
                <div className="w-full">
                    <img className="w-[380px]" src={pet_image} />
                </div>
                <div className="">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pet_name}</h5>
                    <p>DesCription: {Description}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Pet Age: {pet_age}</p>
                    <p>Location: {pet_location}</p>
                    <p>Order Date: {order_date}</p>
                    <p>Category: {pet_category}</p>
                    <p>Pet Gender: {gender}</p>
                    </div>
                </div>
            </Card>
            </div>
        </div>
    );
};

export default PetDetails;