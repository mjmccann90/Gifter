import React, { useContext, useRef } from "react"
import { useHistory} from "react-router-dom"
import { PostContext } from "../providers/PostProvider"
import { Form } from "reactstrap"


export default props => {
    const { addPost } = useContext(PostContext)
    const history = useHistory();

    const title = useRef("title")
    const image = useRef("image")
    const userId = useRef("userId")
    const caption = useRef("caption")
    const form = useRef("form")

    const constructNewPost = () => {
        const newPostObject = {
            title: title.current.value,
            imageUrl: image.current.value,
            dateCreated: new Date(),
            userProfileId: parseInt(userId.current.value),
            caption: caption.current.value
        }
        console.log(newPostObject)
       return addPost(newPostObject)
    }

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
                    <label htmlFor="userProfileId">UserId: </label>
                    <input
                        type="integer"
                        id="userProfileId"
                        ref={userId}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="User id"
                    />
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
                        .then(() => history.push("/"))
                    }
                }
                className="btn btn-primary">
                Save Post
            </button>
        </form>
    )
}
