import React from "react";
import {useHistory, useLocation} from "react-router-dom";

const NavView = () => {
    let history = useHistory();
    let location = useLocation();

    console.log(location);

    return (
        <nav>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6"} onClick={() => history.push("/")}>Global stats</div>
                    <div className={"col-6"} onClick={() => history.push("/user")}>Seasons</div>
                </div>
            </div>
        </nav>
    )
};
export default NavView;