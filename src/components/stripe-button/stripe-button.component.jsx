import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    
    // taken from the stripe website -> developers -> key section
    const publishableKey = 'pk_test_51HP4LfLAgqi0St3y464W2HHXTaVKPoWmXaDphVgVQsiXIJblRPf9rtfMOeHllEnxWjXfDyX5bif4zXUYJQoWTvOw00IEwnXDn8'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name= 'CRWN Clothing Ltd'
            billingAddress   
            shippingAddress 
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton
// will link to "checkout.component.jsx"