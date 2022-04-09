/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { UserAddIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { AuthContext } from "../../contexts/AuthContext";

import { Middlebox, BrandName } from "../../styles/auth/styles";

import AuroraEffect from '../../components/AuroraEffect';
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";

export default function Signup({ error, field }) {
  const { user, isAuthenticated, signUp } = useContext(AuthContext);

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(null);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (error && field) {
      setShowError(true);
      setErrorMessage(error);
    } else {
      setShowError(false);
      setErrorMessage("");
    }

    if (user && isAuthenticated) {
      router.push("/");
    }
  }, [error, field, user, isAuthenticated]);

  const handleSubmitAction = async ({ name, email, password }) => {
    setLoading(true);
    const response = await signUp({ name, email, password });

    setLoading(false);
    if (response.error && response.field) {
      setShowError(true);
      setErrorMessage(response.error);
    } else {
      setShowError(false);
      setErrorMessage("");
      return;
    }
  };
  return (
    <>
      <Loading show={loading} />
      <AuroraEffect />

      <div
        className="container"
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Middlebox>
          <BrandName>
            Portal
            <br /> Tricordiano
          </BrandName>
          <br />
          <span
            style={{
              fontSize: "1.875rem",
              fontWeight: "800",
              marginTop: "17px",
              lineHeight: "2.25rem",
              textAlign: "center",
            }}
          >
            Crie um conta na plataforma
          </span>
          <span style={{ fontSize: "1rem" }}>
            {" "}
            ou{" "}
            <Link href="/auth/signin">
              <a style={{ color: "var(--color-success)" }}>entre agora.</a>
            </Link>
          </span>

          <br />
          <Alert show={showError} message={errorMessage} />
          <form onSubmit={handleSubmit(handleSubmitAction)}>
            <div className="formGroup">
              <label htmlFor="name"> Nome </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome"
                {...register("name", { required: true })}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                {...register("email", { required: true })}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
                {...register("password", { required: true })}
              />
            </div>
            <button type="submit">
              <UserAddIcon style={{ width: "1.25rem", height: "1.25rem" }} />
              Criar conta
            </button>
          </form>
        </Middlebox>
      </div>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      error: null,
      field: null,
    },
  };
}
