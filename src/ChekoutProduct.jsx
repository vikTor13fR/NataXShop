import React from 'react'
import './ChekoutProduct.css'
import { useStateValue } from './StateProvider'

function ChekoutProduct( { id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }

    return (
        <div className="chekout-product">
            <img className="chekout-product-image" src={image} alt="" />

            <div className="chekout-product-info">
              <p className="chekout-product-title">{title}</p>

              <p className="chekout-product-price">
                  <small>₴</small>
                  <strong>{price}</strong>
              </p>

              <div className="chekout-product-rating">
              {
                  Array(rating)
                  .fill()
                  .map((_, i) => (
                      <p>✮</p>
                  ))
              }
             </div>

             <button className="btn-remove" onClick={removeFromBasket} >Remove from basket</button>

            </div>
        </div>
    )
}

export default ChekoutProduct
