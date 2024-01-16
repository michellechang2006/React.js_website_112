import Headerlg from "./Headerlg"
import Headermd from "./Headermd"
import LogoSrclg from "../../assets/logo_lg.svg"
import LogoSrcmd from "../../assets/logo_md.svg"

export default function Header({ itemsData }) {
    return itemsData && <>
        <Headerlg items={itemsData} logoSrc={LogoSrclg} />
        <Headermd items={itemsData} logoSrc={LogoSrcmd} />
    </>

}