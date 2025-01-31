import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Cover from "../Cover/Cover";
import { Modal } from "flowbite-react";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import Payment from "../../Dashboard/Payment/Payment";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const DonationDetails = () => {
    const donation = useLoaderData();
    const {pet_image, pet_name, shortDescription, longDescription,
        maximum_amount, donated_amount} = donation;



    const [openModal, setOpenModal] = useState(false); 
    const {user} = useAuth();    

    const handleDonate = () => {
        if (user && user.email) {
            setOpenModal(true); 
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please log in to proceed with the pet adoption!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

        const onCloseModal = () => {
            setOpenModal(false);
        }

    return (
        <div className="pb-[450px] bg-lime-100">
            <Helmet>
                <title>Adoptopia | Donation Campaigns Details</title>
            </Helmet> 
            <div  className="h-[90vh] donation-banner object-fill bg-cover w-full bg-no-repeat relative">
                <div className="mix-blend-darken h-[90vh]
                     bg-slate-900 opacity-60 relative"></div>
                <Cover subHeading={'Pet Donation Campaigns'} heading={'Support Our Pet Donation Campaigns!'}></Cover>
            </div>        

            <div className=" lg:mx-64 -mt-32 absolute">
                <div className="bg-white border border-pcolor my-7 rounded-lg">
                    <div className="lg:flex md:flex flex-none lg:p-8 md:p-8 p-5">
                        <div className="">
                            <img className="h-72 rounded-lg lg:max-w-xl md:max-w-xl max-w-mxs" src={pet_image} />
                        </div>
                        <div className="lg:pl-7 md:pl-7 pl-0">
                            <h5 className="text-2xl font-bold lg:mt-0 mt-5 tracking-tight text-gray-900 dark:text-white">{pet_name}</h5>
                            <p> <span className="font-bold text-lg text-slate-800">Short-Description:</span> {shortDescription}</p>
                            <p> <span className="font-bold text-lg text-slate-800">Long-Description:</span> {longDescription}</p>
                            <p> <span className="font-bold text-lg text-slate-800">Maximum Donated Anount:</span> {maximum_amount}$</p>
                            <p> <span className="font-bold text-lg text-slate-800">Donated Amount:</span> {donated_amount}$</p>
                            <div className=" flex justify-end">
                                <button onClick={() => handleDonate()}
                                className="btn bg-pcolor px-5 py-2.5 mt-5 text-xl font-bold text-white rounded-lg">Donate Now</button>
                            </div>
                        </div>

                        <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                            <Modal.Header />
                            <Modal.Body>
                            <div className="space-y-3">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">{pet_name}</h3>
                                    <SectionTitle subHeading={"Payment"}></SectionTitle>
                                    
                                    <Payment></Payment>

                            </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;