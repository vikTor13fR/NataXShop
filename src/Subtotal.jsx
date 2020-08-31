import React from 'react'
import './Subtotal.css'
import Telephone from './asset/icons/tele.png'
import Social from './asset/icons/insta.png'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
               renderText={(value) => (
                   <>
                     <p>
                       SubTotal ({basket.length} items): <strong>{` ${value}`}</strong>
                     </p>
                     <small className="subtotal-gift">
                         <input type="checkbox" /> This order contains
                     </small>
                   </>
               )}
               
               decimalScale={2}
               value={getBasketTotal(basket)}
               displayType={"text"}
               thousandSeparator={true}
               prefix={"₴"}
            />

            <button>Proceed to Checkout</button>


            <div>
                <h1 className="sub-text-title">Звяжись зімною тут!</h1>
                <div className="sub-baner-reklam">
                 <a className="sub-text-soc" href="https://www.instagram.com/_viktorshop_/" ><img src={Social} alt="" />@viktorshop</a> 
                 <p className="sub-text-soc1"><img className="tele-baner" src={Telephone} alt="" />+ 380678767010</p>
                 <a className="sub-text-soc" href="https://www.instagram.com/_kreyzik_/" ><img src={Social} alt="" />@kreyzik</a>
            </div>
            </div>
        </div>
    )
}

export default Subtotal
