import './Item.css';



function Item({ itemData, alternateInCart, isInCart }) {
  const { name, price, type, popularity, calories,menu } = itemData;
  const buttonStyle = isInCart(itemData) ? "remove-button" : "add-button";


  return (
    <div className="item-container">
      <img className="item-image" src={require(`../images/${name.toLowerCase().replace(" ", "_")}.png`)} />
      
      <div className= "item-header">
        <div className = "item-title">{name}</div>
        <p className = "item-price">${price}</p>
      </div>.
      <div className = "item-description">
      <p>Type: {type}, Calories: {calories}, Rated {popularity}/5</p>
      <p>*{menu} Item*</p>
      </div>

      <button className = {buttonStyle} onClick={() => alternateInCart(itemData)}>{isInCart(itemData) ? "x" + '\xa0\xa0\xa0'  +"Remove from Cart" :  "+" + '\xa0\xa0'  + "Add to Cart"}</button>
      
    </div>
  );
}

export default Item;
