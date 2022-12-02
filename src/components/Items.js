import Item from './Item';
import './Items.css';

function Items({ itemsData, alternateInCart, isInCart }) {
  return (
    <div className="items-container">
      {itemsData.map(itemData => <Item key={itemData.id} itemData={itemData} alternateInCart={alternateInCart} isInCart={isInCart} />)}
    </div>
  );
}

export default Items;
