import MenuItemlg from "./MenuItemlg";
import MenuItemmd from "./MenuItemmd";

export default function MenuItem({ path = "", hypelink = false, dropdownMenu = false, children, dropdownItems=null }) {
    return (
        <>
            <MenuItemlg path={path} dropdownItems={dropdownItems}  hypelink={hypelink} dropdownMenu={dropdownMenu} title={children} />
            <MenuItemmd path={path} dropdownItems={dropdownItems} hypelink={hypelink} dropdownMenu={dropdownMenu} title={children} />
        </>
    )
}