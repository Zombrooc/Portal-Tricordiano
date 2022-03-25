import Head from "next/head";

import { api } from "../services/api";

import Loading from "../components/Loading";
import SidebarLayout from "../components/SideBarLayout";
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
      <Loading show={!data} />
      <SidebarLayout currentPage="Feira do Rolo">
        <ProductList products={products} />
      </SidebarLayout>
    </>
  );
};

export default Shop;
