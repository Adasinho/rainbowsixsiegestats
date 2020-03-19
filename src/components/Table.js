import React, {useState} from "react";
import {useTableController} from "../Hooks/useTableController";

import "./../css/components/table.css";

const Table = ({id, attributes, records, firstFieldAttribute}) => {
    const [sortBy] = useTableController(records, records.length, attributes.length);
    const [sortedAttribute, setSortedAttribute] = useState(-1);

    const handleClick = key => {
        console.log("Clicked!");
        sortBy(key);
        setSortedAttribute(key);
    };

    const attributeToItem = (key, attribute) => {
        if(firstFieldAttribute) {
            if(!key) return <th className={"firstField"} key={key}>{attribute}</th>
            else return <th className={sortedAttribute === key ? "clicked" : null}
                            key={key} onClick={() => handleClick(key)}>{attribute}</th>
        } else return <th className={sortedAttribute === key ? "clicked" : null}
                          key={key} onClick={() => handleClick(key)}>{attribute}</th>
    };

    const headGenerator = () => {
        return (
            <thead>
                <tr>
                    {attributes.map((value, key) => attributeToItem(key, value))}
                </tr>
            </thead>
        )
    };

    const tdToItem = (key, td) => {
        if(firstFieldAttribute) return <td key={key} className={key === 0 ? "firstField" : null}>{td}</td>
        else return <td>{td}</td>
    };

    const trToItem = (key, tr) => {
        return <tr key={`tr-${key}`}>{Object.values(tr).map((value, key) => tdToItem(key, value))}</tr>
    };

    const bodyGenerator = () => {
        console.log(records);
        return (
            <tbody>{records.map((value, key) => trToItem(key, value))}</tbody>
        )
    };

    return (
        <div className={"responsive-overflow-wrapper"}>
            <table key={id} className={"table"}>
                {headGenerator()}
                {bodyGenerator()}
            </table>
        </div>
    )
};
export default Table;