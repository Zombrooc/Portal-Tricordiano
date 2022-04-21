import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";

import Navbar from "../../components/Navbar";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import AuroraEffect from "../../components/AuroraEffect";

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);

const Checkout = () => {
  const router = useRouter();

  const [intent, setIntent] = useState(router.query);

  return (
    <>
      <Navbar />
      <AuroraEffect />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {intent && (
          <Elements
            options={{ clientSecret: intent.client_secret, loader: 'always', ...intent }}
            stripe={stripePromise}
          >
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </>
  );
};

export default Checkout;
