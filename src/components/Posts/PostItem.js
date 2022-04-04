/* eslint-disable @next/next/no-img-element */
import { useContext, useRef, Fragment } from "react";
import moment from "moment";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";

import More from "../../assets/more.svg";

import { AuthContext } from "../../contexts/AuthContext";

import { api } from "../../services/api";

import { ArticleItem } from "./styles";

moment.locale("pt-br");

const PostItem = ({ post }) => {
  const { user, isAuthenticated } = useContext(AuthContext);

  const handleLike = (id) => {
    try {
      api.post(`/posts/${id}/like`);
    } catch ({ response: { data } }) {
      console.log(data);
    }
  };

  return (
    <ArticleItem>
      <header>
        <div className="user-info">
          <span style={{ fontWeight: "bold" }}> {post.author.name} </span>
          <span className="username">@{post.author.username}</span>
        </div>
        <More />
      </header>
      {post?.image ? (
        post.image.endsWith(".jpg") ||
        post.image.endsWith(".png") ||
        post.image.endsWith(".gif") ||
        post.image.endsWith(".webp") ? (
          <img src={`${post.image}`} alt={post?.alt || "Imagem"} />
        ) : (
          // <Image
          //   src={post.image}
          //   alt={post?.alt || "Imagem"}
          //   width={580}
          //   height={post?.height || "580"}
          // />
          <video controls>
            <source src={`${post.image}`} alt="" />
          </video>
        )
      ) : null}
      <footer>
        <strong
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItem: "center",
            marginBottom: "7px",
          }}
        >
          {" "}
          <HeartIcon style={{ color: "var(--color-dark)" }} /> 
          {post.likes.length} curtidas{" "}
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
              type="button"
              onClick={(event) => handleLike(post._id, event)}
              disabled={post.likes.includes(user?._id)}
              className={`${post.likes.includes(user?._id) ? "liked" : null}`}
            >
              {/* <Like /> */}
              <HeartIcon
                style={{
                  color: "var(--color-dark)",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
              /> 
              Curtir
            </button>
            {/* <Comment />
                  <Send /> */}
          </div>
        ) : null}
      </footer>
    </ArticleItem>
    // <div className="flex w-full p-8 border-b border-gray-300">
    //   <div className="flex flex-col flex-grow ml-4">
    //     <div className="flex">
    //       <div className="flex-row gap-4 flex justify-center items-center">
    //         <div className="flex-shrink-0">
    //           <a href="#" className="block relative">
    //             <img
    //               alt="profil"
    //               src="https://www.tailwind-kit.com/images/person/1.jpg"
    //               className="mx-auto object-cover rounded-full h-10 w-10 "
    //             />
    //           </a>
    //         </div>
    //         <div className=" flex flex-col">
    //           <span className="font-semibold">{post.author.name}</span>
    //           <span className="text-gray-400 text-xs">
    //             @{post.author.username}
    //           </span>
    //         </div>
    //       </div>
    //       <span className="ml-auto text-sm">
    //         {moment(new Date(post.createdAt)).startOf("hour").fromNow()}
    //       </span>
    //     </div>
    //     <hr className="mt-3 mb-3" />
    //     <h2 className="text-xl font-semibold">{post.title}</h2>
    //     <p className="mt-1">
    //       {post.content}{" "}
    //       {post.hashtags
    //         ? post.hashtags.split(" ").map((hashtag) => {
    //             return (
    //               <React.Fragment key={Math.random() * 2.5}>
    //                 <a
    //                   className="underline"
    //                   href={`/hashtag/${hashtag.split("#")[1]}`}
    //                   key={Math.random() * 2.5}
    //                 >
    //                   {hashtag}
    //                 </a>{" "}
    //               </React.Fragment>
    //             );
    //           })
    //         : null}
    //     </p>
    //     {post.image && (
    //       <div className="xs:w-full lg:w-1/4 flex-shrink-0">
    //         <img
    //           className="object-cover"
    //           src={`${post.image}`}
    //           alt={post.title}
    //         />
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default PostItem;
