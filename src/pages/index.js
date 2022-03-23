import Head from "next/head";

import SidebarLayout from "../components/SideBarLayout";
import PostList from "../components/Posts/PostList";
import { api } from "../services/api";

function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Portal Tricordiano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SidebarLayout currentPage="Feed">
        <PostList posts={posts}/>
      </SidebarLayout>
    </>
  );
}

export async function getStaticProps() {

    const { data } = await api.get('/posts');

  return {
    props: {
      posts: data,
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const { data: posts } = await api.get('/posts')

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  return { paths, fallback: 'blocking' }
}

export default Home;