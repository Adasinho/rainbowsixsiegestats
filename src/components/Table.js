import React, {useState} from "react";
import {useTableController} from "../Hooks/useTableController";

import "./../css/components/table.css";

const Table = ({attributes, records, firstFieldAttribute}) => {
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
        if(firstFieldAttribute) return <td className={key === 0 ? "firstField" : null}>{td}</td>
        else return <td>{td}</td>
    };

    const trToItem = tr => {
        return <tr>{Object.values(tr).map((value, key) => tdToItem(key, value))}</tr>
    };

    const bodyGenerator = () => {
        return (
            <tbody>{records.map(trToItem)}</tbody>
        )
    };

    return (
        <table className={"table"}>
            {headGenerator()}
            {bodyGenerator()}
        </table>
    )
};
export default Table;