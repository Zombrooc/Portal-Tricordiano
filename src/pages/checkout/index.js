/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { api } from "../../services/api";
import CheckoutForm from "../../components/CheckoutForm";
import { set } from "react-hook-form";

const stripePromise = loadStripe(`${process.env.STRIPE_SECRET_KEY}`);

export default function Checkout() {
  const [ clientSecret, setClientSecret] = useState()
  // const router = useRouter();

  // const client_secret = router.params('client_secret');

  useEffect(() => {
    const { token } = parseCookies();

    const clientSecret = api
    .post(
      "/checkout/clientSecret",
      {
        productId: ctx.query.product,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(response => response.data)
    .catch((err) => console.log(err));

    setClientSecret(clientSecret);
  }, []);

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe'
    },
  };

  console.log(options);

  return (
    <>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { ["nextauth.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  await api.get('/users')

  return {
    props: {

    },
  };
};
