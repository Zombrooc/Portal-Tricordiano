/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import moment from "moment";

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
        <p className="mt-1">
          {post.title}
          <br />
          <hr />
          {post.content}{" "}
          {post.hashtags
            ? post.hashtags.split(" ").map((hashtag) => {
                return (
                  <a
                    className="underline"
                    href={`/hashtag/${hashtag.split("#")[1]}`}
                    key={Math.random() * 2.5}
                  >
                    {hashtag}{" "}
                  </a>
                );
              })
            : null}
        </p>
        {post.image ? (
          // <div className="container mx-auto py-4 overflow-hidden">
          //   <img
          //     className="h-80 w-7/12 object-cover"
          //     src={`${post.image}`}
          //     alt={post.title}
          //   />
          // </div>
          <div className="xs:w-full lg:w-1/4 flex-shrink-0">
            <img
              className="object-cover"
              src={`${post.image}`}
              s
              alt={post.title}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PostItem;
