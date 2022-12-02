import './Filters.css';

function Filters({selectFilterType, type, selectFilterMenu, menu, selectSort}) {
  return (
    <div className="filters-container">
        <div className="filters-flex">
            <div className = "filters-box">
              <div className = "filter-title">Sort By</div>
              <select className = "option-text" name="sort" onChange={(e) => selectSort(e.target.value)}>
                <option value="popularity">Popularity</option>
                <option value="price">Price</option>
                <option value="calories">Calories</option>
              </select>
            </div>

            <div className = "filters-box">
              <div className = "filter-title">Type</div>
              {Object.entries(type).map(([key, value]) => (
                <div key={key}>
                  <input className="filter-box" type="checkbox" id={key} onChange={() => selectFilterType({...type, [key]: !value})} checked={value}></input>
                  <label htmlFor={key}>{key}</label><br></br>
                </div>
              ))}
            </div>
              
            <div className = "filters-box">
              <div className = "filter-title">Menu</div>

              {Object.entries(menu).map(([key, value]) => (
                <div key={key}>
                  <input className="filter-box" type="checkbox" id={key} onChange={() => selectFilterMenu({...menu, [key]: !value})} checked={value}></input>
                  <label htmlFor={key}>{key}</label><br></br>
                </div>
              ))}

              
              
              
            </div>
        </div>
    </div>
  );
}

export default Filters;
