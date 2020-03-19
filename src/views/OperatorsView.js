import React, {useState} from "react";
import Table from "../components/Table";

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

    const navWindows = [
        <Table key={"attackers"} id={"attackers"} records={attackers} firstFieldAttribute={true} attributes={["Operator", "Kills", "Deaths", "Wins", "Losses", "Headshots", "Melee Kills", "DBNO", "XP", "Play Time"]}/>,
        <Table key={"defenders"} id={"defenders"} records={defenders} firstFieldAttribute={true} attributes={["Operator", "Kills", "Deaths", "Wins", "Losses", "Headshots", "Melee Kills", "DBNO", "XP", "Play Time"]}/>
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