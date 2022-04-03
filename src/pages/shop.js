import Head from "next/head";

import { api } from "../services/api";

import SidebarLayout from "../components/SideBarLayout";
import Navbar from "../components/Navbar";
import ProductList from "../components/Shop/ProductList";
import useSWR from "swr";

const Shop = ({ products }) => {
  const { data, error } = useSWR("/products", (url) =>
    api.get(url).then((response) => response.data)
  );

  if (error) {
    return (
      <div>Erro ao carregar os Produtos, por favor volte mais tarde. 😥</div>
    );
  }

  return (
    <>
      <Head>
        <title>Portal Tricordiano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      {/* <SidebarLayout currentPage="Feira do Rolo"> */}
        <ProductList products={products} />
      {/* </SidebarLayout> */}
    </>
  );
};

export default Shop;
