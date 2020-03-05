import React, {useState} from "react";
import {useHistory, withRouter} from "react-router-dom";
import axios from "axios";

import {useDependency} from "../Hooks/useDependency";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import ClipLoader from "react-spinners/ClipLoader";

import "../css/list.css";

const SearchPlayer = ({callback}) => {
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
                setUsers(response.data.results);
                //callback(2);
                //history.push("/user");
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
export default withRouter(SearchPlayer);