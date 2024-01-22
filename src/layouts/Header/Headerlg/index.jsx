import Logo from "../../../components/Logo"
import MenuItem from "../../../components/MenuItem"
import "./index.css"

export default function Headerlg({ logoSrc, items }) {
    return (
        <>
            <header className="header-lg">
                <Logo src={logoSrc} />
                <div className="items">
                    {items.map((item) => <MenuItem path={item.path} dropdownItems={item.dropdownItems} hypelink={item.hypelink} dropdownMenu={item.dropdownMenu}  key={item.title}>{item.title}</MenuItem>)}
                </div>
            </header>
            <header className="header-lg">
                <Logo src={logoSrc} />
                <div className="items">
                    {items.map((item) => <MenuItem path={item.path} dropdownItems={item.dropdownItems} hypelink={item.hypelink} dropdownMenu={item.dropdownMenu}  key={item.title}>{item.title}</MenuItem>)}
                </div>
            </header>
        </>
    )
}