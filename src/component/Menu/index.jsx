import "./styles.scss";

export default function Menu({ openNav, setOpenNav }) {
    return (
        <div className={"menu " + (openNav && "active")} >
            <ul className="ul">
                <li>
                    <a href="#intro">Home</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div >
    )
}
