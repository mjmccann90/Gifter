import React, { useContext, useRef, useEffect } from "react"
import { PostContext } from "../providers/PostProvider"
import { UserProfileContext } from "../providers/UserProfileProvider"
import { form } from "reactstrap"
import { useHistory } from "react-router-dom";


export default props => {
    const { addPost } = useContext(PostContext)
    const {userProfiles, getAllUserProfiles} = useContext(UserProfileContext)
    const history = useHistory();

    useEffect(() => {
        getAllUserProfiles();
    },[]);

    const title = useRef("title")
    const image = useRef("image")
    const userId = useRef("userId")
    const caption = useRef("caption")
    const form = useRef("form")

    const constructNewPost = () => {
        const newPostObject = {
            title: title.current.value,
            imageUrl: image.current.value,
            caption: caption.current.value,
            userProfileId: userProfileId
        }
        console.log(newPostObject)


        addPost(newPostObject)
            .then(props.toggler)
            .then((p)=> {
                history.push("/")
            });
    };

    return (
        <form className="postForm" ref={form}>
            <h2 className="postForm__title">New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postTame">Post title: </label>
                    <input
                        type="text"
                        id="postTame"
                        ref={title}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Post title"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postImage">Image Url: </label>
                    <input
                        type="text"
                        id="postImage"
                        ref={image}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Image url"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="userProfile">Assign to User: </label>
                    <select
                        defaultValue=""
                        name="userProfile"
                        ref={userProfile}
                        id="userProfile"
                        className="form-control"
                    >
                        <option value="0">Select a user</option>
                        {userProfiles.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="caption">Caption: </label>
                    <input
                        type="text"
                        id="caption"
                        ref={caption}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="User id"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewPost()
                    }
                }
                className="btn btn-primary">
                Save Post
            </button>
        </form>
    )
}
