import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
// import './CheckoutFrom.css'

const CheckoutForm = ({ price, cart }) => {
    const { user } = useAuth()
    const [cardError, setCardError] = useState('')

    const stripe = useStripe()
    const elements = useElements()
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transectionId, setTransectionId] = useState('');




    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)

                })
        }
    }, [axiosSecure, price])

    // console.log(clientSecret);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: "card", card
        })
        if (error) {
            // console.log("error", error);
            setCardError(error.message)

        }
        else {
            // console.log("Payment Mathod", paymentMethod);
            setCardError('')
        }
        setProcessing(true)
        const { paymentIntent, error: confrimError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "unknow",
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );
        if (confrimError) {
            // console.log(confrimError);
            
        }

        // console.log("Payment Intent", paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            setTransectionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                transectionId: paymentIntent.id,
                price,
                date: new Date(),
                status: 'service pending',
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                itemName: cart.map(item => item.name)
            }
            // console.log(payment);
            axiosSecure.post('/payment', payment)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Payment success',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    // console.log(res.data);
                })

        }
    };
    return (
        <div>

            {cardError && <h3 className='text-2xl text-red-600 text-center my-4 rounded bg-slate-600'>{cardError}</h3>}
            {transectionId && <h3 className='text-2xl text-green-600 text-center my-4 rounded bg-slate-600'>Transection success with transsection id:{transectionId}</h3>}
            <form className='w-2/3 m-8' onSubmit={handleSubmit}>
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
                    }}
                />
                <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay {price}
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;