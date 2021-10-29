import React, { useContext, useState } from 'react'
import ContentLoader from 'react-content-loader'
import { AppContext } from '../../App'
import classes from './Card.module.scss'
const Card = ({ id, onFavorite, name, price, src, onPlus, favorited = false, added = false, loading = false }) => {
  const [isFavorite, setIsFavorite] = useState(favorited)
  const {isItemAdded} = useContext(AppContext)


  const onClickPlus = () => {
    onPlus({ id, name, price, src })
    
  }
  const onClickFavorite = () => {
    onFavorite({ id, name, price, src })
    setIsFavorite(!isFavorite)
  }
  return (
    <div className={classes.card}>
      {loading ? <ContentLoader
        speed={2}
        width={155}
        height={250}
        viewBox="0 0 155 265"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
        <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
        <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
        <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
        <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
      </ContentLoader> : <>
        <div className={classes.favorite} onClick={onClickFavorite}>
          <img src={isFavorite ? "./img/heart_act.svg" : "./img/heart.svg"} alt="heart" />
        </div>
        <img width={133} height={112} src={src} alt="card" />
        <h5>{name}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price}</b>
          </div>

          <img width={32} height={32} className={classes.plus} onClick={onClickPlus} src={isItemAdded(id) ? "https://upload.wikimedia.org/wikipedia/commons/c/c7/Accept.svg" : "./img/button.svg"} alt="plus" />

        </div>
      </>

      }

    </div>
  )
}

export default Card
