import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
// import usePetList from "../../../hooks/usePetList";

const PetListCard = ({pets}) => {
    const {_id, pet_name, pet_image, pet_age, pet_location, order_date} = pets;
    // const[petList] = usePetList();
    return (
        <div>
            <Card
                className="max-w-sm bg-lime-100"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={pet_image}
                >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {pet_name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Pet Age: {pet_age}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400 -mt-3">Pet Loacation: {pet_location}</p>
                <div>
                    <Link to={`/petList/${_id}`}>
                        <button className="btn text-md rounded-lg text-white px-4 py-2 font-bold bg-pcolor">View Details</button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default PetListCard;
