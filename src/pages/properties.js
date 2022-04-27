import Head from "next/head";

import SidebarLayout from "../components/SideBarLayout";
import Property from "../components/Property";

const Properties = () => {
  return (
    <>
      <Head>
        <title>Propriedades - Portal Tricordiano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SidebarLayout currentPage="Imóveis">
        <Property />
      </SidebarLayout>
    </>
  );
};

export default Properties;
