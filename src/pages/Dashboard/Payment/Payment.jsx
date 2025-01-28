import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const striprPromise = loadStripe(import.meta.env.VITE_Payment_Geteway_PK)
const Payment = () => {
    return (
        <div>
            
            <Elements stripe={striprPromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;