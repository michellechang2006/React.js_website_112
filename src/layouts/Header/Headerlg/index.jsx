
import { useState, useEffect } from "react"
import Logo from "../../../components/Logo"
import MenuItem from "../../../components/MenuItem"
import "./index.css"

export default function Headerlg({ logoSrc, items, scrollEvent = true }) {
    const [windowScroll, setWindowScroll] = useState(scrollEvent)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setWindowScroll(true)
            } else if (window.scrollY > 0) {
                setWindowScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return (
        <>
            <header className={`header-lg transition-opacity ${windowScroll & scrollEvent ? "disabled" : null}`}>
                <Logo src={logoSrc} />
                <div className="items">
                    {items.map((item) => <MenuItem path={item.path} dropdownItems={item.dropdownItems} hypelink={item.hypelink} dropdownMenu={item.dropdownMenu} key={item.title}>{item.title}</MenuItem>)}
                </div>
            </header>
        </>
    )
}

