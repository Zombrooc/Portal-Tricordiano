import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";

import Navbar from "../../components/Navbar";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import AuroraEffect from "../../components/AuroraEffect";

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);

const Checkout = ({ clientSecret }) => {
  const router = useRouter();

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
        {clientSecret && (
          <Elements
            options={{ clientSecret: clientSecret, loader: 'always' }}
            stripe={stripePromise}
          >
            <CheckoutForm options={options} stripe={stripePromise}/>
          </Elements>
        )}
      </div>
    </>
  );
};

export function getServerSideProps(context) {
  const { query } = context;
  return {
    props: {
      clientSecret: query.clientSecret,
    },
  };
}

export default Checkout;
