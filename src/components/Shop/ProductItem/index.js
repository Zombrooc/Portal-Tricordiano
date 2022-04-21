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

  // const handleProductCheckout = async (product) => {
  //   if (isAuthenticated) {
  //     api
  //       .post("/checkout/createCheckoutSession", {
  //         productId: product,
  //       })
  //       .then(({ data }) => router.push(data.redirectURL));
  //   } else {
  //     router.push("/auth/signin");
  //   }
  // };

  const handleProductCheckout = async (product) => {
    if (isAuthenticated) {
      //   api
      //     .post("/checkout/clientSecret", {
      //       productId: product,
      //     })
      //     .then(({ data: { clientSecret } }) => {
      //       // router.push({
      //       //   pathname: "/checkout",
      //       //   query: { clientSecret },
      //       // });
      //       router.push(`/checkout?clientSecret=${clientSecret}`);
      //     });
      // } else {
      //   router.push("/auth/signin");
      // }

      const {
        data
      } = await api.post("/checkout/clientSecret", {
        productId: product,
      });

      console.log(data)

      router.push(`/checkout?clientSecret=${clientSecret}`);
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
  );
};

export default ProductItem;
