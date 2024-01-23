import Button from "../../components/Button"
import Card from "../../components/Card"
import "./index.css"
import {v4 as uuidv4} from 'uuid';

export default function Cards({ btn, children, subtitle, cardsData }) {
    return (
        <div className="cards-section">
            <section>
                <h4>{subtitle}</h4>
                <h2>{children}</h2>
            </section>
            <div className="cards">
                {cardsData.map((item) => <Card photo={item.photo} paragraph={item.paragraph} btn={item.btn} key={uuidv4}>{item.title}</Card>)}
            </div>
            <Button action={true} rwd={true}>{btn}</Button>
        </div>
    )
}