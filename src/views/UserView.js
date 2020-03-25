import React, {useEffect, useState} from "react";
import {useParams, Switch, Route, useRouteMatch} from "react-router-dom";

import axios from "axios";

import {useDependency} from "../Hooks/useDependency";
import ClipLoader from "react-spinners/ClipLoader";
import SeasonsView from "./SeasonsView";
import UserNavView from "./UserNavView";
import WeaponsView from "./WeaponsView";
import OperatorsView from "./OperatorsView";
import {PlayerStats, SeasonsStats} from "../collections/TempResponseFromAPI";
import PlayerView from "./PlayerView";

const UserView = () => {
    let {userId, platform} = useParams();
    let { path, url } = useRouteMatch();

    const [player, setPlayer] = useState("");
    const [seasons, setSeasons] = useState("");
    const [weapons, setWeapons] = useState("");
    const [defenders, setDefenders] = useState([]);
    const [attackers, setAttackers] = useState([]);
    const [dependency, dAdd, dDelete] = useDependency();

    const getOperatorsByRole = (operators, role) => {
        let operatorsCopy = JSON.parse(JSON.stringify(operators));
        for(let [key, value] of Object.entries(operatorsCopy)) {
            value.latinName = key;
        }

        return Object.values(operatorsCopy).filter(operator => operator.role === role);
    };

    const getPlayerStats = () => {
        const apiPath = `${process.env.REACT_APP_API_DOMAIN}/user/`;
        dAdd();

        axios.get(apiPath + platform + '/' + userId)
            .then(response => {
                setPlayer(response.data);
                setWeapons(response.data.pvp.weapons);
                setDefenders(getOperatorsByRole(response.data.pvp.operators, "defender"));
                setAttackers(getOperatorsByRole(response.data.pvp.operators, "attacker"));
                dDelete();
            })
            .catch(res => {
                setPlayer(PlayerStats);
                setWeapons(PlayerStats.pvp.weapons);
                setDefenders(getOperatorsByRole(PlayerStats.pvp.operators, "defender"));
                setAttackers(getOperatorsByRole(PlayerStats.pvp.operators, "attacker"));
                dDelete();
                console.log("Can't get data about Player from Ubi API");
            })
    };

    const sortSeasonsOrderByNewer = table => {
        return Object.values(table).sort((a, b) => {
            return b.id - a.id;
        });
    };

    const getSeasonsStats = () => {
        const apiPath = `${process.env.REACT_APP_API_DOMAIN}/rank/all/${platform}/${userId}`;
        dAdd();

        axios.get(apiPath)
            .then(res => {
                let sortedTable = sortSeasonsOrderByNewer(res.data[0].seasons);
                setSeasons(sortedTable);
                dDelete();

            })
            .catch(res => {
                dDelete();
                setSeasons(SeasonsStats);
                console.log("Can't get data about Seasons from Ubi API");
            })
    };

    useEffect(() => {
        getPlayerStats();
        getSeasonsStats();
    }, []);

    const loadingSection = () => {
        return (
            <div className={"loading"}>
                <ClipLoader size={50} color={"#09d3ac"} />
            </div>
        );
    };

    return (
        <div className={"player-panel"}>
            <UserNavView url={url}/>
            <Switch>
                <Route exact path={path} component={() => dependency ? loadingSection() : <PlayerView player={player}/>}/>
                <Route path={`${path}/seasons`} component={() => dependency ? loadingSection() : <SeasonsView seasons={seasons}/>}/>
                <Route path={`${path}/weapons`} component={() => dependency ? loadingSection() : <WeaponsView weapons={weapons}/>}/>
                <Route path={`${path}/operators`} component={() => dependency ? loadingSection() : <OperatorsView attackers={attackers} defenders={defenders}/>}/>
            </Switch>
        </div>
    )
};
export default UserView;