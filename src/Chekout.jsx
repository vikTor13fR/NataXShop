import React from 'react'
import './Chekout.css'
import { useStateValue } from './StateProvider'
import ChekoutProduct from './ChekoutProduct'
import Subtotal from './Subtotal'

function Chekout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="chekout">
            
            <div className="chekout-left">
                <img className="chekout-ad" src="" alt="" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basker is empty</h2>
                    <p>Add item to BAsket</p>
                </div>
            ) : (
                <div>
                    <h2 className="chek-title">Ваш список товарів</h2>

                    {basket?.map((item) => {
                        console.log(item)
                        return (
                           <ChekoutProduct
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              price={item.price}
                              rating={item.rating}
                           />
                        );
                    })}
                    
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className="chekout-right">
                    <h2>Загальна сумма списку</h2>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Chekout
