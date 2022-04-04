/* eslint-disable @next/next/no-img-element */
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div
      style={{
        marginTop: "6.257rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {products?.map((product) => {
        return <ProductItem key={product._id} product={product} />;
      })}
    </div>
    // <div className="flex flex-wrap">
    //   {products?.map((product) => {
    //     return (
    //       <ProductItem product={product} key={product._id} />
    //     );
    //   })}
    // </div>
  );
};

export default ProductList;
