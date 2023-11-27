import { useCart } from './CartContext';
import {useState} from 'react';
import { mens_outwear_img } from "../assets/images";
import mensWearJson from '../data/mens_outwear.json';
import addIcon from '../assets/icons8-add-100.png';
import addedIcon from '../assets/checked.png';
import { useAddedItems } from './CartContext';
function Mens_outwear() {
  const { state,dispatch } = useCart();
  const { addedItems, setAddedItems } = useAddedItems();
  const addToCart = (item) => {
    setAddedItems((prevItems) => [...prevItems, item.name]);

    dispatch({
      type: 'ADD_TO_CART',
      payload: { title: item.title, name: item.title, price: item.price,image:item.image },
    });
  };
  return (
    <div className="outwear">
      <img className="mens-outwear-img" src={mens_outwear_img}></img>
      <h3>Men's Outwear</h3>
      <div className="card-container">
        {
          mensWearJson.map((item,index)=>
        <div className="item-card" key={index}>
          <img src={"https://shop.polymer-project.org/esm-bundled/"+item.image}/>
          <p className="title">{item.title}</p>
          <p className="price">${item.price}</p>
          <img onClick={() => addToCart(item)}  className={addedItems.includes(item.name) ? 'addedIcon' : 'addIcon'}
           src={addedItems.includes(item.name) ? addedIcon : addIcon}/>
          <p className="title">Add To cart</p>
        </div>
          )
         }
      </div>
    </div>
  );
}
export default Mens_outwear;
