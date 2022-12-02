import logo from './shiba-inu.png';
import cart from './shopping-cart.png';
import './App.css';
import Filters from './components/Filters';
import Cart from './components/Cart';
import Items from './components/Items';
import { useState } from 'react';

const itemsData = [
  { name: "Grilled Cheese", type: "Sandwich", price: 10, popularity: 3, calories: 300, menu: "Regular", id: 1 },
  { name: "Chicken Pesto", type: "Sandwich", price: 13, popularity: 5, calories: 450, menu: "Regular", id: 2 },
  { name: "Avocado Toast", type: "Sandwich", price: 11, popularity: 5, calories: 320, menu: "Seasonal",id: 3 },
  { name: "Green Bagel", type: "Sandwich", price: 12, popularity: 1, calories: 310, menu: "Daily",id: 4 },
  { name: "Cinnamon Roll", type: "Dessert", price: 6, popularity: 4, calories: 280, menu: "Regular",id: 5 },
  { name: "Maple Fudge", type: "Dessert", price: 4, popularity: 2, calories: 98, menu: "Seasonal",id: 6 },
  { name: "Almond Cookie", type: "Dessert", price: 5, popularity: 1, calories: 51, menu: "Daily",id: 7 },
  { name: "Carrot Cake", type: "Dessert", price: 8, popularity: 3, calories: 120, menu: "Seasonal",id: 8 },
  { name: "Hot Chocolate", type: "Drink", price: 4, popularity: 3, calories: 194, menu: "Regular",id: 9 },
  { name: "Apple Cider", type: "Drink", price: 3, popularity: 4, calories: 115, menu: "Seasonal",id: 10 },
  { name: "Matcha Latte", type: "Drink", price: 5, popularity: 1, calories: 70, menu: "Daily",id: 11 },
  { name: "Lemonade", type: "Drink", price: 3, popularity: 1, calories: 100, menu: "Regular",id: 12 },
]
 

function App() {

  const [itemCount, setItemCount] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [itemsInCart, setItemsInCart] = useState(itemsData.map(() => false));
  const [cartList, setCartList] = useState([]);


  const [sort, setSort] = useState("popularity");
  const [type, setType] = useState({ Sandwich: true, Dessert: true, Drink: true });

  
  const [menu, setMenu] = useState({ Regular: true, Seasonal: true, Daily: true });

  
  
  function alternateInCart(itemData) {
    const inCart = itemsInCart[itemData.id];
    setItemCount(itemCount => inCart ? itemCount - 1 : itemCount + 1);
    setCartPrice(cartPrice => inCart ? cartPrice - itemData.price : cartPrice + itemData.price);

    const newItemsInCart = [...itemsInCart];
    newItemsInCart[itemData.id] = !newItemsInCart[itemData.id];
    setItemsInCart(newItemsInCart)
    setCartList(itemsData.filter((itemData) => newItemsInCart[itemData.id]).map(itemData => itemData.name));
  }

  function isInCart(itemData) {
    return itemsInCart[itemData.id];
  }

  function selectSort(sort){
    setSort(sort)
  }

  function sortFunction(itemData1, itemData2){
    if (sort === "popularity") {
      return itemData2.popularity - itemData1.popularity;
    } else if(sort === "price") {
      // fill in
      return itemData1.price - itemData2.price;
    }
    else{
      return itemData1.calories - itemData2.calories;
    }
  }


  function selectFilterType(type){
    setType(type)
  }

  function matchesFilterType(itemData){
    return type[itemData.type]
  }

  function selectFilterMenu(menu){
    setMenu(menu)
  }

  function matchesFilterMenu(itemData){
    return menu[itemData.menu]
  }
    
  

  return (
    <div className="App">
      <div className="App-header">
        <div className="container flex">
          <img className="logo" src={logo}/>
          <h1 className="title">Shiba's Cafe</h1> 
        </div>       
      </div>
      <div className="flex">
        <div className="container content-container">
          <div className="sidebar-container">
            <Filters selectFilterType = {selectFilterType} type={type} selectFilterMenu = {selectFilterMenu} menu={menu}  selectSort = {selectSort} />
            <Cart cartPrice={cartPrice} cart={cart} itemCount={itemCount} cartList = {cartList}/>
          </div>
          <Items itemsData={itemsData.filter(matchesFilterType).filter(matchesFilterMenu).sort(sortFunction)} alternateInCart={alternateInCart} isInCart={isInCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
