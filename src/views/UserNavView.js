import React from "react";
import {Link} from "react-router-dom";

const UserNavView = ({url}) => {
    return (
        <nav>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-3"}>
                        <Link to={`${url}`}>Stats</Link>
                    </div>
                    <div className={"col-3"}>
                        <Link to={`${url}/seasons`}>Seasons</Link>
                    </div>
                    <div className={"col-3"}>
                        <Link to={`${url}/operators`}>Operators</Link>
                    </div>
                    <div className={"col-3"}>
                        <Link to={`${url}/weapons`}>Weapons</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};
export default UserNavView;