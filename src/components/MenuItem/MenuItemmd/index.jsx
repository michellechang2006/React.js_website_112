import { useState } from "react"
import { ChevronDown, OpenOutline } from "./icons"
import "./index.css"


export default function MenuItemmd({ dropdownItems, hypelink = false, dropdownMenu = false, title }) {
    const [dropdown, setDropdown] = useState(false)
    function dropdownEvent() {
        setDropdown((pre) => pre ? false : true)
    }
    return (
        <div className="menu-item-md hidden">
            <div className="item">
                <a href="#" className="menu_en" onClick={dropdownEvent} onBlur={dropdownEvent}>
                    {title}
                    {hypelink && <OpenOutline />}
                    {dropdownItems  && <ChevronDown />}
                </a>
            </div>
            {dropdownItems  && <div tabIndex="0" className={`dropdown ${dropdown & dropdownMenu ? "flex" : "hidden"}`}>
                {dropdownItems.map((item) => <a key={item.title} href={item.link} className="menu_en">{item.title}</a>)}
            </div>}
        </div>
    )
}