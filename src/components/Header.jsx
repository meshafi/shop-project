import { Link ,useLocation} from "react-router-dom";
import { useState } from "react";
import cart from '../assets/shopping-cart.png';
import { useCart } from "./CartContext";
export default function Header() {
  const { state ,dispatch} = useCart();
    const {pathname}= useLocation();
  return (
    <div className="header">
      <div className="cart">
        <Link to='/shopping_cart'><img   src={cart}/></Link>
        <sup>{state.items.length}</sup>
      </div>  

      <h2>SHOP</h2>
      <ul className="nav-items">
        <li>
          <Link   className={pathname==='/' ? 'links1' : 'links'}to="/">
            Men's Outwear{" "}
          </Link>
        </li>
        <li>
          <Link  className={pathname==='/Ladies_outwear' ? 'links1' : 'links'}  to="/Ladies_outwear">
            Ladie's Outwear
          </Link>
        </li>
        <li>
          <Link className={pathname==='/mens_tshirt' ? 'links1' : 'links'} to="/mens_tshirt">
            Men's T-shirts
          </Link>
        </li>
        <li>
        <Link  className={pathname==='/ladies_tshirt' ? 'links1' : 'links'} to="/ladies_tshirt">
            Ladie's T-shirts
          </Link>
        </li>
      </ul>
    </div>
  );
}