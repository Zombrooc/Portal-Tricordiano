import { PostListContainer } from "./styles";

import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <PostListContainer>
      {posts.map((post, index) => {
        return <PostItem post={post} key={`${post._id}-${index}`} />;
      })}
    </PostListContainer>
  );
};

export default PostList;
