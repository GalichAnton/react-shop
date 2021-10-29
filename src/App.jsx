import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Route } from "react-router";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

export const AppContext = createContext({});

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favorites, setFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://6177f73c9c328300175f5c80.mockapi.io/Cart')

      const favoriteResponse = await axios.get('https://6177f73c9c328300175f5c80.mockapi.io/Favorite')
      const itemsResponse = await axios.get('https://6177f73c9c328300175f5c80.mockapi.io/items')

      setIsLoading(false);
      setCartItems(cartResponse.data)
      setFavorites(favoriteResponse.data)
      setItems(itemsResponse.data)
    }
    fetchData()
  }, [])

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onAddToCart = (obj) => {
    console.log(obj)
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://6177f73c9c328300175f5c80.mockapi.io/Cart/${obj.id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post('https://6177f73c9c328300175f5c80.mockapi.io/Cart', obj)
      setCartItems((prev) => [...prev, obj])
    }



  }

  const onAddToFavorite = async (obj) => {
    console.log(obj)
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://6177f73c9c328300175f5c80.mockapi.io/Favorite/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post(
          'https://6177f73c9c328300175f5c80.mockapi.io/Favorite',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6177f73c9c328300175f5c80.mockapi.io/Cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={
      {
        items,
        cartItems,
        favorites,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
        isItemAdded
      }
    }>
      <div className="wrapper clear">

        {cartOpened ? <Drawer items={cartItems} onCloseCart={() => setCartOpened(!cartOpened)} onRemove={onRemoveItem} /> : null}

        <Header onClickCart={() => setCartOpened(!cartOpened)} />
        <Route path="/" exact>
          <Home items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/favorite" exact>
          <Favorite />
        </Route>
        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
