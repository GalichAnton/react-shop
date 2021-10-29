import axios from 'axios';
import React from 'react'

import { useCart } from '../hooks/useCart';
import Info from './info'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onCloseCart, items = [], onRemove }) => {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://6177f73c9c328300175f5c80.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://6177f73c9c328300175f5c80.mockapi.io/Cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(');
    }
    setIsLoading(false);
  };
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between mb-30">
          Корзина <img onClick={onCloseCart} className="removeBtn cu-p" src="./img/close.svg" alt="remove" />
        </h2>
        {items.length > 0 ? (<>

          <div className="cartItems d-flex flex-column flex-1">
            {
              items.map((obj, index) => {
                return (
                  <div key={index} className="cartItem d-flex align-center mb-30">
                    <div style={{ backgroundImage: `url(${obj.src})` }} className="cartItemImg"></div>
                    <div className="mr-15">
                      <p className="mb-5">{obj.name})</p>
                      <b>{obj.price}</b>
                    </div>
                    <img onClick={() => onRemove(obj.id)} className="removeBtn" src="./img/close.svg" alt="remove" />
                  </div>)
              })
            }
          </div>

          <div className="cartTotalBlock">
            <ul >
              <li >
                <span>Итого: </span>
                <div></div>
                <b>{totalPrice} руб. </b>
              </li>
              <li >
                <span>Налог 5%:</span>
                <div></div>
                <b>{totalPrice / 100 * 5} руб.</b>
              </li>
            </ul>
            <button onClick={onClickOrder}  className="greenButton">Оформить заказ &rarr;</button>
          </div> </>) : (<Info
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderComplete ? 'img/order.jpg' : 'img/empty.jpg'}
          />)}
      </div>
    </div>
  )
}

export default Drawer
