import Button from "../../components/Button"
import './index.css'

export default function Banner({children,subtitle,btn}) {
    return (
        <div className="banner">
            <div>
                <h1>{children}</h1>
                <p>{subtitle}</p>
            </div>
            <Button rwd={true}>{btn}</Button>
        </div>
    )
}
