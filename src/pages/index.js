import Head from "next/head";
import useSWR from "swr";

// import SidebarLayout from "../components/SideBarLayout";
import Navbar from "../components/Navbar";
import PostList from "../components/Posts/PostList";
import { api } from "../services/api";

function Home({ posts }) {
  const { data, error } = useSWR("/posts", (url) =>
    api.get(url).then((response) => response.data)
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Erro ao carregar os Posts, por favor volte mais tarde. 😥</div>;
  }

  return (
    <>
      <Head>
        <title>Portal Tricordiano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
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
