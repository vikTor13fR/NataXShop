import React from 'react'
import './Home.css'
import Corona from './asset/wall1.png'
import Product from './Product'
import Pro1 from './asset/item1.jpg'
import Pro2 from './asset/item2.jpg'
import Pro3 from './asset/item3.jpg'
import Pro4 from './asset/item4.jpg'
import Pro5 from './asset/item5.jpg'

function Home() {
    return (
        <div className="home">
            <div className="home-baner">
              <img className="home-image" src={Corona} alt="" />
              <h1 className="home-text">Chains</h1>
              <h1 className="home-text">Bangle</h1>
              <h1 className="home-text">Earring</h1>            
              <h1 className="home-text">Кольца</h1>
            </div>
            <div className="home-row">
              <Product
                id="2335"
                title="Ring Silver"
                price={11.25}
                rating={5}
                image={Pro1}
              />
              <Product
                id="2336"
                title="Ring Silver"
                price={11.25}
                rating={5}
                image={Pro2}
              />
              <Product
                id="2337"
                title="Ring Silver"
                price={11.25}
                rating={5}
                image={Pro3}
              />
            </div>
            <div className="home-row">
              <Product
                id="2338"
                title="Ring Silver"
                price={11.25}
                rating={5}
                image={Pro5}
              />
              <Product
                id="2339"
                title="Ring Silver"
                price={11.25}
                rating={5}
                image={Pro4}
              />
            </div>
        </div>
    )
}

export default Home
