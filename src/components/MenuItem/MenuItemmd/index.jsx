import { useState } from "react"
import { ChevronDown, OpenOutline } from "../../../assets/icons"
import "./index.css"


export default function MenuItemmd({ path="#" ,dropdownItems, hypelink = false, dropdownMenu = false, title}) {
    const [dropdown, setDropdown] = useState(false)
    function dropdownEvent() {
        setDropdown((pre) => pre ? false : true)
    }
    return (
        <div className="menu-item-md">
            <div className="item">
                <a href={path} className="menu_tabs" onClick={dropdownEvent} onBlur={dropdownEvent}>
                    {title}
                    {hypelink && <OpenOutline />}
                    {dropdownItems  && <ChevronDown />}
                </a>
            </div>
            {dropdownItems  && <div tabIndex="0" className={`dropdown ${dropdown & dropdownMenu ? "flex" : "hidden"}`}>
                {dropdownItems.map((item) => <a key={item.title} href={item.path} className="menu_tabs text-error">{item.title}</a>)}
            </div>}
        </div>
    )
}