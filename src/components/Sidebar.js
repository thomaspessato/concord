import React, { useState, useEffect } from "react";
import './Sidebar.scss';

function Sidebar() {
    let mockMenus = [
        {
            name: "The Dome of Power",
            id: "33-131-1231-123123"
        },
        {
            name: "The Dome of Power",
            id: "33-131-1231-123123"
        },
        {
            name: "The Dome of Power",
            id: "33-131-1231-123123"
        }
    ]
    const [menus, setMenus] = useState(mockMenus)
    return <div className={"sidebar"}>
        <ul className={""}>
            <li>

            </li>
        </ul>
        <ul className={"channels"}>
            {menus.map((menu) => {
                return <li className={"channel"}>
                    <a href={menu.path}>
                        icon
                    </a>
                </li>
            })}
        </ul>

    </div>
}

export default Sidebar;