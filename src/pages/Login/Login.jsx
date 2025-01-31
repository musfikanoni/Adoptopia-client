
import { Button, Label, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../components/SectionTitle/SocialLogin/SocialLogin";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const {signIn}  = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.form?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
                Swal.fire({
                    title: "User Login Successful",
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
                navigate(from, {replace: true});
            }

        )
    }

    return (
        <div>
            <Helmet>
                <title>Adoptopia | Login</title>
            </Helmet>
            <div className="max-w-2xl mx-auto my-32">
                <form onSubmit={handleLogin} className="flex max-w-full flex-col gap-4 border-2 p-5 border-pcolor rounded-lg">
                    <h2 className="text-3xl font-bold text-center py-5">Welcome Back!</h2>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput name="email" id="email1" type="email" placeholder="Email" required />
                    </div>
                    <div className="relative">
                        <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput name="password" id="password1" type={showPassword ? 'text' : 'password'} placeholder="Password" required />
                        <button className="btn">
                            <button className="btn absolute right-4 top-11"
                                onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye /> :<FaEyeSlash /> 
                                    }
                                    
                                </button>
                            </button>
                    </div>
                    <Button type="submit" className="bg-pcolor py-1 font-bold text-xl">Login</Button>
                    <SocialLogin></SocialLogin>
                    <p>Are you new here? <Link to='/register' className="text-pcolor">Create an account</Link> </p>
                </form>
            </div>

        </div>
    );
};

export default Login;