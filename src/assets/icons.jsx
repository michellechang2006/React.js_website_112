import { IoEllipse, IoChevronForward, IoClose, IoLogoGithub, IoMenu, IoLogoYoutube, IoChevronDown, IoOpenOutline, IoLogoFacebook } from "react-icons/io5";
import { IconContext } from "react-icons";


const ChevronDown = () =>
    <IconContext.Provider value={{ size: "1.5rem", color: "#121619" }}>
        <IoChevronDown />
    </IconContext.Provider>

const OpenOutline = () =>
    <IconContext.Provider value={{ size: "1.5rem", color: "#121619" }}>
        <IoOpenOutline />
    </IconContext.Provider>

const MenuIcon = () =>
    <IconContext.Provider value={{ size: "2rem", color: "#121619" }}>
        <IoMenu />
    </IconContext.Provider>

const LogoGithub = () =>
    <IconContext.Provider value={{ size: "2rem", color: "#121619" }}>
        <IoLogoGithub />
    </IconContext.Provider>
const CloseIcon = () =>
    <IconContext.Provider value={{ size: "3rem", className: "close-icon", color: "#121619" }}>
        <IoClose />
    </IconContext.Provider>

const LogoFacebook = () =>

    <IconContext.Provider value={{ size: "1.8rem", color: "#121619" }}>
        <IoLogoFacebook />
    </IconContext.Provider>

const LogoYoutube = () =>
    <IconContext.Provider value={{ size: "1.8rem", color: "#121619" }}>
        <IoLogoYoutube />
    </IconContext.Provider>
const CircleIcon = ({ color = "#121619" }) =>
    <IconContext.Provider value={{ size: "1.5rem", color: { color } }}>
        <IoEllipse />
    </IconContext.Provider>
const ChevronForward = ({ color = "#121619" }) =>
    <IconContext.Provider value={{ size: "1.5rem", color: { color } }}>
        <IoChevronForward />
    </IconContext.Provider>

export { ChevronForward, MenuIcon, LogoGithub, CloseIcon, LogoFacebook, LogoYoutube, ChevronDown, OpenOutline, CircleIcon  } 