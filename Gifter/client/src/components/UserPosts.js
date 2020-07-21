import React, { useEffect, useContext, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import { useParams } from "react-router-dom";
import Post from "./Post";


UserPosts = () => {
    const [post, setPosts] = useState();
    const {getAllUserPosts} = useContext(PostContext);
    const {userProfileId} = useParams();

    useEffect(()=> {
        getAllUserPosts(userProfileId)
        .then(setPosts);
    }, []);

    if (!posts) {
        return null;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    {posts.map((post) => (

                        <div key={post.id}>
                            <Post post={post}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserPosts