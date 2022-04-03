/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { UserAddIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { api } from "../../services/api";

import { Middlebox, BrandName } from "./styles";

import Loading from "../../components/Loading";
import Alert from "../../components/Alert";

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const { register, handleSubmit } = useForm();

  const handleSubmitAction = async ({ name, email, password }) => {
    setLoading(true);
    try {
      const { data } = await api.post("/users", {
        email,
        name,
        password,
      });

      if (data.name && data.userId) {
        router.push("/auth/signin");
      }
    } catch (error) {
      setLoading(false);
      setShowError(true);
      console.log(error.response);
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <>
      <Loading show={loading} />

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
      {/* <Loading show={loading} />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Alert message={errorMessage} show={showError} />
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Cadastre-se agora na plataforma
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              ou{" "}
              <Link href="/auth/signin">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  entre agora
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
                <label htmlFor="name" className="sr-only">
                  Nome
                </label>
                <input
                  {...register("name", { required: true })}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  E-mail
                </label>
                <input
                  {...register("email", { required: true })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="current-email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Endereço de e-mail"
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
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
}
