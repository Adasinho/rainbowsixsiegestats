import React from "react";
import {useParams} from "react-router-dom";

const UserComponent = () => {
    let {userId} = useParams();

    return (
        <div>User with id: {userId}</div>
    );
};
export default UserComponent;