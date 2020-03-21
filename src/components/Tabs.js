import React, {useState} from "react";

const Tabs = ({navItems, contentTabs}) => {
    const [selected, setSelected] = useState(0);

    const navElementToItem = (element, key) => {
        let extraClasses = selected === key ? "active" : "";
        return (
            <div className={`title ${extraClasses}`} onClick={() => setSelected(key)}>{element}</div>
        )
    };

    const navSection = elements => {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"nav-section-tabs row-element"}>
                        {elements.map(navElementToItem)}
                    </div>
                </div>
            </div>
        )
    };

    const contentToItem = (contentTab, key) => {
        let extraClasses = key !== selected ? "hidden" : "";
        return (
            <div className={`content-tab ${extraClasses}`}>
                {contentTab}
            </div>
        )
    };

    const contentSection = elements => {
        return (
            <div className={"content-tabs"}>
                {elements.map(contentToItem)}
            </div>
        )
    };

    return (
        <div className={"tabs"}>
            {navSection(navItems)}
            {contentSection(contentTabs)}
        </div>
    )
};
export default Tabs;