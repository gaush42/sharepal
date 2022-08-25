import React from 'react'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'
const Nav = () => {
  return (
    <div className='navContainer'>
        <div className="brandNameContainer">
            <div className="logo"><img src="https://dd7tel2830j4w.cloudfront.net/f1602334871226x948889548138196900/SharePal%20Logo2%20%281%29.svg" alt="Brand logo"/></div>
        </div>
        <div className="cityContainer">
            <div className="cityName">Bangalore</div>
            <div className="citySelector"><FontAwesomeIcon icon={faAngleDown}/></div>
        </div>
        <div className="navButtons">
            <div className="navBtnIcon"><img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648987966794x479811749978756400%2Ftrekking%2520%25281%2529.png" alt="" /></div>
            <div className="navBtnText">Trekking</div>
        </div>
        <div className="navButtons">
            <div className="navBtnIcon"><img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648989517307x231484877400689020%2Fmotorcycle%2520%25282%2529.png" alt="" /></div>
            <div className="navBtnText">Riding</div>
        </div>
        <div className="navButtons">
            <div className="navBtnIcon"><img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648986722707x666964559860979700%2Faction-camera%2520%25282%2529.png" alt="" /></div>
            <div className="navBtnText">GoPro</div>
        </div>
        <div className="navButtons">
            <div className="navBtnIcon"><img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648988411487x619738649722601200%2Fdslr-camera%2520%25282%2529.png" alt="" /></div>
            <div className="navBtnText">DSLR</div>
        </div>
        <div className="navButtons">
            <div className="navBtnIcon"><img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648989408507x660597966311601900%2Fconsole%2520%25281%2529.png" alt="" /></div>
            <div className="navBtnText">PS4/Xbox</div>
        </div>
        <div className="navButtons">
            <div className="navBtnIcon"><img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648987880884x852483720686704400%2Fcd-player%2520%25282%2529.png" alt="" /></div>
            <div className="navBtnText">Games</div>
        </div>
        <div className="cart">
            <FontAwesomeIcon icon={faCartArrowDown} size={'2x'} color={'blue'}/>
        </div>
        <div className="loginSignup">Login/Signup</div>
    </div>
  )
}

export default Nav