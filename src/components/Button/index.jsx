import { CircleIcon, ChevronForward } from "../../assets/icons"
import "./index.css"

export default function Button({size="L", rwd=false, type="primary", children , filter = false, action=false }) {
    
    return (
        <button  className={` transition-colors ${rwd && "button-rwd"}  rounded-full button-${rwd || size} ${type}-btn`}>
            {filter && <CircleIcon color="#ffffff" />}{children}{ action && <ChevronForward />}
        </button>
    )
}
