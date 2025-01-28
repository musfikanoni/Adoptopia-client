import { useEffect, useState } from "react";


const useDonationCampaign = () => {
    const [donationCampaign, setDonationCampaign] = useState([]);
    const [loading, setLoading] = useState(true);

        useEffect(() => {
            fetch('https://assignment-12-server-amber.vercel.app/donationCampaign')
            .then(res => res.json())
            .then(data => {
                setDonationCampaign(data);
                setLoading(false);
            });
        }, [])

    return [donationCampaign, loading];
};

export default useDonationCampaign;