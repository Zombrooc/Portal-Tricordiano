/* eslint-disable @next/next/no-img-element */
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";

import AuroraEffect from "../../components/AuroraEffect";
// import Loading from "../../components/Loading";
import Alert from "../../components/Alert";

import { Middlebox, BrandName } from "../../styles/auth/styles";

export default function Signin({ error, field }) {
  const router = useRouter();
  const { signIn, isAuthenticated, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmitAction = async (data) => {
    setLoading(true);

    const response = await signIn(data);

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
      {/* <Loading show={loading} /> */}
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
            Entre agora com usa conta
          </span>
          <span style={{ fontSize: "1rem" }}>
            {" "}
            ou{" "}
            <Link href="/auth/signup">
              <a style={{ color: "var(--color-success)" }}>
                crie agora sua conta.
              </a>
            </Link>
          </span>

          <br />
          <Alert show={showError} message={errorMessage} />
          <form onSubmit={handleSubmit(handleSubmitAction)}>
            <div className="formGroup">
              <label htmlFor="email">
                E-mail
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                  {...register("email", { required: true })}
                />
              </label>
            </div>
            <div className="formGroup">
              <label htmlFor="password">
                Senha
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Digite sua senha"
                  {...register("password", { required: true })}
                />
              </label>
            </div>
            <button type="submit">
              <LockClosedIcon style={{ width: "1.25rem", height: "1.25rem" }} />
              Entrar
            </button>
          </form>
        </Middlebox>
      </div>

      {/* <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Alert show={showError} message={errorMessage} />
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Entre agora com usa conta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              ou{" "}
              <Link href="/auth/signup">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  crie agora sua conta
                </a>
              </Link>
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(handleSubmitAction)}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  E-mail
                </label>
                <input
                  {...register("email", { required: true })}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Endere??o de e-mail"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  {...register("password", { required: true })}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div> */}
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
