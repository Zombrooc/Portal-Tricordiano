import useSWR from "swr";

import CreatePost from "./CreatePost";
import PostItem from "./PostItem";

import { api } from "../../services/api";

const PostList = () => {
  const { data, error } = useSWR('/posts', (url) =>
    api.get(url).then((res) => res.data)
  );

  if (error) return <div>ERROR</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div className="flex justify-center min-w-screen h-screen text-gray-700 w-full">
      <div className="flex w-full">
        <div className="flex flex-col flex-grow border-l border-r border-gray-300">
          <div className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
            <h1 className="text-xl font-semibold">Feed Title</h1>
            <button className="flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400">
              New post
            </button>
          </div>
          <div className="flex-grow h-0 overflow-auto">
            <CreatePost />
            {data.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
