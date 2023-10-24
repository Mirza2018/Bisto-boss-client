import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';

// const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const stripePromise = loadStripe(import.meta.env.VITE_payment_Geteway_Pk)
const Payment = () => {
    const { cart } = useCart()
    // const abc = cart.reduce((a, b) => a + parseFloat(b.price), 0)

    const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full'>
            <SectionTitle subHeading="Proced to" heading="paymeny"></SectionTitle>
           
        
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;