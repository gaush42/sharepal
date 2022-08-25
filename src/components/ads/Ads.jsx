import React from 'react'
import './ads.css'

const Ads = () => {
  return (
    <div className='Container'>
        <div className="section">
            <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1660844759942x589981560796495700%2Flike.png" alt="" />
            <span className="sectionText">Excellent Quality<br/> Products</span>
        </div>
        
        <div className="vl"></div>
        <div className="section">
            <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1660843369408x866190984421172400%2Fgift-box.png" alt="" />
            <span className="sectionText">Delivery Date & Return<br/>Date is FREE!!</span>
        </div>
        <div className="vl"></div>
        <div className="section">
            <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1660843381244x490561632153383440%2Fcash-on-delivery.png" alt="" />
            <span className="sectionText">Pay on Delivery</span>
        </div>
    </div>
  )
}

export default Ads