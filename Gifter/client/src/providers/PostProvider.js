import React, { useState, createContext, useContext } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getAllPost = () => {
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
    })
    .then(getAllPosts);
  };

  const getPost = (id) => {
    return fetch(`/api/post/${id}`).then((res) => res.json())
  };

  // const getPostByUser = (id) => {
  //   return fetch(`/api/post/getpostbyuser/${id}`).then((res) => res.json())
  //   .then(setUserPosts);
  // };

  const searchPost = (searchTerm) => {
    if (!searchTerm) {
        return getAllPost()
    }
    return fetch(`/api/post/search?searchTerm=${searchTerm}&sortDesc=True`)
    .then((res) => res.json())
    .then(setPosts);
  };

  return (
    <PostContext.Provider value={{ posts, getAllPost, addPost,searchPost }}>
      {props.children}
    </PostContext.Provider>
  );
};