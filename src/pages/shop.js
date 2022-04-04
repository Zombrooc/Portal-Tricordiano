import { useState, useContext } from "react";
import Head from "next/head";
import useSWR from "swr";

import { api } from "../services/api";

import { AuthContext } from "../contexts/AuthContext";

import Navbar from "../components/Navbar";
import ProductList from "../components/Shop/ProductList";
import CreateProduct from '../components/Shop/CreateProduct';
import AuroraEffect from "../components/AuroraEffect";
import FAB from '../components/FAB';

const Shop = () => {
  const [modalStatus, setModalStatus] = useState(false);

  const { user, isAuthenticated } = useContext(AuthContext);

  const { data, error } = useSWR("/products", (url) =>
    api.get(url).then((response) => response.data)
  );

  function handleModal() {
    setModalStatus(!modalStatus);

    return;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

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
      <CreateProduct open={modalStatus} handleModal={handleModal} />
      {user && isAuthenticated ? <FAB handleModal={handleModal} /> : null}
      <AuroraEffect />
      <Navbar currentPage="Lojas" />
      {/* <SidebarLayout currentPage="Feira do Rolo"> */}
      <ProductList products={data} />
      {/* </SidebarLayout> */}
    </>
  );
};

export default Shop;
