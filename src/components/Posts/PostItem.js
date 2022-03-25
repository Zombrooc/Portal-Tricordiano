/* eslint-disable @next/next/no-img-element */
import React from "react";
import moment from "moment";
import Image from "next/image";

moment.locale("pt-br");

const PostItem = ({ post }) => {
  return (
    <div className="flex w-full p-8 border-b border-gray-300">
      <div className="flex flex-col flex-grow ml-4">
        <div className="flex">
          <div className="flex-row gap-4 flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://www.tailwind-kit.com/images/person/1.jpg"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
            </div>
            <div className=" flex flex-col">
              <span className="font-semibold">{post.author.name}</span>
              <span className="text-gray-400 text-xs">
                @{post.author.username}
              </span>
            </div>
          </div>
          <span className="ml-auto text-sm">
            {moment(new Date(post.createdAt)).startOf("hour").fromNow()}
          </span>
        </div>
        <hr className="mt-3 mb-3" />
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="mt-1">
          {post.content}{" "}
          {post.hashtags
            ? post.hashtags.split(" ").map((hashtag) => {
                return (
                  <React.Fragment key={Math.random() * 2.5}>
                    <a
                      className="underline"
                      href={`/hashtag/${hashtag.split("#")[1]}`}
                      key={Math.random() * 2.5}
                    >
                      {hashtag}
                    </a>{" "}
                  </React.Fragment>
                );
              })
            : null}
        </p>
        {post.image && (
          <div className="xs:w-full lg:w-1/4 flex-shrink-0">
            <img
              className="object-cover"
              src={`${post.image}`}
              alt={post.title}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;
