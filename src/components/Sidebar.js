/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import {
  CollectionIcon,
  HomeIcon,
  ShoppingCartIcon,
  TicketIcon,
} from "@heroicons/react/outline";

const menuOptions = [
  {
    name: "Feed",
    icon: <CollectionIcon className="w-5 h-5" />,
  },
  {
    name: "Imóveis",
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    name: "Feira do Rolo",
    icon: <ShoppingCartIcon className="w-5 h-5" />,
  },
  {
    name: "Eventos",
    icon: <TicketIcon className="w-5 h-5" />,
  },
];

const Sidebar = ({ selectedMenu, handleSelectedMenu, user }) => {
  const [open, setOpen] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="relative md:flex">
        <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
          <Link href="/">
            <a className="block p-4 text-white font-bold">Portal Tricordiano</a>
          </Link>
          <button
            className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={classNames(
            !open ? "-translate-x-full" : "",
            "flex flex-col w-64 h-screen px-4 py-8 bg-white border-r space-y-6 fixed inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out z-50"
          )}
        >
          <h2 className="text-3xl font-semibold text-gray-800">
            Portal Tricordiano
          </h2>

          <div className="relative mt-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {menuOptions.map(({ name, icon }) => {
                return (
                  <a
                    key={name}
                    className={`hover:bg-gray-200 flex px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md items-center ${
                      selectedMenu === name ? "text-gray-700 bg-gray-200" : ""
                    }`}
                    href="#"
                    onClick={() => handleSelectedMenu(name)}
                  >
                    {icon}
                    <span className="mx-4 font-medium">{name}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex-col gap-4 flex">
              {user ? (
                <>
                  <div className="flex flex-row gap-4">
                    <div className="flex-shrink-0">
                      <a href="#" className="block relative">
                        <img
                          alt="profil"
                          src="https://www.tailwind-kit.com/images/person/1.jpg"
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </a>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold">{user.name}</span>
                      <span className="text-gray-400 text-xs">
                        @{user.username}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <div className="w-full flex flex-col">
                  <Link href="/auth/signin">
                    <a className="text-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Entrar
                    </a>
                  </Link>
                  <Link href="/auth/signup">
                    <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Cadastrar
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export const getServerSideProps = async (ctx) => {
  const { ['nextauth.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  await api.get('/users')

  return {
    props: {}
  }
}

export default Sidebar;