import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const AddPet = () => {
    return (
        <div>

            <form className="flex max-w-md flex-col border p-5 gap-4">
            <div>
                <div className="mb-2 block">
                <Label htmlFor="email1" value="pet Name" />
                </div>
                <TextInput id="email1" type="text" placeholder="Pet name" required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="password1" value="Pet Age" />
                </div>
                <TextInput id="password1" type="number" placeholder="pet age" required />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default AddPet;