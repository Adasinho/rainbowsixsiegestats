import React, {useState} from "react";
import "../css/components/operatorsLabel.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleLeft} from "@fortawesome/free-solid-svg-icons";

const OperatorIcon = ({operator, onClickCallback}) => {
    return (
        <div onClick={() => onClickCallback(operator)} className={"operator"}>
            <img src={operator.icon} alt={operator.name} rel={operator.name}/>
            <div className={"badge"}>
                <img src={operator.badge} alt={"badge"}/>
            </div>
            <div className={"name"}>{operator.name.toUpperCase()}</div>
        </div>
    )
};

const OperatorsLabel = ({operators}) => {
    const [show, setShow] = useState(false);
    const [operatorDetail, setOperatorDetails] = useState("");

    const handleShowClick = operator => {
        setShow(true);
        setOperatorDetails(operator);
    };

    const handleHideClick = () => {
        setShow(false);
    };

    const operatorToItem = operator => {
        return <OperatorIcon onClickCallback={handleShowClick} operator={operator}/>
    };

    const extraClasses = show ? "" : "hidden";

    return (
        <div className={"container-fluid my-5 dark-background"}>
            <div className={"row"}>
                <div className={"operators-label"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"operators-icons"}>
                                {operators.map(operatorToItem)}
                            </div>
                        </div>
                    </div>
                    <div className={`operator-presentation ${extraClasses}`}>
                        <div onClick={handleHideClick} className={"hide"}>
                            <FontAwesomeIcon icon={faChevronCircleLeft}/> BACK
                        </div>
                        <div className={"content h-100"} style={{backgroundImage: `url(${operatorDetail.posture})`}}>
                            <div className={"container h-100"}>
                                <div className={"row d-block h-100"}>
                                    <div className={"column"}>
                                        <div className={"properties"}>
                                            <div className={"property"}>
                                                <div className={"key"}>Name</div>
                                                <div className={"value"}>{operatorDetail.name}</div>
                                            </div>
                                            <div className={"property"}>
                                                <div className={"key"}>Role</div>
                                                <div className={"value"}>{operatorDetail.role}</div>
                                            </div>
                                            <div className={"property"}>
                                                <div className={"key"}>Formation</div>
                                                <div className={"value"}>{operatorDetail.ctu}</div>
                                            </div>
                                            <div className={"property"}>
                                                <div className={"key"}>K/D</div>
                                                <div className={"value"}>{(operatorDetail.kills / operatorDetail.deaths).toFixed(2)}</div>
                                            </div>
                                            <div className={"property"}>
                                                <div className={"key"}>W/L</div>
                                                <div className={"value"}>{(operatorDetail.wins / operatorDetail.losses).toFixed(2)}</div>
                                            </div>
                                            <div className={"property"}>
                                                <div className={"key"}>Play Time</div>
                                                <div className={"value"}>{(operatorDetail.playtime / 3600).toFixed(0) + "h"}</div>
                                            </div>
                                        </div>
                                        <div className={"logo"}>
                                            <img src={operatorDetail.badge}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default OperatorsLabel;