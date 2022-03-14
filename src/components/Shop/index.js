/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

import { AuthContext } from "../contexts/AuthContext";
import { api } from "../../services/api";

const Shop = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const router = useRouter();

  const { data, error } = useSWR("/products", (url) =>
    api.get(url).then((res) => res.data)
  );

  if (error) return <div>ERROR</div>;
  if (!data) return <div>Carregando...</div>;

  const handleProductCheckout = async (event) => {
    event.preventDefault();

    if (isAuthenticated ) {
      api
        .post("/checkout/createCheckoutSession", {
          productId: event.target.name,
        })
        .then(({ data }) => router.push(data.redirectURL));
    }else {
      router.push("/auth/signin");
    }
  };

  return (
    <div className="flex flex-wrap">
      {data.map((product) => {
        return (
          <div
            className="w-80 flex justify-center items-center"
            key={product._id}
          >
            <div className="w-full p-4">
              <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                <div className="prod-title">
                  <p className="text-2xl uppercase text-gray-900 font-bold">
                    {product.title}
                  </p>
                  <p className="uppercase text-sm text-gray-400">
                    {product.description}
                  </p>
                </div>
                <div className="prod-img">
                  <img
                    src={product.image}
                    className="w-full object-cover object-center"
                    alt={product.title}
                  />
                </div>
                <div className="prod-info grid gap-10">
                  <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    <p className="font-bold text-xl">R$ {product.price} </p>
                    {/* <Link
                      
                      href={`/checkout?product=${product._id}`}
                    >
                      <a > Comprar agora</a>
                    </Link> */}
                    <form
                      method="POST"
                      onSubmit={(event) => handleProductCheckout(event)}
                      name={product._id}
                    >
                      <button
                        type="submit"
                        className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                      >
                        Checkout
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
