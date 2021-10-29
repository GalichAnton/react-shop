import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart';

const Header = (props) => {
  const { totalPrice } = useCart();


  return (
    <header className="header d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <Link to="/">
          <img width={40} height={40} alt="logo" src="./img/logo.png" />
        </Link>
        <div>
          <h3 className="text-uppercase">React sneacers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={20} height={20} alt="cart" src="/img/cart.svg" />
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorite"><img className="mr-20 cu-p" width={40} height={40} alt="favorite" src="/img/heart.svg" /></Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="img/user.svg" alt="Пользователь" />
          </Link>
        </li>

      </ul>
    </header>
  )
}

export default Header
