import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Avatar } from 'flowbite-react';
import { RiFunctionAddLine } from 'react-icons/ri';
import { VscGitPullRequestNewChanges } from 'react-icons/vsc';
import { FaHandHoldingUsd } from 'react-icons/fa';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const photo = user.photoURL;
    const name = user.displayName;
    const email = user.email;

    return (
        <div>
           <div className='bg-pcolor mt-12 pt-10 pb-24 relative rounded-b-xl'>
                <h2 className='md:text-4xl text-xl font-bold text-center text-white'>My Profile</h2>
            </div> 
            <div className="bg-lime-200">
            <div className="flex flex-wrap z-10 relative -mt-16 justify-center gap-2">
                <Avatar img={photo} rounded size="xl" bordered />
            </div>
            
                <h2 className='md:text-3xl text-lg font-bold text-center py-3'>Welcome, {name}!</h2>
                <div className="lg:flex lg:flex-row md:flex-col flex-col py-5">
                    <div className="pl-20 w-4/12 border-r border-pcolor">
                        <div>
                            <h3 className='font-bold text md:text-xl text-lg'>Full Name:</h3>
                            <p>{name}</p>
                        </div>
                        <div className='py-3'>
                            <h3 className='font-bold text md:text-xl text-lg'>Email:</h3>
                            <p>{email}</p>
                        </div>
                        <div>
                            <h3 className='font-bold text md:text-xl text-lg'>Phone:</h3>
                            <p className='text-lg font-bold'>N/A</p>
                        </div>
                    </div>
                    <div className='w-8/12'>
                        <h2 className='text-center font-bold md:text-3xl text-xl'>Overview</h2>
                        <div className="grid grid-cols-3 justify-center gap-5 mx-10 my-7">
                            <div className="bg-pcolor justify-center text-center font-bold text-xl py-5 rounded-xl">
                                 <RiFunctionAddLine className="text-4xl mx-auto" />
                                 <p className='pt-2'>My Pets 0</p></div>
                            <div className="bg-pcolor text-center font-bold text-xl py-5 rounded-xl">
                                <VscGitPullRequestNewChanges className="text-4xl mx-auto" />
                                <p className='pt-2'>Requests 0</p>
                            </div>
                            <div className="bg-pcolor text-center font-bold text-xl py-5 rounded-xl">
                                <FaHandHoldingUsd className="text-4xl mx-auto" />
                                <p className='pt-2'>My Campaigns 0</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;