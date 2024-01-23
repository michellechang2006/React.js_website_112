import "./index.css"
export default function Card({ children, photo, photoAlt, paragraph, btn }) {
    return (
        <div className="card">
            <div className="photo">
                <img src={photo} alt={photoAlt} />
            </div>
            <section>
                <h5>{children}</h5>
                <p>{paragraph}</p>
            </section>
            <a href="#">{btn}</a>
        </div>
    )
}