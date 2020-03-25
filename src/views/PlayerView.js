import React, {useEffect} from "react";
import Window from "../components/Window";

const PlayerView = ({player}) => {
    useEffect(() => {
        console.log(player);
    }, []);

    const overallWindow = player ? {
        "Time Played": (player.pvp.general.playtime / 3600).toFixed(0) + "h",
        "Matches Played": player.pvp.general.matches,
        "Kills / Match": (player.pvp.general.kills / player.pvp.general.matches).toFixed(3),
        "Kills": player.pvp.general.kills,
        "Deaths": player.pvp.general.deaths,
        "K/D Ratio": (player.pvp.general.kills / player.pvp.general.deaths).toFixed(4),
        "Wins": player.pvp.general.wins,
        "Losses": player.pvp.general.losses,
        "W/L Ratio": (player.pvp.general.wins / player.pvp.general.losses).toFixed(4),
        "Bullets Connected": player.pvp.general.bulletsConnected
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

    const rankedStats = player ? {
        "Time played": (player.pvp.queue.ranked.playtime / 3600).toFixed(0) + 'h',
        "Matches played": player.pvp.queue.ranked.matches,
        "Kills/Match": (player.pvp.queue.ranked.kills / player.pvp.queue.ranked.matches).toFixed(4),
        "Kills": player.pvp.queue.ranked.kills,
        "Deaths": player.pvp.queue.ranked.deaths,
        "K/D ration": (player.pvp.queue.ranked.kills / player.pvp.queue.ranked.deaths).toFixed(4),
        "Wins": player.pvp.queue.ranked.wins,
        "Losses": player.pvp.queue.ranked.losses,
        "W/L ration": (player.pvp.queue.ranked.wins / player.pvp.queue.ranked.losses).toFixed(4)
    } : null;

    const casualStats = player ? {
        "Time played": (player.pvp.queue.casual.playtime / 3600).toFixed(0) + 'h',
        "Matches played": player.pvp.queue.casual.matches,
        "Kills/Match": (player.pvp.queue.casual.kills / player.pvp.queue.casual.matches).toFixed(4),
        "Kills": player.pvp.queue.casual.kills,
        "Deaths": player.pvp.queue.casual.deaths,
        "K/D ration": (player.pvp.queue.casual.kills / player.pvp.queue.casual.deaths).toFixed(4),
        "Wins": player.pvp.queue.casual.wins,
        "Losses": player.pvp.queue.casual.losses,
        "W/L ration": (player.pvp.queue.casual.wins / player.pvp.queue.casual.losses).toFixed(4)
    } : null;

    const discoveryStats = player ? {
        "Time played": (player.pvp.queue.discovery.playtime / 3600).toFixed(0) + 'h',
        "Matches played": player.pvp.queue.discovery.matches,
        "Kills/Match": (player.pvp.queue.discovery.kills / player.pvp.queue.discovery.matches).toFixed(4),
        "Kills": player.pvp.queue.discovery.kills,
        "Deaths": player.pvp.queue.discovery.deaths,
        "K/D ration": (player.pvp.queue.discovery.kills / player.pvp.queue.discovery.deaths).toFixed(4),
        "Wins": player.pvp.queue.discovery.wins,
        "Losses": player.pvp.queue.discovery.losses,
        "W/L ration": (player.pvp.queue.discovery.wins / player.pvp.queue.discovery.losses).toFixed(4)
    } : null;

    const secureStats = player ? {
        "Time played": (player.pvp.modes.secure.playtime / 3600).toFixed(0) + 'h',
        "Games played": player.pvp.modes.secure.matches,
        "Best score": player.pvp.modes.secure.bestScore,
        "Wins": player.pvp.modes.secure.wins,
        "Losses": player.pvp.modes.secure.losses,
        "Defense kills": player.pvp.modes.secure.defended,
        "Attack kills": player.pvp.modes.secure.contested,
        "Secured": player.pvp.modes.secure.secured
    } : null;

    const bombStats = player ? {
        "Time played": (player.pvp.modes.bomb.playtime / 3600).toFixed(0) + 'h',
        "Games played": player.pvp.modes.bomb.matches,
        "Best score": player.pvp.modes.bomb.bestScore,
        "Wins": player.pvp.modes.bomb.wins,
        "Losses": player.pvp.modes.bomb.losses
    } : null;

    const hostageStats = player ? {
        "Time played": (player.pvp.modes.hostage.playtime / 3600).toFixed(0) + 'h',
        "Games played": player.pvp.modes.hostage.matches,
        "Best score": player.pvp.modes.hostage.bestScore,
        "Wins": player.pvp.modes.hostage.wins,
        "Losses": player.pvp.modes.hostage.losses,
        "Defended": player.pvp.modes.hostage.hostageDefended,
        "Rescued": player.pvp.modes.hostage.hostageRescued
    } : null;


    return (
        <section>
            <div className={"container"}>
                <div className={"row row-cols-1 row-cols-md-2 row-cols-xl-3"}>
                    <Window title={"Overall Stats"} stats={overallWindow}/>
                    <Window title={"Team Play"} stats={teamPlayWindow}/>
                    <Window title={"Kills Breakdown"} stats={killsBrakdownWindow}/>
                    <Window title={"Ranked Stats"} stats={rankedStats}/>
                    <Window title={"Casual Stats"} stats={casualStats}/>
                    <Window title={"Discovery Stats"} stats={discoveryStats}/>
                    <Window title={"Secure Stats"} stats={secureStats}/>
                    <Window title={"Bomb Stats"} stats={bombStats}/>
                    <Window title={"Hostage Stats"} stats={hostageStats}/>
                </div>
            </div>
        </section>
    );
};
export default PlayerView;