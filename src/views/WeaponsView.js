import React, {useEffect, useState} from "react";
import Table from "../components/Table";

const WeaponsView = ({weapons}) => {
    const [weaponsList, setWeaponsList] = useState([]);

    useEffect(() => {
        let weaponsArray = (Object.values(weapons).map(weaponCategory => weaponCategory.list)).flat(1);
        weaponsArray.forEach(weapon => delete weapon.bulletsFired);
        setWeaponsList(weaponsArray);
    }, []);

    return (
        <section>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <Table attributes={["Weapon", "Kills", "Deaths", "Headshots", "Bullets Connected", "Time Chosen"]} records={weaponsList} firstFieldAttribute={true}/>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default WeaponsView;