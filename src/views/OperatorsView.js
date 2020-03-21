import React, {useState} from "react";

import Table from "../components/Table";
import OperatorsLabel from "../components/OperatorsLabel";
import {getOperatorPhotoPath, ImageType} from "../collections/Operators";

const OperatorsView = ({attackers, defenders}) => {
    const [selected, setSelected] = useState(0);

    const navElementToItem = (element, key) => {
        let extraClasses = selected === key ? "active" : "";
        return (
            <div className={`title ${extraClasses}`} onClick={() => setSelected(key)}>{element}</div>
        )
    };

    const navSection = elements => {
        return (
            <div className={"nav-section row-element"}>
                {elements.map(navElementToItem)}
            </div>
        )
    };

    const prepareArrayForOperatorsLabel = operators => {
        let operatorsWithPhotos = JSON.parse(JSON.stringify(operators));

        operatorsWithPhotos.map(operator => {
            const iconPhoto = getOperatorPhotoPath(operator.latinName, ImageType.icon);
            const posturePhoto = getOperatorPhotoPath(operator.latinName, ImageType.posture);

            operator.icon = iconPhoto;
            operator.posture = posturePhoto;
        });

        return operatorsWithPhotos;
    };

    const navWindow = (id, records, attributes) => {
        const fullInfoOperators = prepareArrayForOperatorsLabel(records);
        const onlyStatsOperators = JSON.parse(JSON.stringify(records));

        onlyStatsOperators.forEach(operator => {
            delete operator.badge;
            delete operator.role;
            delete operator.ctu;
            delete operator.gadget;
            delete operator.latinName;
        });

        return (
            <div className={"nav-window"}>
                <OperatorsLabel operators={fullInfoOperators}/>
                <Table key={id} id={id} records={onlyStatsOperators} firstFieldAttribute={true} attributes={attributes}/>
            </div>
        )
    };

    const att = ["Operator", "Kills", "Deaths", "Wins", "Losses", "Headshots", "Melee Kills", "DBNO", "XP", "Play Time"];

    const navWindows = [
        navWindow("attackers", attackers, att),
        navWindow("defenders", defenders, att)
    ];

    return (
        <section id={"operators"}>
            <div className={"container"}>
                <div className={"row"}>
                    {navSection(["Attackers", "Defenders"])}
                    <div className={"row-element"}>
                        {navWindows[selected]}
                    </div>
                </div>
            </div>
        </section>
    )
};
export default OperatorsView;