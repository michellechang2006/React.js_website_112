import { useState } from "react"
import { ChevronDown, OpenOutline } from "../../../assets/icons"
import "./index.css"


export default function MenuItemlg({ path="", hypelink = false, dropdownMenu = false, title, dropdownItems }) {
    const [dropdown, setDropdown] = useState(false)
    function dropdownEvent() {
        setDropdown((pre) => pre ? false : true)
    }
    return (
        <div className="menu-item-lg">
            <div className="item">
                <a href={path} className="menu_tabs" onClick={dropdownEvent} onBlur={dropdownEvent}>
                    {title}
                    {hypelink && <OpenOutline />}
                    {dropdownItems && <ChevronDown />}
                </a>
            </div>
            {dropdownItems && <div tabIndex="0" className={`dropdown ${dropdown & dropdownMenu ? "scale-y-100" : " scale-y-0"}`}>
                {dropdownItems.map((item) => <a key={item.title} href={item.path} className="menu_tabs">{item.title}</a>)}
            </div>}
        </div>
    )
}