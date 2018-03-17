'use strict'
import React from 'react'

const NavSearch = ({ addClassCar, addClassBike, handleClick, type }) => (
  <div className='search-header'>
    <div className='search-header__type'>
      <a href='#' className={`search-header__type--car ${addClassCar}`} data-id='carro' onClick={handleClick}>Comprar <span>Carros</span></a>
      <a href='#' className={`search-header__type--bike ${addClassBike}`} data-id='moto' onClick={handleClick}>Comprar <span>Motos</span></a>
    </div>
    <div className='search-header__sell'>
      <a href='#'>Vender {type}</a>
    </div>
  </div>
)

export default NavSearch
