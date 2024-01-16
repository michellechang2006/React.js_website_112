export default function Logo({ ...props}) {
    return (
        <div className="logo">
            <a href="#">
                <img {...props} alt="" />
            </a>
        </div>
    )
}