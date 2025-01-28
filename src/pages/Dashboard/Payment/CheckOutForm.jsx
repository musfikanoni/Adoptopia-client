import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useDonationCampaign from "../../../hooks/useDonationCampaign";



const CheckOutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [donationCampaign] = useDonationCampaign();
    const totalAmount = donationCampaign.reduce((total, donation) => total + donation.amount, 0);

    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {amount: totalAmount})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    }, [axiosSecure, totalAmount]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return
        }
        
        const card = elements.getElement(CardElement)
        if(card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
            setError('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <CardElement 
            options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}>

            </CardElement>
            <button type="submit" className="btn px-5 py-2 font-bold rounded bg-pcolor text-white" disabled={!stripe || !clientSecret}>Donate</button>
            <p className="text-red-600">{error}</p>
        </div>
    </form>
    );
};

export default CheckOutForm;