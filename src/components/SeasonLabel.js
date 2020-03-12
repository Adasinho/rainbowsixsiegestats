import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleDown} from "@fortawesome/free-solid-svg-icons";
import AnimateHeight from "react-animate-height";

import "../css/components/seasonLabel.css";

const SeasonLabel = ({name, regions}) => {
    const [bestRank, setBestRank] = useState("");
    const [active, setActive] = useState(false);

    useEffect(() => {
        let best = Object.values(regions)[0].max;

        for(let region of Object.values(regions))
            if (best.id < region.max.id) best = region.max;

        setBestRank(best);
    }, []);

    const regionStatsItem = item => {
        return (
            <div className={"region-stats"}>
                <div className={"col-6"}>
                    <div className={"property"}>
                        <div className={"key"}>MMR</div>
                        <div className={"value"}>{item.current.mmr}</div>
                    </div>
                    <div className={"property"}>
                        <div className={"key"}>Kills</div>
                        <div className={"value"}>{item.kills}</div>
                    </div>
                    <div className={"property"}>
                        <div className={"key"}>Deaths</div>
                        <div className={"value"}>{item.deaths}</div>
                    </div>
                </div>
                <div className={"col-6"}>
                    <div className={"property"}>
                        <div className={"key"}>Matches</div>
                        <div className={"value"}>{item.matches}</div>
                    </div>
                    <div className={"property"}>
                        <div className={"key"}>Wins</div>
                        <div className={"value"}>{item.wins}</div>
                    </div>
                    <div className={"property"}>
                        <div className={"key"}>Losses</div>
                        <div className={"value"}>{item.losses}</div>
                    </div>
                    <div className={"property"}>
                        <div className={"key"}>Abandons</div>
                        <div className={"value"}>{item.abandons}</div>
                    </div>
                </div>
            </div>
        )
    };

    const regionToItem = item => {
        if(item.matches !== 0) return regionStatsItem(item);
        else return null;
    };

    const handleClick = () => {
        console.log(active);
        setActive(!active);
    };

    return (
        <div className={"season-label"}>
            <div className={"head"} onClick={handleClick}>
                <div className={"left"}>
                    <img src={bestRank.image} className={"rank-img"} alt={bestRank.name}/>
                    <div className={"name"}>{name}</div>
                </div>
                <div className={"right"}>
                    <FontAwesomeIcon className={"arrow"} icon={faChevronCircleDown}/>
                </div>
            </div>
            <div className={`body`}>
                <AnimateHeight duration={500} height={active ? `auto` : 0}>
                    {Object.values(regions).map(regionToItem)}
                </AnimateHeight>
            </div>
        </div>
    )
};
export default SeasonLabel;