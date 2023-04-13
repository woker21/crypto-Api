import { NavLink } from "react-router-dom";





const Menu = () => {
    return (
        <>
        <nav className="menu">
            <a className="logosteam" href="">
            <i class="fa-brands fa-bitcoin">
                </i><span>Cripto Api</span></a>
            <ul>
                <li><NavLink to='../inicio'>Home</NavLink></li>
                <li><NavLink to='../servers'>Compras Coins</NavLink></li>
            </ul>
        </nav>
        </>
    );
}

export default Menu;