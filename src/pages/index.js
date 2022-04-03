import { useContext, useState } from "react";
import Head from "next/head";
import useSWR from "swr";
import FAB from "../components/FAB";

// import SidebarLayout from "../components/SideBarLayout";

import { AuthContext } from "../contexts/AuthContext";

import Navbar from "../components/Navbar";
import CreatePost from "../components/Posts/CreatePost";
import PostList from "../components/Posts/PostList";
import { api } from "../services/api";

function Home({ posts }) {
  const [modalStatus, setModalStatus] = useState(false);

  const { user, isAuthenticated } = useContext(AuthContext);

  const { data, error } = useSWR("/posts", (url) =>
    api.get(url).then((response) => response.data)
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Erro ao carregar os Posts, por favor volte mais tarde. 😥</div>;
  }

  function handleModal() {
    console.log("clicou");
    setModalStatus(!modalStatus);
    console.log(modalStatus);

    return;
  }

  return (
    <>
      <Head>
        <title>Portal Tricordiano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <CreatePost open={modalStatus} handleModal={handleModal} />
      {user && isAuthenticated ? <FAB handleModal={handleModal} /> : null}
      {/* <SidebarLayout currentPage="Feed"> */}
      {posts && <PostList posts={data} />}
      {/* </SidebarLayout> */}
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const { data } = await api.get("/posts");

  return {
    props: {
      posts: data,
    },
  };
}

export default Home;
