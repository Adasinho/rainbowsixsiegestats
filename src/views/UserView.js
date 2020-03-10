import React, {useEffect, useState} from "react";
import {useParams, Switch, Route, useRouteMatch} from "react-router-dom";

import axios from "axios";

import {useDependency} from "../Hooks/useDependency";
import ClipLoader from "react-spinners/ClipLoader";
import Window from "../components/Window";
import Operators from "../collections/Operators";
import SeasonsView from "./SeasonsView";
import UserNavView from "./UserNavView";

const UserView = () => {
    let {userId} = useParams();
    let { path, url } = useRouteMatch();

    const [player, setPlayer] = useState("");
    const [dependency, dAdd, dDelete] = useDependency();

    useEffect(() => {
        const apiPath = `${process.env.REACT_APP_API_DOMAIN}/user/`;
        const platform = "uplay/";
        dAdd();

        axios.get(apiPath + platform + userId)
            .then(response => {
                dDelete();
                console.log(response.data);
                setPlayer(response.data);
            })
    }, []);

    const loadingSection = () => {
        return (
            <div className={"loading"}>
                <ClipLoader size={50} color={"#09d3ac"} />
            </div>
        );
    };

    const playerStats = () => {
        const overallWindow = player ? {
            "Time Played": (player.pvp.general.playtime / 3600).toFixed(2) + "h",
            "Matches Played": player.pvp.general.matches,
            "Kills / Match": (player.pvp.general.kills / player.pvp.general.matches).toFixed(3),
            "Kills": player.pvp.general.kills,
            "Deaths": player.pvp.general.deaths,
            "K/D Ratio": (player.pvp.general.kills / player.pvp.general.deaths).toFixed(4),
            "Wins": player.pvp.general.wins,
            "Losses": player.pvp.general.losses,
            "W/L Ratio": (player.pvp.general.wins / player.pvp.general.losses).toFixed(4),
            "Bullets fired": player.pvp.general.bulletsFired,
            "Bullets Connected": player.pvp.general.bulletsConnected,
            "Accuracy": (player.pvp.general.bulletsConnected / player.pvp.general.bulletsFired * 100).toFixed(2) + "%"
        } : null;

        const teamPlayWindow = player ? {
            "Assists": player.pvp.general.assists,
            "Revievs": player.pvp.general.revives,
            "Gadgets destroyed": player.pvp.general.gadgetsDestroyed,
            "Suicides": player.pvp.general.suicides,
            "Barricades": player.pvp.general.barricadesDeployed,
            "Reinforcments": player.pvp.general.reinforcementsDeployed,
            "Rappel Breaches": player.pvp.general.rappelBreaches,
            "Down but no out": player.pvp.general.dbno,
            "DBNO assist": player.pvp.general.dbnoAssists
        } : null;

        const killsBrakdownWindow = player ? {
            "Total kills": player.pvp.general.kills,
            "Blind kills": player.pvp.general.blindKills,
            "Melee kills": player.pvp.general.meleeKills,
            "Penetration kills": player.pvp.general.penetrationKills,
            "Headshots": player.pvp.general.headshots,
            "Headshot %": (player.pvp.general.headshots / player.pvp.general.kills * 100).toFixed(2) + "%"
        } : null;

        return (
            <section>
                <div className={"container"}>
                    <div className={"player-name"}>{player.name}</div>
                    <div className={"row"}>
                        <Window title={"Overall Stats"} className={"col-12"} col={3} stats={overallWindow}/>
                        <Window title={"Team Play"} className={"col-12"} col={3} stats={teamPlayWindow}/>
                        <Window title={"Kills Breakdown"} className={"col-12"} col={2} stats={killsBrakdownWindow}/>
                    </div>
                </div>
            </section>
        );
    };

    return (
        <>
            <UserNavView url={url}/>
            <Switch>
                <Route exact path={path}>
                    {dependency ? loadingSection() : playerStats()}
                </Route>
                <Route path={`${path}/seasons`}>
                    <SeasonsView/>
                </Route>
            </Switch>
        </>
    )
};
export default UserView;