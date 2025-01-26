import { Datepicker, FileInput, FloatingLabel } from "flowbite-react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Controller, useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import { Helmet } from "react-helmet";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateDonation = () => {

    const { register, handleSubmit, reset, control, formState: { errors } } = useForm()
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const {isAdmin} = useAdmin();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            const currentDateTime = new Date().toUTCString();
            const donationCamp = {
                pet_image: res.data.data.display_url,
                maximum_amount: data.max_amount,
                last_date: data.lastDate,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                email: user?.email,
                role: isAdmin ? "Admin" : "User",
                posted_at: currentDateTime
            }
            const petDonation = await axiosPublic.post('/donationCampaign', donationCamp)

            console.log(petDonation);
            if(petDonation.data.insertedId){
                reset();
                Swal.fire({
                    title: "Donation Campaign created successfully!",
                    icon: "success",
                    draggable: true
                  });
            }
        }
        console.log(res.data)
    }

    return (
        <div>
            <Helmet>
                <title>Adoptopia | Create Donation Campaign</title>
            </Helmet>
            <SectionTitle subHeading={'Create Donation Campaign'}
            heading={'create a new pet donation campaign'}
            ></SectionTitle>

            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-pcolor rounded-lg p-7">
                    {/* pet image  */}
                    <FileInput id="file" {...register("image", { required: true })} />
                    {errors.image && <span className="text-red-600">Image is required</span>} 

                    <div className="grid grid-cols-2 gap-5 pt-4">
                        <div className="">
                            <FloatingLabel label="Maximum donation amount"  type="number "{...register("max_amount", { required: true })}
                            className="border-pcolor focus:border-pcolor peer-focus:text-pcolor" 
                            variant="outlined"  />
                            {errors.max_amount && <span className="text-red-600">Maximum Donation amount is required</span>}          
                        </div>
                        <div className="pt-">
                            <input label="Donation Last Date" type="date" placeholder="Donation last date" {...register("lastDate", { required: true })}
                            className="w-full py-2.5 text-gray-600 rounded-lg border-pcolor
                            focus:border-pcolor  peer-focus:text-pcolor"
                            variant="outlined"  />
                            <p className="text-sm text-bold text-gray-500">Select donation last date!</p>
                            {errors.lastDate && <span className="text-red-600">Donation last date is required</span>}
                        </div>
                    </div>
                    

                    <div className="py-4">
                        <FloatingLabel label="Short Description" type="text" {...register("shortDescription", { required: true })} 
                        className="border-pcolor focus:border-pcolor  peer-focus:text-pcolor" 
                        variant="outlined"  />
                    </div>
                    {errors.shortDescription && <span className="text-red-600">Pet short description is required</span>}

                    <div className="relative">
                        <textarea
                            id="floating_textarea" {...register("longDescription", { required: true })}
                            className="peer block w-full rounded-lg border-pcolor bg-transparent px-2.5 pt-4 text-sm  focus:border-pcolor focus:ring-0 focus:ring-pcolor dark:border-pcolor dark:pcolor dark:focus:border-pcolor dark:focus:ring-pcolor"
                            placeholder=" "
                            rows="4"
                        ></textarea>
                        {errors.longDescription && <span className="text-red-600">Long description is required</span>}
                        <label
                            htmlFor="floating_textarea"
                            className="absolute left-2.5 top-1.5 peer-focus:px-3 text-gray-500 bg-white peer-focus:bg-white z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-pcolor dark:text-pcolor dark:peer-focus:text-pcolor"
                        >
                            Long Description
                        </label>
                    </div>

                    <input className="bg-pcolor text-white fonnt-bold w-full py-2 mt-4 rounded-lg" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default CreateDonation;