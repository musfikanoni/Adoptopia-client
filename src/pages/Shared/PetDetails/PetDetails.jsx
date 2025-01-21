import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cover from "../Cover/Cover";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PetDetails = () => {
    const [openModal, setOpenModal] = useState(false);

    const {register, handleSubmit, 
    formState: { errors }} = useForm();

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
        });

    const axiosSecure = useAxiosSecure();
    const pet = useLoaderData();
    const {_id, pet_id, pet_name, pet_image, pet_age, pet_location, order_date, Description, pet_category, gender } = pet;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = (data) => {
        const adoptionData = {
            ...data,
            petId: _id,
            pet_id,
            pet_name,
            pet_image,
            pet_age,
            pet_location, 
            order_date, 
            Description, 
            pet_category, 
            gender,
            user_email: user?.email,
            user_name: user?.displayName
        }
        axiosSecure.post('/adoptionRequest', adoptionData)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                Toast.fire({
                    icon: "success",
                    title: `${pet_name} Adoption Successful`
                  });
            }
        })
    }

    const handleAdopte = () => {
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
    };

    return (
        <div className="pb-[450px] bg-lime-100">
            <Helmet>
                <title>Adoptopia | Pet Details</title>
            </Helmet>
            <div className="h-[90vh] details-banner object-fill bg-cover w-full bg-no-repeat relative">
                <div className="mix-blend-darken h-[90vh] bg-slate-900 opacity-60 relative"></div>
                <Cover subHeading="Pet Details" heading="Let's Explore our pet details"></Cover>
            </div>
            <div className="lg:mx-64 -mt-32 absolute">
                <div className="bg-white border border-pcolor my-7 rounded-lg">
                    <div className="lg:flex md:flex flex-none lg:p-8 md:p-8 p-5">
                        <div>
                            <img className="h-72 rounded-lg lg:max-w-xl md:max-w-xl max-w-mxs" src={pet_image} alt={pet_name} />
                        </div>
                        <div className="lg:pl-7 md:pl-7 pl-0">
                            <h5 className="text-2xl font-bold lg:mt-0 mt-5 tracking-tight text-gray-900 dark:text-white">{pet_name}</h5>
                            <p>Description: {Description}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Pet Age: {pet_age}</p>
                            <p>Location: {pet_location}</p>
                            <p>Order Date: {order_date}</p>
                            <p>Category: {pet_category}</p>
                            <p>Pet Gender: {gender}</p>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => handleAdopte()}
                                    className="btn bg-pcolor px-6 py-2 mt-5 text-xl font-bold text-white rounded-lg"
                                >
                                    Adopt Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Logged-in Users */}
            <Modal show={openModal} size="md" onClose={() => onCloseModal(true)} popup>
                {/* <Modal.Header /> */}
                <Modal.Body>
                    <div className="space-y-6 pt-5">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">{pet_name}</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="User name" />
                                </div>
                                <TextInput
                                    id="name"
                                    defaultValue={user?.displayName} readOnly
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="User email" />
                                </div>
                                <TextInput
                                    id="email"
                                    defaultValue={user?.email} readOnly
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="number" value="Your phone number" />
                                </div>
                                <TextInput id="number" {...register("phoneNumber", { required: true })} type="number" placeholder="phone number" />
                                {errors.phoneNumber && <span className="text-red-600">Phone number is required</span>}
                            </div>
                            <div className="w-full flex justify-center pt-3 gap-4">
                                <button className="bg-pcolor hover:bg-lime-500 px-7 py-2.5 text-md font-bold text-white rounded-3xl">Submit</button>
                                <button className="bg-slate-200 hover:bg-slate-300 px-7 py-2.5 text-md font-bold rounded-3xl" onClick={() => onCloseModal(true)}>Cancel</button>
                            </div>
    
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default PetDetails;
