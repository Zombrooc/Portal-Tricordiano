/* eslint-disable @next/next/no-img-element */
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {

  return (
    <div className="flex flex-wrap">
      {products?.map((product) => {
        return (
          <ProductItem product={product} key={product._id} />
        );
      })}
    </div>
  );
};

export default ProductList;
