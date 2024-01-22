import { Icon } from "../../assets/icon";
import "./index.css"
import { v4 as uuidv4 } from 'uuid';

export default function StatsCards({ itemsData, title, subtitle, paragraph }) {
    return (
        <div className="stats-cards">
            <section>
                <h4>{subtitle}</h4>
                <h2>{title}</h2>
            </section>
            <p>{paragraph}</p>
            <div>
                {itemsData.map((item) =>
                    <div key={uuidv4()} className="icon-card">
                        <Icon name={item.icon} />
                        <div>
                            <h5>{item.title}</h5>
                            <p>{item.paragraph}</p>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}