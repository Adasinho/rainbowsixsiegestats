import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

import {useDependency} from "../Hooks/useDependency";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import ClipLoader from "react-spinners/ClipLoader";

import "../css/list.css";

const SearchPlayerView = ({callback}) => {
    const [inputUser, setInputUser] = useState("");
    const [users, setUsers] = useState(null);

    const [dependency, dAdd, dDelete] = useDependency();

    let history = useHistory();

    const getUsers = () => {
        const searchAPI = "https://r6tab.com/api/search.php?platform=uplay&search=";

        dAdd();

        axios.get(searchAPI + inputUser)
            .then((response) => {
                console.log(response);
                if(response.data.totalresults === 0) {
                    const tempUser = [{
                        "p_id": "77527ba5-e9e7-427f-8b6e-1d92956a1e41",
                        "p_name": "Temp user",
                        "p_level": 154,
                        "p_platform": "uplay",
                        "p_user": "77527ba5-e9e7-427f-8b6e-1d92956a1e41",
                        "p_currentmmr": 2842,
                        "p_currentrank": 15,
                        "kd": 1.12
                    }];
                    setUsers(tempUser);
                    console.log(tempUser);
                } else {
                    setUsers(response.data.results);
                }
            })
            .catch(res => {
                console.log("Ubi servers down");
            })
            .finally((response) => {
                dDelete();
            })
    };

    const setUser = (id) => {
        history.push(`/user/${id}`);
    };

    const usersSection = () => {
        return (
            <div className={"col-6"}>
                <div className={"users-list"}>
                    {users ? users.map(userItem) : null}
                </div>
            </div>
        );
    };

    const userItem = (user) => {
        return (
            <div key={user.p_id} className={"user"} onClick={() => setUser(user.p_id)}>
                <div className={"name"}>{user.p_name}</div>
            </div>
        )
    };

    const handleChange = (event) => {
        setInputUser(event.target.value);
    };

    const handleSubmit = (event) => {
        getUsers();
        event.preventDefault();
    };

    const loadingSection = () => {
        return (
            <div className={"loading"}>
                <ClipLoader size={50} color={"#09d3ac"} />
            </div>
        );
    };

    return (
        <header className="App-header">
            <div className={"container"}>
                <div className={"row justify-center"}>
                    <div className={"col-12"}>
                        <div className={"title"}>Rainbow Six Siege Stats</div>
                    </div>
                    <form className={"col-6"} onSubmit={handleSubmit}>
                        <input placeholder={"Type your username in R6"} onChange={handleChange}>
                        </input>
                        <FontAwesomeIcon className={"ml-3"} icon={faSearch}/>
                    </form>
                </div>
                <div className={"row justify-center"}>
                    {dependency ? loadingSection() : usersSection()}
                </div>
            </div>
        </header>
    );
};
export default SearchPlayerView;