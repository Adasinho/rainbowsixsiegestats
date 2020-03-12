import React from "react";
import SeasonLabel from "../components/SeasonLabel";

const SeasonsView = ({seasons}) => {

    const seasonToItem = (season) => {
        const name = season.name;
        const regions = season.regions;

        return <SeasonLabel key={name} name={name} regions={regions}/>;
    };

    return (
        <div className={"container seasonsView"}>
            <div className={"row"}>
                {seasons ? Object.values(seasons).map(seasonToItem) : null}
            </div>
        </div>
    )
};
export default SeasonsView;