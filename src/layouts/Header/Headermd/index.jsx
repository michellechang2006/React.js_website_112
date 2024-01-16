
import { CloseIcon, LogoGithub, MenuIcon } from "./icons";
import "./index.css"
import { useState } from "react";
import Logo from "../../../components/Logo";
import MenuItem from "../../../components/MenuItem";

export default function Headermd({logoSrc,items}) {
    const [sideMenu, setSideMenu] = useState(false)
    function sideMenuEvent() {
        setSideMenu((pre) => pre ? false : true)
    }
    return (
        <div className="header-md">
            <header>
                <button onClick={sideMenuEvent}><MenuIcon /></button>
                <Logo src={logoSrc} />
                <LogoGithub />
            </header>
            <div onClick={sideMenuEvent} className={`overlay  ${sideMenu ? "opacity-75 z-10" : "opacity-0 -z-10"}`}></div>
            <div className={`side-menu ${sideMenu ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="top-section">
                    <Logo src={logoSrc} />
                    <button onClick={sideMenuEvent}><CloseIcon /></button>
                </div>
                <div className="items">
                {items.map((item) => <MenuItem dropdownItems={item.dropdownItems} hypelink={item.hypelink} drop dropdownMenu={item.dropdownMenu} key={item.title}>{item.title}</MenuItem>)}
                </div>
            </div>
        </div>
    )
}