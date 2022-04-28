import { useContext, useState, useRef, useEffect } from "react";
import Head from "next/head";
import useSWR from "swr";

import FAB from "../components/FAB";

import { AuthContext } from "../contexts/AuthContext";

// import AuroraEffect from "../components/AuroraEffect";
import AuroraEffect from "../components/AuroraEffect";
import Navbar from "../components/Navbar";
import CreatePost from "../components/Posts/CreatePost";
import PostList from "../components/Posts/PostList";

import { api } from "../services/api";

function Home({ preRenderedPostsData }) {
  const loadMoreRef = useRef(null);

  const [modalStatus, setModalStatus] = useState(false);

  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [totalPages, setTotalPages] = useState();
  const [hasMore, setHasMore] = useState(true);

  const { user, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    setPosts(preRenderedPostsData?.posts);
    setCurrentPage(preRenderedPostsData?.currentPage);
    setTotalPages(preRenderedPostsData?.totalPages);

    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setCurrentPage((old) => old + 1);
      }
    }, options);

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
  }, []);

  useEffect(() => {
    setHasMore(currentPage < totalPages);

    const handleResquest = async () => {
      const {
        data: { posts: newPosts },
      } = await api.get("/posts", {
        params: {
          page: currentPage,
        },
      });

      console.log(newPosts);

      if (!newPosts?.length) {
        // console.log("Os posts acabaram");
        return;
      }

      const newPostData = posts.push(newPosts);

      setPosts(newPostData);
    };

    handleResquest();
  }, [currentPage]);

  // const { data, error } = useSWR(
  //   "/posts?page=" + currentPage,
  //   (url) => api.get(url).then((response) => response.data),
  //   {
  //     fallback: posts,
  //   }
  // );

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Erro ao carregar os Posts, por favor volte mais tarde. 😥</div>;
  // }

  const handleModal = () => {
    setModalStatus(!modalStatus);

    return;
  };

  return (
    <>
      <Head>
        <title>Portal Tricordiano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AuroraEffect />
      <Navbar currentPage="Feed" />
      <CreatePost open={modalStatus} handleModal={handleModal} />
      {user && isAuthenticated ? <FAB handleModal={handleModal} /> : null}
      {/* {posts && <PostList posts={data} />} */}

      {posts && <PostList posts={posts} />}
      <p
        ref={loadMoreRef}
        style={{
          textAlign: "center",
          fontsize: "1.5rem",
          fontWeight: "bold",
          margin: "15px",
        }}
      >
        {hasMore ? "Carregando mais Post..." : "Isso é tudo por enquanto..."}
      </p>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );

  const {
    data: { posts, totalPages, currentPage },
  } = await api.get("/posts");

  return {
    props: {
      preRenderedPostsData: {
        posts,
        totalPages,
        currentPage,
      },
    },
  };
}

export default Home;
