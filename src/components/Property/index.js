/* eslint-disable @next/next/no-img-element */
import {
  BriefcaseIcon,
  CheckIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

import { IoMdBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";

const Property = () => {
  return (
    <div className="p-5 min-w-screen h-screen text-gray-700 w-full overflow-auto">
      <div className="lg:flex lg:items-center lg:justify-between rounded-lg mb-3">
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-l-lg mr-5"
          src="https://s2.glbimg.com/S68qSscRNuEDNZ2vavmrtyUWfA8=/512x320/smart/e.glbimg.com/og/ed/f/original/2018/12/10/apartamento-pequeno-doob-arquitetura09.jpg"
          alt=""
        />
        <div className="flex-1 min-w-0">
          <h2 className="text-base font-bold leading-7 text-gray-900 sm:text-lg sm:truncate">
            Edificil Manhatan
          </h2>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <BriefcaseIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
              Locação e Venda
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
              Av. Sete de Setembro, 501 - Centro, Três Corações, MG
            </div>
          </div>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
              Locação R$ 650
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
              Venda: R$ 150.000
            </div>
          </div>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <IoMdBed className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
              3 Quarto(s) e 1 Suite
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <FaBath className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />1
              Banheiro(s)
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <GiHomeGarage className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
              1 vaga
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" />
              Publish
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Property;
