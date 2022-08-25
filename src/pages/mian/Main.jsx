import React from 'react'
import Ads from '../../components/ads/Ads'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import Product from '../../components/product/Product'
import Stickybtn from '../../components/stickybtn/Stickybtn'

const Main = () => {
  return (
    <div className='Main'>
        <Nav/>
        <Ads/>
        <Product/>
        <Footer/>
        <Stickybtn/>
    </div>
  )
}

export default Main