import Head from "next/head";

import { api } from '../services/api';

import SidebarLayout from "../components/SideBarLayout";
import ProductList from "../components/Shop/ProductList";

const Shop = ({ products }) => {
  return (
    <>
      <Head>
        <title>Portal Tricordiano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SidebarLayout currentPage="Feira do Rolo">
        <ProductList products={products}/>
      </SidebarLayout>
    </>
  );
};

export async function getStaticProps() {

  const { data } = await api.get('/products');

return {
  props: {
    products: data,
  },
  revalidate: 10
}
}

export default Shop;
