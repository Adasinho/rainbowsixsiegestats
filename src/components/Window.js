import React from "react";

import "./../css/components/window.css";

const Window = ({title, stats}) => {
    const statsToItem = (item) => {
        return  (
            <div key={item[0]} className={`item`}>
                <div className={"prop-name"}>{item[0]}</div>
                <div className={"prop-value"}>{item[1]}</div>
            </div>
        );
    };

    return (
        <div className={"col mb-2"}>
            <div className={"window h-100"}>
                <div className={"title"}>{title}</div>
                <div className={"items h-100"}>
                    {stats ? Object.entries(stats).map(statsToItem) : null}
                </div>
            </div>
        </div>
    )
};
export default Window;