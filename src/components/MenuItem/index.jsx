import MenuItemlg from "./MenuItemlg";
import MenuItemmd from "./MenuItemmd";

export default function MenuItem({ hypelink = false, dropdownMenu = false, children, dropdownItems=null }) {
    return (
        <>
            <MenuItemlg dropdownItems={dropdownItems}  hypelink={hypelink} dropdownMenu={dropdownMenu} title={children} />
            <MenuItemmd dropdownItems={dropdownItems} hypelink={hypelink} dropdownMenu={dropdownMenu} title={children} />
        </>
    )
}