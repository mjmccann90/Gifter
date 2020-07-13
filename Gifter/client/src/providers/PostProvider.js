import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  const getAllPosts = () => {
    // "/api/post allows you to make relative fetch calls from the proxy in package.json"
    return fetch("/api/post")
      .then((res) => res.json())
      .then(setPosts);
  };

  const addPost = (post) => {
    return fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };

  const getPost = (id) => {
    return fetch(`/api/post/${id}`).then((res) => res.json())
  };

  const getPostByUser = (id) => {
    return fetch(`/api/post/getpostbyuser/${id}`).then((res) => res.json())
    .then(setUserPosts);
  };

  // const searchPost = (post) => {
  //   return fetch("/api/post", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(post),
  //   });
  // };

  return (
    <PostContext.Provider value={{ posts,getPost, getAllPosts, addPost,getPostByUser,setPosts,userPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};