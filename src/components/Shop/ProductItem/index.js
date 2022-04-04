import { useContext } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../../../contexts/AuthContext";
import { api } from "../../../services/api";

import {
  ProductCard,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductOwner,
  ProductButton,
} from "./styles";

const ProductItem = ({ product }) => {
  const router = useRouter();

  const { isAuthenticated } = useContext(AuthContext);

  const handleProductCheckout = async (product) => {
    if (isAuthenticated) {
      api
        .post("/checkout/createCheckoutSession", {
          productId: product,
        })
        .then(({ data }) => router.push(data.redirectURL));
    } else {
      router.push("/auth/signin");
    }
  };

  return (
    <ProductCard>
      <img src={product.image} alt={product.title || "Imagem do Produto"} />
      <ProductInfo>
        <div>
          <ProductTitle>{product.title}</ProductTitle>  &bull; 
          <span> Novo</span>
        </div>
        <ProductPrice>
          R${product.price.toFixed(2)}
          <span style={{ textDecoration: "underline" }}>    </span>
        </ProductPrice>
        <ProductOwner>
          Vendedor: <span> {product.author.name}</span>
        </ProductOwner>
      </ProductInfo>
      <ProductButton onClick={() => handleProductCheckout(product._id)}>
        Comprar
      </ProductButton>
    </ProductCard>
    // <div className="w-80 flex justify-center items-center" >
    //   <div className="w-full p-4">
    //     <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
    //       <div className="prod-title">
    //         <p className="text-2xl uppercase text-gray-900 font-bold">
    //           {product.title}
    //         </p>
    //         <p className="uppercase text-sm text-gray-400">
    //           {product.description}
    //         </p>
    //       </div>
    //       <div className="prod-img">
    //         <img
    //           src={product.image}
    //           className="w-full object-cover object-center"
    //           alt={product.title}
    //         />
    //       </div>
    //       <div className="prod-info grid gap-10">
    //         <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
    //           <p className="font-bold text-xl">R$ {product.price} </p>
    //           <form
    //             method="POST"
    //             onSubmit={(event) => handleProductCheckout(event)}
    //             name={product._id}
    //           >
    //             <button
    //               type="submit"
    //               className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
    //             >
    //               Checkout
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductItem;
