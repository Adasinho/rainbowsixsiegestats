import React from "react";

const Window = ({title, params, col}) => {
    console.log(title);

    const paramToItem = (item) => {
        return  (
            <div key={item[0]} className={"item"}>
                <div className={"prop-name"}>{item[0]}</div>
                <div className={"prop-value"}>{item[1]}</div>
            </div>
        );
    };

    return (
        <div className={`col-${col} window`}>
            <div className={"title"}>{title}</div>
            <div className={"items"}>
                {params ? Array.from(params).map(paramToItem) : null}
            </div>
        </div>
    )
};
export default Window;