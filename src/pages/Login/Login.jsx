
import { Button, Label, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    // const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const {signIn}  = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(ressult => {
            const user = ressult.user;
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
            }

        )
    }

    const handlevalided = (e) => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    }


    return (
        <div>
            <Helmet>
                <title>Adoptopia | Login</title>
            </Helmet>
            <form onSubmit={handleLogin} className="flex max-w-md flex-col pt-20 gap-4 border-2 p-5 bg-slate-400">
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
                <div>
                    <div className="mb-2 block">
                        <Label>
                            <LoadCanvasTemplate theme="dark" />
                        </Label>
                    </div>
                    <TextInput onBlur={handlevalided} type="text" placeholder="Type the captcha above" />
                    {/* <Button  className="w-full mt-5">valided</Button> */}
                </div>
                {/* <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div> */}
                <Button type="submit" disabled={disabled}>Login</Button>
                <p>Are you new here? <Link to='/register'>Create an account</Link> </p>
            </form>

        </div>
    );
};

export default Login;