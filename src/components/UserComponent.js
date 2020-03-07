import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import axios from "axios";

import PlayerStats from "../class/PlayerStats";
import {useDependency} from "../Hooks/useDependency";
import ClipLoader from "react-spinners/ClipLoader";
import Window from "./Window";
import Operators from "../collections/Operators";

const UserComponent = () => {
    let {userId} = useParams();

    const [player, setPlayer] = useState(new PlayerStats());
    const [dependency, dAdd, dDelete] = useDependency();

    useEffect(() => {
        const apiPath = "https://r6tab.com/api/player.php?p_id=";
        let playerStats = new PlayerStats();

        dAdd();

        axios.get(apiPath + userId)
            .then(response => {
                dDelete();
                playerStats.init(response.data);
                setPlayer(playerStats);
            })
    }, []);

    const playerStatsSection = () => {
        let window1 = new Map().set("Wins", player.rankedWins).set("Losses", player.rankedLosses)
            .set("Time played", `${player.getFixedTime()}h`).set("Kills", player.rankedKills).set("Deaths", player.rankedDeaths);
        let window2 = new Map().set("Current Level", player.level).set("Current MMR", player.currentMmr);
        let window3 = new Map().set("Attacker", `${Operators.getOperatorNameById(player.favAttacker)}`)
            .set("Defender", Operators.getOperatorNameById(player.favDefender));
        let window4 = new Map().set("Visitors", player.visitors);

        return (
            <section>
                <div className={"container"}>
                    <div className={"player-name"}>{player.name}</div>
                    <div className={"row"}>
                        <Window title={"Ranked"} params={window1} col={12}/>
                        <Window title={"More Ranked Stats"} params={window2} col={6}/>
                        <Window title={"Favorite operators"} params={window3} col={6}/>
                        <Window title={""} params={window4} col={12}/>
                    </div>
                </div>
            </section>
        )
    };

    const loadingSection = () => {
        return (
            <div className={"loading"}>
                <ClipLoader size={50} color={"#09d3ac"} />
            </div>
        );
    };

    return dependency ? loadingSection() : playerStatsSection();
};
export default UserComponent;