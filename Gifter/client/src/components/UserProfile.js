import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const UserProfile = ({userProfile}) => {
    return (
        <Card className="m-4">
            <p className="text-left px-2">User Name:{userProfile.name}</p>
            <CardImg top src={userProfile.imageUrl}/>
                <CardBody>
                    <p>
                        <Link to={`/posts/${userProfile.id}`}>
                            <strong>{userProfile.name}</strong>
                        </Link>
                    </p>
                        <p>{userProfile.bio}</p>
                        <p>{userProfile.email}</p>

                </CardBody>
        </Card>
    );
};


export default UserProfile;