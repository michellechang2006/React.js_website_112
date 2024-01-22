import { useState } from "react"
import { ChevronDown, OpenOutline } from "../../../assets/icons"
import "./index.css"
import {v4 as uuidv4} from 'uuid';

export default function MenuItemlg({ path="", hypelink = false, dropdownMenu = false, title, dropdownItems }) {
    const [dropdown, setDropdown] = useState(false)
    function dropdownEvent() {
        setDropdown((pre) => pre ? false : true)
    }
    return (
        <div className="menu-item-lg" tabIndex="0" onBlur={dropdownEvent}>
            <div className="item">
                <a href={path} className="menu_tabs" onClick={dropdownEvent}>
                    {title}
                    {hypelink && <OpenOutline />}
                    {dropdownItems && <ChevronDown />}
                </a>
            </div>
            {dropdownItems && <div className={`dropdown ${dropdown & dropdownMenu ? "scale-y-100" : " scale-y-0"}`}>
                {dropdownItems.map((item) => <a key={uuidv4()} href={item.path} className="menu_tabs">{item.title}</a>)}
            </div>}
        </div>
    )
}
