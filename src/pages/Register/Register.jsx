import { Button, Label, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet";

const Register = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Adoptopia | Register</title>
            </Helmet>
            <form className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="Email" required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="text" value="Your Photo URL" />
                    </div>
                    <TextInput id="text" type="text" placeholder="Photo URL" required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" placeholder="Password" required />
                </div>
                {/* <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div> */}
                <Button type="submit">Register</Button>
            </form>

        </div>
    );
};

export default Register;