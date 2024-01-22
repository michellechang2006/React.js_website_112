import MenuItem from "../../components/MenuItem"
import "./index.css"
import { LogoFacebook, LogoGithub, LogoYoutube } from "../../assets/icons";


export default function Footer({ itemsData={} }) {
    return (
        <footer>
            <div className="items-lg">
                {itemsData.destop.map((item) => <MenuItem hypelink={item.hypelink} key={item.title}>{item.title}</MenuItem>)}
            </div>
            <div className="items-md">
            {itemsData.mobile.map((item) => <MenuItem hypelink={item.hypelink} key={item.title}>{item.title}</MenuItem>)}
            </div>
            <div className="icons">
                <a href="#"><LogoGithub /></a>
                <a href="#"><LogoFacebook /></a>
                <a href="#"><LogoYoutube /></a>
            </div>
            <div className="bottom-section">
                <p>Copyright © 2024 Michelle Chang. All rights reserved.</p>
                <p>本網站插圖素材來源：www.storyset.com</p>
            </div>
        </footer>
    )
}