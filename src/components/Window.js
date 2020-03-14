import React from "react";

const Window = ({className, title, stats, col}) => {
    const statsToItem = (item) => {
        return  (
            <div key={item[0]} className={`item col-${12/col}`}>
                <div className={"prop-name"}>{item[0]}</div>
                <div className={"prop-value"}>{item[1]}</div>
            </div>
        );
    };

    return (
        <div className={className}>
            <div className={"window"}>
                <div className={"title"}>{title}</div>
                <div className={"items"}>
                    {stats ? Object.entries(stats).map(statsToItem) : null}
                </div>
            </div>
        </div>
    )
};
export default Window;