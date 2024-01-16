import MenuItem from "../../components/MenuItem"
import "./index.css"
import { IoLogoGithub, IoLogoYoutube, IoLogoFacebook } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function Footer() {
    return (
        <footer>
            <div className="items">
                <MenuItem>item</MenuItem>
                <MenuItem>item</MenuItem>
                <MenuItem>item</MenuItem>
                <MenuItem>item</MenuItem>
                <MenuItem>item</MenuItem>
                <MenuItem>item</MenuItem>
                <MenuItem>item</MenuItem>
            </div>
            <div className="icons">
                <IconContext.Provider value={{ size: "1.8rem", color: "#121619" }}>
                    <IoLogoGithub />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "1.8rem", color: "#121619" }}>
                    <IoLogoFacebook />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "1.8rem", color: "#121619" }}>
                    <IoLogoYoutube />
                </IconContext.Provider>
            </div>
            <div className="bottom-section">
                <p className="body-s">Copyright © 2024 Michelle Chang. All rights reserved.</p>
                <p className="body-s">本網站插圖素材來源：www.storyset.com</p>
            </div>
        </footer>
    )
}