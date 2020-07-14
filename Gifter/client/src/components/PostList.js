import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";
import { Input } from "reactstrap";

const PostList = () => {
  const { posts, getAllPost, searchPost } = useContext(PostContext);

  const search = (searchTerm) => {
    searchPost(searchTerm);
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          <div className="p-4">
            <Input
                bsSize="lg"
                placeholder="Search all posts"
                onChange={(event)=> searchPost(event.target.value)}
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