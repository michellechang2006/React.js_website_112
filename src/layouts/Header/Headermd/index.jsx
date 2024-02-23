
import { CloseIcon, LogoGithub, MenuIcon } from "../../../assets/icons";
import "./index.css"
import { useState, useEffect } from "react";
import Logo from "../../../components/Logo";
import MenuItem from "../../../components/MenuItem";

export default function Headermd({ logoSrc, items, scrollEvent = true }) {
    const [windowScroll, setWindowScroll] = useState(scrollEvent)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setWindowScroll(true)
                setSideMenu((pre) => pre = false)
            } else if (window.scrollY > 0) {
                setWindowScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const [sideMenu, setSideMenu] = useState(false)
    function sideMenuEvent() {
        setSideMenu((pre) => pre ? false : true)
    }
    return (
        <div className={`header-md ${windowScroll & scrollEvent ? "disabled" : null}`}>
            <header className="z-20">
                <button onClick={sideMenuEvent}><MenuIcon /></button>
                <Logo src={logoSrc} />
                <LogoGithub />
            </header>
            <div onClick={sideMenuEvent} className={`bg-overlay h-screen w-screen fixed  ${sideMenu ? "opacity-100 z-10" : "opacity-0 -z-10"}`}></div>
            <div className={`side-menu ${sideMenu ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="top-section">
                    <Logo src={logoSrc} />
                    <button onClick={sideMenuEvent}><CloseIcon /></button>
                </div>
                <div className="items">
                    {items.map((item) => <MenuItem path={item.path} dropdownItems={item.dropdownItems} hypelink={item.hypelink} drop dropdownMenu={item.dropdownMenu} key={item.title}>{item.title}</MenuItem>)}
                </div>
            </div>
        </div>
    )
}