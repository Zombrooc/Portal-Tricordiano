// import CreatePost from "./CreatePost";

import { PostListContainer } from "./styles";

import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <PostListContainer>
      {posts.map((post) => {
        return (
          <PostItem post={post} key={post._id}/>
        );
      })}
    </PostListContainer>
  );
};

export default PostList;
