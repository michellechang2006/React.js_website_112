import { IoChevronDown,IoOpenOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

const ChevronDown = () =>
    <IconContext.Provider value={{ size: "1.3rem", color: "#121619" }}>
        <IoChevronDown />
    </IconContext.Provider>

const OpenOutline = () =>
    <IconContext.Provider value={{ size: "1.3rem", color: "#121619" }}>
        <IoOpenOutline />
    </IconContext.Provider>

export { ChevronDown,OpenOutline }