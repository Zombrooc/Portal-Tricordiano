/* eslint-disable @next/next/no-img-element */
import { useContext, Fragment, useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import { HeartIcon } from "@heroicons/react/outline";

import More from "../../assets/more.svg";

import { AuthContext } from "../../contexts/AuthContext";

import { api } from "../../services/api";

import { ArticleItem } from "./styles";

const PostItem = ({ post }) => {
  moment.locale("pt");

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes.length);
  const { user, isAuthenticated } = useContext(AuthContext);

  const handleLike = (id) => {
    try {
      api.post(`/posts/${id}/like`);

      setLiked(!liked);
      if (liked) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
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
          {likes} curtidas{" "}
        </strong>

        <p style={{ wordWrap: "break-word" }}>
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
              className={`${
                post.likes.includes(user?._id) || liked ? "liked" : ""
              }`}
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
        <time style={{ fontSize: "0.7rem" }}>
          {moment(new Date(post.createdAt)).startOf("hour").fromNow()}
        </time>
      </footer>
    </ArticleItem>
  );
};

export default PostItem;
