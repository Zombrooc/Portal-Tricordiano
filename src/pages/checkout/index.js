import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";

import CheckoutForm from "../../components/checkout/CheckoutForm";

// const stripePromise = process.env.STRIPE_PUBLISHABLE_KEY;

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState();

  const router = useRouter();

  const options = {
    clientSecret,
  };

  useEffect(() => {
    const { client_secret } = router.query;

    setClientSecret(client_secret);
  }, []);

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Checkout;
