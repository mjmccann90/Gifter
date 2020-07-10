import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";
import { Input } from "reactstrap";

const PostList = () => {
  const { posts, getAllPosts } = useContext(PostContext);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          <div className="p-4">
            <Input
            bsSize="lg"
            placeholder="Search all posts"
            />
          </div>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;