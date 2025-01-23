// import { useState } from "react";
// import { Button, FloatingLabel, Label, Textarea, TextInput } from "flowbite-react";
// import Select from 'react-select';
import { FileInput, FloatingLabel } from "flowbite-react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const FileUpload = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
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
                longDescription: data.longDescription

            }
            const petRes = await axiosPublic.post('/petList', petList)
            console.log(petRes);
            if(petRes.data.insertedId){
                reset();
                Swal.fire({
                    title: "Your pet added successfully!",
                    icon: "success",
                    draggable: true
                  });
            }
        }
        console.log(res.data)
    }

    return (
        <div>
            <SectionTitle subHeading={'Add a Pet'}
            heading={'Add a new pet for adoption'}
            ></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* pet image  */}

                    <FileInput id="file" {...register("image", { required: true })} />

                    <div className="flex">
                        <FloatingLabel label="Name" {...register("name", { required: true })}
                        className="border-pcolor focus:border-pcolor text-pcolor peer-focus:text-pcolor" 
                        variant="outlined"  />
                        {/* {errors.name && <span className="text-red-600">Name is required</span>} */}

                        <FloatingLabel label="Age" {...register("age", { required: true })}
                        className="border-pcolor focus:border-pcolor text-pcolor peer-focus:text-pcolor" 
                        variant="outlined"  />
                    {/* {errors.age && <span className="text-red-600">Name is required</span>} */}

                    </div>
                    <div>
                        {/* <input {...register("name")} /> */}
                        <select defaultValue="default" {...register("category", { required: true })}
                        className="select select-bordered w-full max-w-xs">
                            <option disabled value="default">Select Category</option>
                            <option value="cat">Cat</option>
                            <option value="rabbit">Rabbit</option>
                            <option value="bird">Bird</option>
                            <option value="dog">Dog</option>
                            <option value="fish">Fish</option>
                        </select>
                        {/* {errors.category && <span className="text-red-600">Name is required</span>} */}
                    </div>

                    <FloatingLabel label="Location" type="text" {...register("location", { required: true })}
                    className="border-pcolor focus:border-pcolor text-pcolor peer-focus:text-pcolor" 
                    variant="outlined"  />
                    {/* {errors.location && <span className="text-red-600">Name is required</span>} */}

                    <FloatingLabel label="Short Description" type="text" {...register("shortDescription", { required: true })} 
                    className="border-pcolor focus:border-pcolor text-pcolor peer-focus:text-pcolor" 
                    variant="outlined"  />
                    {/* {errors.shortDescriptionn && <span className="text-red-600">Name is required</span>} */}

                    <div className="relative">
                        <textarea
                            id="floating_textarea" {...register("longDescription", { required: true })}
                            className="peer block w-full rounded-lg border-pcolor bg-transparent px-2.5 pt-4 text-sm text-pcolor focus:border-pcolor focus:ring-0 focus:ring-pcolor dark:border-pcolor dark:pcolor dark:focus:border-pcolor dark:focus:ring-pcolor"
                            placeholder=" "
                            rows="4"
                        ></textarea>
                        {/* {errors.longDescription && <span className="text-red-600">Name is required</span>} */}
                        <label
                            htmlFor="floating_textarea"
                            className="absolute left-2.5 top-1.5 peer-focus:px-3 peer-focus:bg-white z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-pcolor duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-pcolor dark:text-pcolor dark:peer-focus:text-pcolor"
                        >
                            Long Description
                        </label>
                    </div>

                    <input className="bg-pcolor w-full py-2" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default FileUpload;
