import React from 'react'
import './product.css'

const Product = () => {
  return (
    <div className='productContainer'>
        <div className="heading">Trekking Gear on rent</div>
        <div className="cardContainer">
            <div className="Card">
                <img src="https://ik.imagekit.io/faskf16pg/sub_category/7_2NkI3F7jEi.png" alt="" srcset="" />
                <div className="title">Trekking<br/> Shoes</div>
                <div className="noOfItem"><span>3+ Products</span></div>
            </div>
            <div className="Card">
                <img src="https://ik.imagekit.io/faskf16pg/sub_category/8_n2rLgC9x3.png" alt="" srcset="" />
                <div className="title">Trekking<br/> Jackets</div>
                <div className="noOfItem"><span>10+ Products</span></div>
            </div>
            <div className="Card">
                <img src="https://ik.imagekit.io/faskf16pg/sub_category/9_7S6DI_1AY.png" alt="" srcset="" />
                <div className="title">Backpacks</div>
                <div className="noOfItem"><span>4+ Products</span></div>
            </div>
            <div className="Card">
                <img src="https://ik.imagekit.io/faskf16pg/sub_category/10_HmOdVtJ9S.png" alt="" srcset="" />
                <div className="title">Trek<br/> Accessories</div>
                <div className="noOfItem"><span>3+ Products</span></div>
            </div>
        </div>
    </div>
  )
}

export default Product