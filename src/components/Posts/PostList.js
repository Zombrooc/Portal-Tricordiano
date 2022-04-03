import { useContext, useRef, Fragment } from "react";
import { HeartIcon } from "@heroicons/react/outline";
// import CreatePost from "./CreatePost";
// import PostItem from "./PostItem";

import Like from "../../assets/like.svg";
import Comment from "../../assets/comment.svg";
import Send from "../../assets/send.svg";
import More from "../../assets/more.svg";

import { PostListContainer } from "./styles";

import { api } from "../../services/api";

import { AuthContext } from "../../contexts/AuthContext";

const PostList = ({ posts }) => {
  const likeButton = useRef(null);

  const { user, isAuthenticated } = useContext(AuthContext);

  const handleLike = (id, event) => {
    // console.log(likeButton.current.name);

    // Add a new ClassName to button called liked

    console.log(event.target.disabled);

    // Change the color of the heart icon to red
    event.target.classList.add("liked");
    event.target.disabled = true;

    // likeButton.current.classList.add("liked");

    // likeButton.current.querySelector("svg").style.color = "#ff5a5f";
    // likeButton.current.disabled = true;

    api.post(`/posts/${id}/like`);
  };

  return (
    // <div className="flex justify-center min-w-screen h-screen text-gray-700 w-full">
    //   <div className="flex w-full">
    //     <div className="flex flex-col flex-grow border-l border-r border-gray-300">
    //       {/* <div className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
    //         <h1 className="text-xl font-semibold">Linha do tempo</h1>
    //         <button className="flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400">
    //           sasasasasas
    //         </button>
    //         <button
    //           className="flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400"
    //           type="button"
    //           data-modal-toggle="defaultModal"
    //         >
    //           Criar publicação
    //         </button>

    //         <div
    //           id="defaultModal"
    //           aria-hidden="true"
    //           className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
    //         >
    //           <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
    //             <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
    //               <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
    //                 <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
    //                   Terms of Service
    //                 </h3>
    //                 <button
    //                   type="button"
    //                   className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    //                   data-modal-toggle="defaultModal"
    //                 >
    //                   <svg
    //                     className="w-5 h-5"
    //                     fill="currentColor"
    //                     viewBox="0 0 20 20"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <path
    //                       fillRule="evenodd"
    //                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                       clipRule="evenodd"
    //                     ></path>
    //                   </svg>
    //                 </button>
    //               </div>
    //               <div className="p-6 space-y-6">
    //                 <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    //                   With less than a month to go before the European Union
    //                   enacts new consumer privacy laws for its citizens,
    //                   companies around the world are updating their terms of
    //                   service agreements to comply.
    //                 </p>
    //                 <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    //                   The European Union’s General Data Protection Regulation
    //                   (G.D.P.R.) goes into effect on May 25 and is meant to
    //                   ensure a common set of data rights in the European Union.
    //                   It requires organizations to notify users as soon as
    //                   possible of high-risk data breaches that could personally
    //                   affect them.
    //                 </p>
    //               </div>
    //               <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
    //                 <button
    //                   data-modal-toggle="defaultModal"
    //                   type="button"
    //                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //                 >
    //                   I accept
    //                 </button>
    //                 <button
    //                   data-modal-toggle="defaultModal"
    //                   type="button"
    //                   className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
    //                 >
    //                   Decline
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}
    //       <div className="flex-grow h-0 overflow-auto">
    //         {user?.name && isAuthenticated ? <CreatePost /> : null}
    //         { posts?.length > 0 ? posts?.map((post) => (
    //           <PostItem key={post._id} post={post} />
    //         )) : null}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <PostListContainer>
      {posts.map((post) => {
        return (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span style={{ fontWeight: "bold" }}> {post.author.name} </span>
                <span className="username">@{post.author.username}</span>
              </div>
              <More />
            </header>
            {post.image.endsWith(".jpg") ||
            post.image.endsWith(".png") ||
            post.image.endsWith(".gif") ||
            post.image.endsWith(".webp") ? (
              <img src={`${post.image}`} alt="" />
            ) : (
              <video controls>
                <source src={`${post.image}`} alt="" />
              </video>
            )}

            <footer>
              <strong
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItem: "center",
                  marginBottom: '7px'
                }}
              >
                {" "}
                <HeartIcon style={{ color: "var(--color-dark)" }} /> 
                {post.likes} curtidas{" "}
              </strong>
              
              <p>
                {post.content}{" "}
                <span>
                  {" "}
                  {post.hashtags
                    ? post.hashtags.split(" ").map((hashtag) => {
                        return (
                          <Fragment key={Math.random() * 2.5}>
                            <a
                              href={`/hashtag/${hashtag.split("#")[1]}`}
                              key={Math.random() * 2.5}
                              style={{
                                textDecoration: "underline",
                                color: "var(--color-info)",
                              }}
                            >
                              {hashtag}
                            </a>{" "}
                             
                          </Fragment>
                        );
                      })
                    : null}{" "}
                </span>
              </p>
              {user?.name && isAuthenticated ? (
                <div className="actions">
                  <button
                    name={posts._id}
                    type="button"
                    onClick={(event) => handleLike(post._id, event)}
                  >
                    {/* <Like /> */}
                    <HeartIcon style={{ color: "var(--color-dark)" }} /> Curtir
                  </button>
                  {/* <Comment />
                  <Send /> */}
                </div>
              ) : null}
            </footer>
          </article>
        );
      })}
    </PostListContainer>
  );
};

export default PostList;
