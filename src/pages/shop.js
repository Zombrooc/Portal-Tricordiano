import Head from "next/head";

import SidebarLayout from "../components/SideBarLayout";
import ProductList from "../components/Shop/ProductList";

const Shop = () => {
  return (
    <>
      <Head>
        <title>Portal Tricordiano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SidebarLayout currentPage="Feira do Rolo">
        <ProductList />
      </SidebarLayout>
    </>
  );
};

export default Shop;
