import React, { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  CardElement,
} from "@stripe/react-stripe-js";
import { CreditCardIcon, DocumentTextIcon } from "@heroicons/react/outline";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentMethod, setPaymentmethod] = useState(null);

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:3000/checkout/success`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      return;
    }
  };

  const handlePaymentMethod = (payment) => {
    setPaymentmethod(payment);

    return;
  };

  return (
    <div
      className="container"
      style={{
        background: "var(--color-light)",
        padding: "15px 30px",
        borderRadius: "25px",
        height: "auto",
        width: "650px",
      }}
    >
      <form id="payment-form" onSubmit={handleSubmit}>
        {/* <div class="container"> */}
          {/* <div class="radio-tile-group">
            <div class="input-container">
              <input
                id="drive"
                class="radio-button"
                type="radio"
                name="radio"
                onChange={() => handlePaymentMethod("CC")}
              />
              <div class="radio-tile">
                <div class="icon car-icon">
                  <CreditCardIcon style={{ width: "3rem", height: "3rem" }} />
                </div>
                <label for="drive" class="radio-tile-label">
                  Cartão de Crédito
                </label>
              </div>
            </div>

            <div class="input-container">
              <input
                id="fly"
                class="radio-button"
                type="radio"
                name="radio"
                onChange={() => handlePaymentMethod("boleto")}
              />
              <div class="radio-tile">
                <div class="icon fly-icon">
                  <DocumentTextIcon style={{ width: "3rem", height: "3rem" }} />
                </div>
                <label for="fly" class="radio-tile-label">
                  Boleto
                </label>
              </div>
            </div>
          </div>
        </div> */}

        <PaymentElement id="payment-element" options={
          {
            billingDetails: 'auto',
            wallets: {
              googlePay: 'auto'
            }
          }
        }/>

        {/* <div
          style={{ display: `${paymentMethod === "CC" ? "block" : "none"}` }}
        >
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>

        <div
          style={{
            display: `${paymentMethod === "boleto" ? "block" : "none"}`,
          }}
        >
          {" "}
          <div className="formGroup">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              // {...register("email", { required: true })}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              // {...register("password", { required: true })}
            />
          </div>
        </div> */}

        {/* <CardElement options={CARD_ELEMENT_OPTIONS} /> */}
        <br />
        <button disabled={!stripe || !elements} id="submit">
          <span id="button-text">Pagar Agora</span>
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
