import './Cart.css';

function Cart({cartPrice,cart,itemCount,cartList}) {
    return (
      
      <div className="cart-container">
          <div className="cart-flex">
            <div className="cart-header">
                <div className = "cart-title">Total: ${cartPrice}</div>
                
                <div className="cart-box">
                    <img className="cart" src={cart}/>
                    <p className="cart-count">{itemCount}</p>
                </div>
            </div>
            
            <ul className='list'>
                {cartList.map(name => <li className='list-item'>{name}</li>)}
            </ul>
          </div>

          
      </div>
    );
  }
  
  //<p className = "cart-price">Cart Total: ${cartPrice}</p>
  export default Cart;
  