import { IoGlobeOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

export const Icon = ({ name }) => {
    let icon;
    const globe = <IconContext.Provider value={{ className: "lg:text-4xl sm:text-7xl text-primary" }}>
        <IoGlobeOutline />
    </IconContext.Provider>

    if (name === "globe") {
        icon = globe
    }

    return icon


}