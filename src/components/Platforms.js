import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Platform = ({id, callBack, icon, selected}) => {
    const [extraClasses, setExtraClasses] = useState("");

    useEffect(() => {
        if(selected === id) setExtraClasses("selected");
        else setExtraClasses("");
    }, [selected, id]);

    return <span onClick={() => callBack(id)} className={`input-group-text platform-element ${extraClasses}`}><FontAwesomeIcon icon={icon}/></span>
};

const Platforms = ({elements, callBack}) => {
    const [selected, setSelected] = useState(0);

    const handleClick = key => {
        setSelected(key);
        callBack(key);
    };

    const elementToItem = (element, key) => {
        return <Platform id={key} callBack={() => handleClick(key)} icon={element.icon} selected={selected}/>
    };

    return elements.map(elementToItem);
};
export default Platforms;