import Head from "next/head";

import SidebarLayout from "../components/SideBarLayout";
import PostList from "../components/Posts/PostList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal Tricordiano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SidebarLayout currentPage="Feed">
        <PostList/>
      </SidebarLayout>
    </>
  );
}