import { IoMenu } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";


const MenuIcon = () =>
    <IconContext.Provider value={{ size: "2rem",  color: "#121619" }}>
        <IoMenu />
    </IconContext.Provider>

const LogoGithub = () =>
    <IconContext.Provider value={{ size: "2rem",  color: "#121619" }}>
        <IoLogoGithub />
    </IconContext.Provider>
const CloseIcon = () =>
    <IconContext.Provider value={{ size: "3rem", className: "close-icon", color: "#121619" }}>
        <IoClose />
    </IconContext.Provider>

export { MenuIcon, LogoGithub,CloseIcon }