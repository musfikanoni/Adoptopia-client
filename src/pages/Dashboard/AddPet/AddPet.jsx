import { useState } from "react";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import Select from 'react-select';
const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (file) {
            console.log(file)
        } else {
            console.log("No file selected");
        }
    };

    const options = [
        { value: 'cat', label: 'Cat' },
        { value: 'rabbit', label: 'Rabbit' },
        { value: 'bird', label: 'Bird' },
        { value: 'dog', label: 'Dog' },
        { value: 'fish', label: 'Fish' },
      ];
      
      
        const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="max-w-2xl mx-auto p-5 border rounded-lg">


            <form className="flex max-w-2xl flex-col gap-4">

            <label htmlFor="fileInput" className="block">
                Pet Image
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden">
                {/* Hidden File Input */}
                <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
                {/* Custom File Input Button */}
                <label
                    htmlFor="fileInput"
                    className="bg-lime-500 text-white px-4 py-2 cursor-pointer"
                >
                    Choose File
                </label>
                {/* Display File Name */}
                <span className="flex-1 px-3 text-gray-700">
                    {file ? file.name : "No file chosen"}
                </span>
            </div>
            <button
                onClick={handleUpload}
                className="mt-4 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
            >
                Upload
            </button>

            <div>
                <div className="mb-2 block">
                <Label htmlFor="name" value="Pet Name" />
                </div>
                <TextInput id="name" type="text" placeholder="Pet name" required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="petAge" value="Pet Age" />
                </div>
                <TextInput id="petAge" type="text" placeholder="Pet age" required />
            </div>

            <div className="App">
            <div className="mb-2 block">
                <Label htmlFor="petAge" value="Pet Category" />
                </div>
            <Select 
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                isSearchable={false}
                options={options}
            />
            </div>

            <div>
                <div className="mb-2 block">
                <Label htmlFor="short" value="Short description" />
                </div>
                <TextInput id="short" type="text" placeholder="Pet short description" required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="long" value="Long description" />
                </div>
                <Textarea id="long" type="text" placeholder="Pet long description" required />
            </div>
            <Button type="submit">Add Pet</Button>
            </form>

        </div>
    );
};

export default FileUpload;
