import React from 'react';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const MyDonationCamp = () => {
    return (
        <div>
            <Helmet>
                <title>Adoptopia | My Added Pets</title>
            </Helmet>
            <SectionTitle subHeading={'My Donation Campaigns'} heading={'Manage Donation Campaigns'} />

            <div>
                <h2 className='text-center text-3xl'>You don't have any Donation Campaign</h2>
            </div>
        </div>
    );
};

export default MyDonationCamp;