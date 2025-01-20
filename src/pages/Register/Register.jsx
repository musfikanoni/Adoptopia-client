import { Button, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const {register, handleSubmit, reset,
    formState: { errors }} = useForm();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                console.log('profile updated');
                reset();
                Swal.fire({
                    title: "Sign Up Successful",
                    icon: "success",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                        `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                        `
                    }
                });

            })
            .catch(error => console.log(error));
        })
    }

    return (
        <div className="pt-20">
            <Helmet>
                <title>Adoptopia | Register</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="name" value="Your Name" />
                    </div>
                    <TextInput {...register("name", { required: true })} id="name" type="text" placeholder="Your Name" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput {...register("email", { required: true })} id="email1" type="email" placeholder="Email" />
                    {errors.email && <span className="text-red-600">email is required</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="photo" value="Your Photo URL" />
                    </div>
                    <TextInput {...register("photoURL", { required: true })} id="photo" type="photo" placeholder="Photo URL" />
                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                </div>
                <div className="relative">
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput {...register("password", { required: true, 
                        minLength: 6, 
                        maxLength: 20,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])/ 
                        })} id="password1" type={showPassword? 'text' : 'password'} placeholder="Password" />
                    {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                    {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                    {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less 20 characters</span>}
                    {errors.password?.type === 'pattern' && <span className="text-red-600">Password must one uppercase, one lowercase, one number, one special character</span>}
                    <button className="btn absolute right-4 top-11"
                    onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaEye /> :<FaEyeSlash /> 
                        }
                        
                    </button>
                </div>
                {/* <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div> */}
                <Button type="submit">Register</Button>
                <p>Have you Already a account? <Link to='/login'>login here</Link> </p>
            </form>

        </div>
    );
};

export default Register;