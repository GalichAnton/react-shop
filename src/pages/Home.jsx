import React from 'react'
import Card from "../components/Card";
const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  cartItems,
  isLoading
}) => {

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}

        loading={isLoading}
        {...item}
      />
    ));
  };

  return (

    <div>
      <div className="content p-40 ">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
          <div className="searchBlock">
            <img src="./img/search.png" alt="search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex justify-between flex-wrap">
          {renderItems()}
        </div>
      </div>
    </div>
  )
}

export default Home
