import { NavLink } from "react-router-dom";
import '../css/General.css'




const Menu = () => {
    return (
        <>
        <nav id="menu">
            <a className="logosteam" href="">
            <i class="fa-sharp fa-solid fa-coins fa-beat-fade">
                </i><span className="span">Coins Api</span></a>
            <ul className="ul">
                <li className="li"><NavLink to='/'>Home</NavLink></li>
                <li className="li"><NavLink to='./compra'>ComprasCoins</NavLink></li>
            </ul>
        </nav>
        </>
    );
}

export default Menu;