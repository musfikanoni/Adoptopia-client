import { Helmet } from "react-helmet";
import useDonationCampaign from "../../hooks/useDonationCampaign";
import DonationCampaignCard from "../Shared/DonationCampaignCard/DonationCampaignCard";

const DonationCampaigns = () => {
    const [donationCampaign] = useDonationCampaign();
    return (
        <div className="max-w-screen-xl mx-auto my-24">
            <Helmet>
                <title>Adoptopia | Donation Campaigns</title>
            </Helmet>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-9">
                {
                    donationCampaign.map(donation => <DonationCampaignCard key={donation._id} donation={donation}></DonationCampaignCard>)
                }
            </div>
        </div>
    );
};

export default DonationCampaigns;