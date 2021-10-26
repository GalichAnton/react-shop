import React from 'react'

const Card = (props) => {
  const onClickBtn = () => {
    alert(props.name)
  }
  return (
    <div className="card">
    <div className="favorite">
      <img src="./img/heart.svg" alt="heart" />
    </div>
    <img width={133} height={112} src={props.src} alt="card" />
    <h5>{props.name}</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>{props.price}</b>
      </div>
      <button className="button" onClick={onClickBtn}>
        <img width={11} height={11} src="./img/plus.svg" alt="plus" />
      </button>
    </div>
  </div>
  )
}

export default Card
