import { IoGlobeOutline, IoLogoReact, } from "react-icons/io5";
import { IconContext } from "react-icons";

export const Icon = ({ name }) => {
    let icon;
    const globe = <IconContext.Provider value={{ className: "lg:text-4xl sm:text-7xl text-primary" }}>
        <IoGlobeOutline />
    </IconContext.Provider>

    const webDev = <img src="pics/web_dev.svg" alt="" />

    const reactLogo = <IconContext.Provider value={{ className: "lg:text-4xl sm:text-7xl text-primary" }}>
        <IoLogoReact />
    </IconContext.Provider>

    const swiftLogo = <img src="pics/swift.svg" alt="" />

    if (name === "globe") {
        icon = globe
    } else if (name === "webDev") {
        icon = webDev
    } else if (name === "reactLogo") {
        icon = reactLogo
    } else if (name === "swiftLogo") {
        icon = swiftLogo
    }

    return icon


}