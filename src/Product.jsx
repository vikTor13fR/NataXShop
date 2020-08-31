import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, inform, inform1, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return <div className="product">
        <div className="product-info">
          <ul>
              <li className="product-title">{title}</li>
              <li className="title-price">{price}₴</li>
              <li>{inform}</li>
              <li>{inform1}</li>
          </ul>
          <div className="product-rating">
               {
                  Array(rating)
                  .fill()
                  .map((_) => (
                      <p>✮</p>
                  ))
               }
          </div>
        </div>
        <img src={image} alt="" />
        <button className="btn-add" onClick={addToBasket}>Add to basket</button>
    </div>
}

export default Product


{/* <div className="product-info">
          <p className="product-title">{title}</p>
          <ul>
              <li>{title}</li>
              <li>{price}</li>
              <li>{rating}</li>
          </ul>
          <p className="product-price">
              <small className="title-price1">₴</small>
              <strong className="title-price">{price}</strong>
          </p>
          <div className="product-rating">
              {
                  Array(rating)
                  .fill()
                  .map((_) => (
                      <p>✮</p>
                  ))
              }
          </div>
        </div> */}
