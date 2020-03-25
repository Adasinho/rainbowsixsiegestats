import React from "react";
import {Route, Switch} from "react-router-dom";

import SearchPlayerView from "./SearchPlayerView";
import UserView from "./UserView";

const ApplicationView = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={() => <SearchPlayerView/>} />
            <Route path={"/user/:platform/:userId"} component={() => <UserView/>} />
        </Switch>
    );
};
export default ApplicationView;