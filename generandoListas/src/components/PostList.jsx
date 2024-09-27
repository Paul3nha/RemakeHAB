import { Post } from "./Post.jsx";
import PropTypes from "prop-types";

export const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      ;
    </ul>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};
