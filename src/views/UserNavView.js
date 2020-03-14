import React from "react";
import {Link} from "react-router-dom";

const UserNavView = ({url}) => {
    return (
        <nav>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-4"}>
                        <Link to={`${url}`}>Global stats</Link>
                    </div>
                    <div className={"col-4"}>
                        <Link to={`${url}/seasons`}>Seasons</Link>
                    </div>
                    <div className={"col-4"}>
                        <Link to={`${url}/weapons`}>Weapons</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};
export default UserNavView;