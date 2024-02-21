import { Icon } from "../../assets/icon/icon";
import Button from "../../components/Button";
import "./index.css"
import { v4 as uuidv4 } from 'uuid';

export default function IconsOnly({ itemsData, title, subtitle,btn }) {
    return (
        <div className="icons-only">
            <section>
                <h4>{subtitle}</h4>
                <h2>{title}</h2>
            </section>
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
           <a href="#"><Button rwd={true}>{btn}</Button></a>
        </div>
    )
}