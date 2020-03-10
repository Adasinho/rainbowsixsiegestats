import React, {useState} from "react";
import {Route, Switch} from "react-router-dom";

import SearchPlayerView from "./SearchPlayerView";
import UserView from "./UserView";

const ApplicationView = () => {
    const [userId, setUserId] = useState(null);

    const setUserIdCallback = (userId) => {
        setUserId(userId);
        console.log(userId);
    };

    return (
        <Switch>
            <Route exact path={"/"} component={() => <SearchPlayerView callback={setUserIdCallback}/>} />
            <Route path={"/user/:userId"} component={() => <UserView userId={userId}/>} />
        </Switch>
    );
};
export default ApplicationView;