import React from "react";

import Table from "../components/Table";
import OperatorsLabel from "../components/OperatorsLabel";
import Tabs from "../components/Tabs";
import {getOperatorPhotoPath, ImageType} from "../collections/Operators";

const OperatorsView = ({attackers, defenders}) => {
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
                <div className={"container"}>
                    <div className={"row"}>
                        <Table key={`table-${id}`} id={id} records={onlyStatsOperators} firstFieldAttribute={true} attributes={attributes}/>
                    </div>
                </div>
            </div>
        )
    };

    const att = ["Operator", "Kills", "Deaths", "Wins", "Losses", "Headshots", "Melee Kills", "DBNO", "XP", "Play Time"];

    const navItems = ["Attackers", "Defenders"];
    const contentTabs = [
        navWindow("attackers", attackers, att),
        navWindow("defenders", defenders, att)
    ];

    return (
        <section id={"operators"}>
            <div className={"row-element"}>
                <Tabs navItems={navItems} contentTabs={contentTabs}/>
            </div>
        </section>
    )
};
export default OperatorsView;