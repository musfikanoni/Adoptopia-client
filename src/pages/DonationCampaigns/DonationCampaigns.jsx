import { Helmet } from "react-helmet";
import useDonationCampaign from "../../hooks/useDonationCampaign";
import DonationCampaignCard from "../Shared/DonationCampaignCard/DonationCampaignCard";
import Cover from "../Shared/Cover/Cover";

const DonationCampaigns = () => {
    const [donationCampaign] = useDonationCampaign();
    return (
        <div className="max-w-screen-xl mx-auto">
            <Helmet>
                <title>Adoptopia | Donation Campaigns</title>
            </Helmet>
            <div  className="h-[90vh] cam-banner rounded-xl object-fill bg-cover w-full bg-no-repeat relative">
                <div className="mix-blend-darken h-[90vh] rounded-xl
                     bg-slate-900 opacity-60 relative"></div>
                     <Cover subHeading={'Donation Campaigns'} heading={'Donate to Support Pets in Need!'}></Cover>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-9 my-20">
                {
                    donationCampaign.map(donation => <DonationCampaignCard key={donation._id} donation={donation}></DonationCampaignCard>)
                }
            </div>
        </div>
    );
};

export default DonationCampaigns;