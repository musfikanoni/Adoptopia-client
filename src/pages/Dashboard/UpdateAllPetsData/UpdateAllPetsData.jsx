import React, { useEffect } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAllPets from '../../../hooks/useALlPets';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import { FileInput, FloatingLabel } from 'flowbite-react';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`; 

const UpdateAllPetsData = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const { id: petId } = useParams();
    const [ allPets ] = useAllPets();

useEffect(() => {
    if (allPets && allPets.length > 0) {
        const pet = allPets.find(pet => pet._id === petId);
        if (pet) {
            reset({
                petId: pet._id,
                name: pet.pet_name,
                age: pet.pet_age,
                category: pet.pet_category,
                location: pet.pet_location,
                shortDescription: pet.shortDescription,
                longDescription: pet.longDescription,
            });
        }
    }
}, [allPets, reset, petId]);


    const onSubmit = async (data) => {
    
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            const petList = {
                
                pet_image: res.data.data.display_url,
                pet_name: data.name,
                pet_age: parseFloat(data.age),
                pet_category: data.category,
                pet_location: data.location,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                email: user?.email

            }
            const petRes = await axiosPublic.put(`/allPets/${petId}`, petList)

            if(petRes.data.modifiedCount){
                Swal.fire({
                    title: "Pet Updated successfully!",
                    icon: "success",
                    draggable: true
                  });
            }
        }
    }

    return (
        <div>
            <div>
                <Helmet>
                    <title>Adoptopia | Update All Pet</title>
                </Helmet>
                <SectionTitle subHeading={'Update Pet'}
                heading={'Update pet data'}
                ></SectionTitle>

                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-pcolor rounded-lg p-7">
                        {/* pet image  */}
                        <FileInput id="file" {...register("image", { required: true })} />

                        <div className="grid grid-cols-2 gap-5 py-4">
                            {/* Name */}
                            <div className="">
                                <FloatingLabel label="Name" {...register("name", { required: true })}
                                className="border-pcolor focus:border-pcolor peer-focus:text-pcolor" 
                                variant="outlined"  />          
                            </div>

                            {/* age */}
                            <div >
                                <FloatingLabel label="Age" {...register("age", { required: true })}
                                className="border-pcolor focus:border-pcolor peer-focus:text-pcolor" 
                                variant="outlined"  />
                            </div>
                        </div>

                        {/* category */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <select defaultValue="default" {...register("category", { required: true })}
                                className="select select-bordered focus:ring-0 focus:ring-pcolor text-gray-500 w-full max-w-4xl rounded-lg text-sm border-pcolor py-3">
                                    <option disabled value="default">Select Category</option>
                                    <option value="cat">Cat</option>
                                    <option value="rabbit">Rabbit</option>
                                    <option value="bird">Bird</option>
                                    <option value="dog">Dog</option>
                                    <option value="fish">Fish</option>
                                </select>
                            </div>

                            {/* location */}
                            <div>
                                <FloatingLabel label="Location" type="text" {...register("location", { required: true })}
                                className="border-pcolor focus:border-pcolor  peer-focus:text-pcolor" 
                                variant="outlined"  />
                            </div>
                        </div>

                        {/* short Description  */}
                        <div className="py-4">
                            <FloatingLabel label="Short Description" type="text" {...register("shortDescription", { required: true })} 
                            className="border-pcolor focus:border-pcolor  peer-focus:text-pcolor" 
                            variant="outlined"  />
                        </div>

                        {/* long Descriptionn  */}
                        <div className="relative">
                            <textarea
                                id="floating_textarea" {...register("longDescription", { required: true })}
                                className="peer block w-full rounded-lg border-pcolor bg-transparent px-2.5 pt-4 text-sm  focus:border-pcolor focus:ring-0 focus:ring-pcolor dark:border-pcolor dark:pcolor dark:focus:border-pcolor dark:focus:ring-pcolor"
                                placeholder=" "
                                rows="4"
                            ></textarea>
                            <label
                                htmlFor="floating_textarea"
                                className="absolute left-2.5 top-1.5 peer-focus:px-3 text-gray-500 bg-white peer-focus:bg-white z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-pcolor dark:text-pcolor dark:peer-focus:text-pcolor"
                            >
                                Long Description
                            </label>
                        </div>

                        <input className="bg-pcolor w-full py-2 mt-4 rounded-lg" type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateAllPetsData;