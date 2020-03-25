import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

import {useDependency} from "../Hooks/useDependency";

import {faPlaystation, faXbox, faWindows} from "@fortawesome/free-brands-svg-icons";

import ClipLoader from "react-spinners/ClipLoader";

import "../css/list.css";
import Platforms from "../components/Platforms";

const platforms = [
    { name: "uplay", icon: faWindows },
    { name: "psn", icon: faPlaystation },
    { name: "xbl", icon: faXbox }
];

const SearchPlayerView = () => {
    const [inputUser, setInputUser] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState(0);

    const [dependency, dAdd, dDelete] = useDependency();

    let history = useHistory();

    const getUsers = () => {
        const searchAPI = `${process.env.REACT_APP_API_DOMAIN}/user/search`;

        dAdd();

        axios.post(searchAPI, {
                username: inputUser,
                platform: platforms[selectedPlatform].name
            })
            .then((response) => {
                console.log(response);
                setUser(response.data[0].id);
            })
            .catch(res => {
                setUser("77527ba5-e9e7-427f-8b6e-1d92956a1e41");
                console.log("Ubi servers down");
            })
            .finally((response) => {
                dDelete();
            })
    };

    const setUser = (id) => {
        history.push(`/user/${platforms[selectedPlatform].name}/${id}`);
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
        <section id={"search-player"} className="App-header">
            <div className={"container"}>
                <div className={"row justify-center"}>
                    <div className={"col-12 justify-center"}>
                        <div className={"title"}>Rainbow Six Siege Stats</div>
                        <form className={"col-12 col-md-10 m-auto"} onSubmit={handleSubmit}>
                            <div className={"input-group"}>
                                <div className="input-group-prepend">
                                    <Platforms elements={platforms} callBack={key => setSelectedPlatform(key)}/>
                                </div>
                                <input type={"text"} className={"form-control"} placeholder={"Type your username in R6"} onChange={handleChange}/>
                                <div className="input-group-append">
                                    <button onClick={handleSubmit} className="btn btn-color" type={"button"}>Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={"row justify-center"}>
                    {dependency ? loadingSection() : null}
                </div>
            </div>
        </section>
    );
};
export default SearchPlayerView;