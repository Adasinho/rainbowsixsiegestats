import React, {useEffect, useState} from "react";

import "./../css/components/table.css";

const Table = ({attributes, records, firstFieldAttribute}) => {
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);

    useEffect(() => {
        setColumns(attributes.length);
        setRows(records.length);
    }, []);

    const attributeToItem = (key, attribute) => {
        if(firstFieldAttribute) return <th className={key === 0 ? "firstField" : null} key={attribute}>{attribute}</th>
        else return <th key={attribute}>{attribute}</th>
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

    console.log(columns);
    console.log(rows);

    return (
        <table className={"table"}>
            {headGenerator()}
            {bodyGenerator()}
        </table>
    )
};
export default Table;