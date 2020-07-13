import React, { useState, useContext } from "react";
import { PostContext } from "../providers/PostProvider";
import {
  Form,
  FormGroup,
  Input,
  Card,
  CardBody,
  Col,
  Button,
} from "reactstrap";

const PostForm = () => {
const {addPost, getAllPosts} = useContext(PostContext);
const [title, setTitle] = useState("");
const [caption, setCaption] = useState("");
const [imageUrl, setImageUrl] = useState("");
const [userProfileId, setUserProfileId] = useState("");

const submit = (event) => {
    event.preventDefault();

    const post = { title, caption, imageUrl, userProfileId};
    
    addPost(post).then(getAllPosts);
};

return (
<div className="container mt-4">
    <div className="row justify-content-center">
        <div className="cards-column">

            <Card>

                <CardBody>

                    <h2 className="text-center mb-3">Add a New Post</h2>

                    <Form onSubmit={submit}>
                        <FormGroup row>
                            <Col>
                            <Input
                            placeholder="User ID"
                            onChange={(event)=> setUserProfileId(event.target.value)}
                            />
                            </Col>

                            <Col>
                            <Input
                            placeholder="Image Url"
                            onChange={(event)=> setImageUrl(event.target.value)}
                            />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col>
                            <Input
                            placeholder="Title"
                            onChange={(event)=> setTitle(event.target.value)}
                            />
                            </Col>

                            <Col>
                            <Input
                            placeholder="Caption"
                            onChange={(event)=> setCaption(event.target.value)}
                            />
                            </Col>
                            </FormGroup>

                            <Button type="submit" className="btn-block-info"> Submit</Button>
                    </Form>

                </CardBody>

            </Card>

        </div>

    </div>

</div>
);
};

export default PostForm;