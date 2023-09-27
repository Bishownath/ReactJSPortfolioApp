import MenuList from "./MenuList";
import "./styles.scss";

export default function Menu({ openNav, setOpenNav }) {

    return (
        <div className={"menu " + (openNav && "active")} onClick={() => setOpenNav(false)} >
            <ul className="ul">
                <MenuList />
            </ul>
        </div >
    )
}
