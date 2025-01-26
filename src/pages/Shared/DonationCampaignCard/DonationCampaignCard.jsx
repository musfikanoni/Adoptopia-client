import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const DonationCampaignCard = ({donation}) => {
    const {_id, pet_image, pet_name, maximum_amount, donated_amount} = donation;
    return (
        <div className="lg:ml-5">
            <Card
                className="max-w-sm bg-lime-100"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={pet_image}
                >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {pet_name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Maximum Donation Amount: {maximum_amount} $</p>
                <p className="font-normal text-gray-700 dark:text-gray-400 -mt-3">Donated Amount: {donated_amount} $</p>
                <div>
                    <Link to={`/donationCampaign/${_id}`}>
                        <button className="btn text-md rounded-lg text-white px-4 py-2 font-bold bg-pcolor">View Details</button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default DonationCampaignCard;