import React from 'react'
import logo from './asset/icon-ring1.svg'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShopingBasketIcon from "@material-ui/icons/ShoppingBasket"
import './Header.css'
import iconBasket from './asset/icons/basket1.png'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {
    const [{ basket, user }] = useStateValue();
    console.log(basket);
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to="/">
              <img className="header-logo" src={logo} alt="" />
            </Link>
            <Link to="/" className="logo-name">
              <h2 className="logo-name">NaTaX<span className="logoname">Shop</span></h2>
            </Link>
            
            <div className="header-search">
              <input type="text" className="search-input" />
              <SearchIcon className="search-icon" />
            </div>
            <div className="header-nav">
                <Link to={!user && "/login"} className="header-link">
                    <div onClick={login} className="header-option">
                        <span className="optionLineOne">Hello {user?.email}</span>
                        <span className="optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
                    </div>
                </Link>
                <Link to="/" className="header-link">
                    <div className="header-option">
                        <span className="optionLineOne">Returns</span>
                        <span className="optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header-link">
                    <div className="header-option">
                        <span className="optionLineOne">Your</span>
                        <span className="optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header-link">
                    <div className="header-basket">
                        <img className="header-basket-icon" src={iconBasket} alt="" />
                        {/* <ShopingBasketIcon /> */}
                        <span className="optionLineTwo header-basket-count">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            
        </nav>
    )
}

export default Header
