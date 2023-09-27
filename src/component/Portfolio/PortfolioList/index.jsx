import "./styles.scss";

export default function PortfolioList({ id, title, selected, setSelected, active }) {

    return (
        <li className={active ? "portfolio active" : "portfolioList "} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
