import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Axios from "axios";
import SeasonLabel from "../components/SeasonLabel";

const SeasonsView = () => {
    let {userId} = useParams();

    const [seasons, setSeasons] = useState("");

    useEffect(() => {
        const apiPath = `${process.env.REACT_APP_API_DOMAIN}/rank/all/uplay/${userId}`;
        console.log(apiPath);

        Axios.get(apiPath)
            .then(res => {
                console.log(res.data[0]);
                setSeasons(res.data[0].seasons);
            });
    }, []);

    const seasonToItem = (season) => {
        console.log(season);
        const name = season.name;
        const regions = season.regions;

        return <SeasonLabel name={name} regions={regions}/>;
    };

    return (
        <div className={"container"}>
            <div className={"row"}>
                {Object.entries(seasons).map(seasonToItem)}
            </div>
        </div>
    )
};
export default SeasonsView;