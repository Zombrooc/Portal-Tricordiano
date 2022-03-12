import { useState, useContext, useEffect } from "react";
import Head from "next/head";

import Sidebar from "../components/Sidebar";
import PostList from "../components/Posts/PostList";
import Property from "../components/Property";
import Events from "../components/Events";
import Shop from "../components/Shop";

import { AuthContext } from "../contexts/AuthContext";

import { api } from "../services/api";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState("Feed");
  const { user } = useContext(AuthContext);

  const handleMenu = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Head>
        <title>Portal Tricordiano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="relative md:flex">
        <Sidebar
          selectedMenu={selectedMenu}
          handleSelectedMenu={handleMenu}
          user={user}
        />

        {selectedMenu === "Feed" && <PostList />}
        {selectedMenu === "Imóveis" && <Property />}
        {selectedMenu === "Feira do Rolo" && <Shop />}
        {selectedMenu === "Eventos" && <Events />}
      </div>
    </>
  );
}

// export const getServerSideProps = async (ctx) => {
//   await api.get("/users");

//   return {
//     props: {},
//   };
// };
