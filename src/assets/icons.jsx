import { IoGlobeOutline, IoEllipse, IoChevronForward, IoClose, IoLogoGithub, IoMenu, IoLogoYoutube, IoChevronDown, IoOpenOutline, IoLogoFacebook } from "react-icons/io5";
import { IconContext } from "react-icons";


const GlobeOutline = () =>
    <IconContext.Provider value={{ className: "lg:text-4xl sm:text-7xl text-primary" }}>
        <IoGlobeOutline />
    </IconContext.Provider>

const OpenOutline = () =>
    <IconContext.Provider value={{ className: "lg:text-xl sm:text-5xl", color: "#121619" }}>
        <IoOpenOutline />
    </IconContext.Provider>

const MenuIcon = () =>
    <IconContext.Provider value={{ className:"sm:text-6xl", color: "#121619" }}>
        <IoMenu />
    </IconContext.Provider>

const LogoGithub = () =>
    <IconContext.Provider value={{ className: "lg:text-3xl sm:text-6xl text-tertiary hover:text-secondary transition-colors" }}>
        <IoLogoGithub />
    </IconContext.Provider>
const CloseIcon = () =>
    <IconContext.Provider value={{ size: "4rem", className: "close-icon", color: "#121619" }}>
        <IoClose />
    </IconContext.Provider>
const Close = () =>
    <IconContext.Provider value={{ size: "2rem", className: "close-icon", color: "#121619" }}>
        <IoClose />
    </IconContext.Provider>

const LogoFacebook = () =>

    <IconContext.Provider value={{ className: "lg:text-3xl sm:text-6xl text-tertiary hover:text-secondary transition-colors" }}>
        <IoLogoFacebook />
    </IconContext.Provider>

const LogoYoutube = () =>
    <IconContext.Provider value={{ className: "lg:text-3xl sm:text-6xl text-tertiary hover:text-secondary transition-colors" }}>
        <IoLogoYoutube />
    </IconContext.Provider>
const CircleIcon = ({ color = "#121619" }) =>
    <IconContext.Provider value={{ className: "lg:text-3xl sm:text-6xl", color: { color } }}>
        <IoEllipse />
    </IconContext.Provider>

const ChevronDown = () =>
<IconContext.Provider value={{ className: "lg:text-xl sm:text-5xl", color: "#121619", }}>
    <IoChevronDown />
</IconContext.Provider>

const ChevronForward = ({ color = "#121619" }) =>
    <IconContext.Provider value={{ className: "lg:text-xl sm:text-5xl", color: { color } }}>
        <IoChevronForward />
    </IconContext.Provider>





export { Close,GlobeOutline, ChevronForward, MenuIcon, LogoGithub, CloseIcon, LogoFacebook, LogoYoutube, ChevronDown, OpenOutline, CircleIcon } 