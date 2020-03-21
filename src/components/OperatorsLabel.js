import React from "react";
import "../css/components/operatorsLabel.css";

const OperatorIcon = ({badge, model, name}) => {
    return (
        <div className={"operator"}>
            <img src={model} alt={name} rel={name}/>
            <div className={"badge"}>
                <img src={badge} alt={"badge"}/>
            </div>
            <div className={"name"}>{name.toUpperCase()}</div>
        </div>
    )
};

const OperatorsLabel = ({operators}) => {
    const operatorToItem = operator => {
        return <OperatorIcon badge={operator.badge} model={operator.icon} name={operator.name}/>
    };

    return (
        <div className={"operators-label"}>
            {operators.map(operatorToItem)}
        </div>
    )
};
export default OperatorsLabel;