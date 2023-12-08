// import from stripe
import { loadStripe } from '@stripe/stripe-js';
import './Checkout.css'

// load stripe
let stripePromise;

// load stripe using publishable key 
const getStripe = async () => {
    if (!stripePromise) {
        stripePromise = await loadStripe("pk_test_51OKl7kHp7poW3XwHXgKHG7WVeUfO9gG8GJWZ65XFb6qdFBYhEsvpUIo0BUCWZjkai552gZp39fcABXM1tC3Z5rvq00tsA2duWd");
    }

    // return stripe 
    return stripePromise;
}

// stripe component
const Checkout = () => {

    // service obj
    const service = {
        price: '', // price hook from stripe 
        quantity: 1
    }

    // checkout options obj
    const checkoutOptions = {
        lineItems: [service],
        mode: "payment",
        /* current domain */
        successURL: "",
        /* redirect domain */
        cancelURL: ""
    }

    // redirect to stripe checkout
    const redirectToStripe = async () => {
        console.log();

        // stripe
        const stripe = await getStripe();

        // 
        cosnt { error } = await stripe.redirectToStripe(checkoutOptions)
    }

    // return checkout form that links to stripe on button click
    return (
        <div>
            {/* build checkout form */}
            <h1>Invoice</h1>
            <p>Service Title</p>
            <p>Service Description</p>
            <h2>Service Cost</h2>
            <button>Pay Here</button>
        </div>
    );
}

// export checkout
export default Checkout;