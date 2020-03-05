import React, {useState} from "react";
import SearchPlayer from "./SearchPlayer";
import UserComponent from "./UserComponent";
import {Route, Switch, withRouter} from "react-router-dom";

const ApplicationView = () => {
    const [userId, setUserId] = useState(null);

    const setUserIdCallback = (userId) => {
        setUserId(userId);
        console.log(userId);
    };

    return (
        <Switch>
            <Route exact path={"/"} component={() => <SearchPlayer callback={setUserIdCallback}/>} />
            <Route path={"/user/:userId"} component={() => <UserComponent userId={userId}/>} />
        </Switch>
    );
};
export default withRouter(ApplicationView);