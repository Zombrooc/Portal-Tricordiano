/* eslint-disable @next/next/no-img-element */
import useSWR from "swr";

import { api } from "../../services/api";

import ProductItem from "./ProductItem";

const ProductList = () => {
  
  const { data, error } = useSWR("/products", (url) =>
    api.get(url).then((res) => res.data)
  );

  if (error) return <div>ERROR</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div className="flex flex-wrap">
      {data.map((product) => {
        return (
          <ProductItem product={product} key={product._id} />
        );
      })}
    </div>
  );
};

export default ProductList;
