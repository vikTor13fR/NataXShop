import React from 'react'

import './Home.css'
import Corona from './asset/wall1.png'
import Telephone from './asset/icons/tele.png'
import Social from './asset/icons/insta.png'
import Product from './Product'
import Pro1 from './asset/item1.jpg'
import Pro2 from './asset/item2.jpg'
import Pro3 from './asset/item3.jpg'
import Pro4 from './asset/item24.jpg'
import Pro5 from './asset/item6.jpg'
import Pro31 from './asset/item31.jpg'
import Pro23 from './asset/item23.jpg'
import Pro30 from './asset/item34.jpg'
import Pro37 from './asset/item37.jpg'
import Pro14 from './asset/item14.jpg'
import Pro13 from './asset/item13.jpg'
import Pro15 from './asset/item15.jpg'
import Pro10 from './asset/item10.jpg'
import Pro7 from './asset/item7.jpg'
import Pro27 from './asset/item27.jpg'
import Pro22 from './asset/item22.jpg'


function Home() {
    return (
        <div className="home">
            <div className="home-baner">
              <img className="home-image" src={Corona} alt="" />
              <h1 className="home-text">Chains</h1>
              <h1 className="home-text">Bangle</h1>
              <h1 className="home-text">Earring</h1>            
              <h1 className="home-text">Ring</h1>
              
            </div>
            
            <div className="home-baner-reklam">
                 <a className="home-text-soc" href="https://www.instagram.com/_viktorshop_/" ><img src={Social} alt="" />@viktorshop</a> 
                 <p className="home-text-soc1"><img className="tele-baner" src={Telephone} alt="" />+ 380678767010</p>
                 <a className="home-text-soc" href="https://www.instagram.com/_kreyzik_/" ><img src={Social} alt="" />@kreyzik</a>
            </div>
            <div className="home-row">
              <Product
                id="2335"
                title="Браслет"
                inform="Позолота PO"
                inform1="Вага: 10г Розмір: 18см"
                price={120}
                rating={8}
                image={Pro1}
              />
              <Product
                id="2336"
                title="Кульчики"
                price={90}
                inform="Позолота PO 18k"
                inform1="Вага: 2.3г Розмір: 20*2mm"
                rating={5}
                image={Pro2}
              />
              <Product
                id="2337"
                title="Цепочка"
                price={150}
                inform="Позолота PO"
                inform1="Вага: 4.5г Розмір: 45см"
                rating={7}
                image={Pro3}
              />
            </div>
            <div className="home-row">
              <Product
                id="2338"
                title="Кульчики"
                price={80}
                inform="Срібло 925'"
                inform1="Вага: 1.32г Розмір: 7*7mm"
                rating={10}
                image={Pro5}
              />
              <Product
                id="2339"
                title="Кульчики"
                price={70}
                inform="Позолота PO Медюсплав"
                rating={7}
                image={Pro4}
              />
            </div>
            <div className="home-row">
              <Product
                id="2335"
                title="Кулон+Цепочка"
                price={120}
                inform="Позолота PO Мед.сплав"

                rating={8}
                image={Pro31}
              />
              <Product
                id="2336"
                title="Кульчики"
                price={70}
                inform="Позолота PO Мед.сплав"

                rating={5}
                image={Pro23}
              />
              <Product
                id="2337"
                title="Кульчики"
                price={120}
                inform="Срібло 925'"
                inform1="Вага: 1.32г Розмір: 7*7mm"
                rating={8}
                image={Pro30}
              />
            </div>
            <div className="home-row">
              <Product
                id="2338"
                title="Кульчики"
                price={80}
                inform="Позолота PO Мед.сплав"

                rating={10}
                image={Pro37}
              />
              <Product
                id="2339"
                title="Кульчики"
                price={70}
                inform="Позолота PO Мед.сплав"
                rating={7}
                image={Pro13}
              />
            </div>
            <div className="home-row">
              <Product
                id="2338"
                title="Кульчики"
                price={130}
                inform="Позолота PO, Фриантові вставки"
                inform1="Вага: 5,8г Розмір: 18*7mm"
                rating={10}
                image={Pro14}
              />
              <Product
                id="2339"
                title="Кульчики"
                price={130}
                inform="Позолота PO, Фриантові вставки,Біле золото"
                inform1="Вага: 1,8г Розмір: 17*2mm"
                rating={7}
                image={Pro15}
              />
            </div>
            <div className="home-row">
              <Product
                id="2338"
                title="Цепочка"
                price={200}
                inform="Срібло 925'"
                inform1="Вага: 1.4г Розмір: 20sm"
                rating={10}
                image={Pro10}
              />
              <Product
                id="2339"
                title="Цепочка"
                price={130}
                inform="Позолота PO"
                
                rating={7}
                image={Pro7}
              />
            </div>
            <div className="home-row">
              <Product
                id="2338"
                title="Цепочка"
                price={150}
                inform="Позолота PO"
                
                rating={10}
                image={Pro27}
              />
              <Product
                id="2339"
                title="Кульчики"
                price={130}
                inform="Позолота PO, Фриантові вставки,Біле золото"
                
                rating={7}
                image={Pro22}
              />
            </div>
        </div>
    )
}

export default Home
