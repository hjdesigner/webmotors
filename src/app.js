'use strict'
/* global fetch */

import React, { Component } from 'react'
import Header from './components/header'
import NavSearch from './components/search/nav-search'
import Type from './components/search/type'
import Where from './components/search/where'
import SelectYear from './components/search/select-year'
import SelectPrice from './components/search/select-price'
import SelectBrand from './components/search/select-brand'
import SelectModel from './components/search/select-model'
import SelectVersion from './components/search/select-version'
import LinkSearch from './components/search/link-search'
import ButtonClean from './components/search/button-clean'
import ButtonOffers from './components/search/button-offers'
import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      valueWhere: 'Brasil',
      addClassCar: 'active',
      addClassBike: '',
      type: 'meu carro',
      make: [],
      valueBrand: 'option1',
      model: [],
      valueModel: 'option1',
      version: [],
      valueVersion: 'option1'
    }
    this.handleClick = (e) => {
      e.preventDefault()
      const type = e.currentTarget.dataset.id
      if (type === 'carro') {
        this.setState({
          addClassCar: 'active',
          addClassBike: '',
          type: 'meu carro'
        })
      } else {
        this.setState({
          addClassCar: '',
          addClassBike: 'active',
          type: 'minha moto'
        })
      }
    }
    this.handleBrand = (e) => {
      const value = e.target.value
      const selectModel = document.querySelector('.search-form__model select')
      if (value > 0) {
        selectModel.removeAttribute('disabled')
        this.setState({
          valueBrand: value
        })
        fetch(`http://localhost:3004/model?MakeID=${value}`)
        .then(response => response.json())
        .then((data) => {
          this.setState({model: data})
        })
      } else {
        selectModel.setAttribute('disabled', 'true')
      }
    }
    this.handleModel = (e) => {
      const value = e.target.value
      const selectVersion = document.querySelector('.search-form__version select')
      if (value > 0) {
        selectVersion.removeAttribute('disabled')
        this.setState({
          valueModel: value
        })
        fetch(`http://localhost:3004/version?ModelID=${value}`)
        .then(response => response.json())
        .then((data) => {
          this.setState({version: data})
        })
      } else {
        selectVersion.setAttribute('disabled', 'true')
      }
    }
    this.handleVersion = (e) => {
      const value = e.target.value
      if (value > 0) {
        this.setState({
          valueVersion: value
        })
      }
    }
    this.handleClean = (e) => {
      e.preventDefault()
      const selectModel = document.querySelector('.search-form__model select')
      const selectVersion = document.querySelector('.search-form__version select')
      this.setState({
        valueModel: 'option1',
        valueVersion: 'option1',
        valueBrand: 'option1'
      })
      selectModel.setAttribute('disabled', 'true')
      selectVersion.setAttribute('disabled', 'true')
    }
    this.handleWhere = (e) => {
      this.setState({
        valueWhere: e.target.value
      })
    }
  }

  componentDidMount () {
    fetch('http://localhost:3004/make')
    .then(response => response.json())
    .then((data) => {
      this.setState({make: data})
    })
  }

  render () {
    return (
      <div className='content'>
          <Header />
        <section className='search'>
          <NavSearch
            addClassCar={this.state.addClassCar}
            addClassBike={this.state.addClassBike}
            type={this.state.type}
            handleClick={this.handleClick}
          />
          <form>
            <div className='search-form'>
              <div className='row'>
                <Type />
              </div>
              <div className='row row-form'>
                <div className='search-form__left'>
                  <Where value={this.state.valueWhere} handleWhere={this.handleWhere} />
                  <div className='search-form__yearPrice'>
                    <SelectYear />
                    <SelectPrice />
                  </div>
                </div>
                <div className='search-form__right'>
                  <div className='row-form-right'>
                    <SelectBrand state={this.state.make} value={this.state.valueBrand} handleBrand={this.handleBrand} />
                    <SelectModel state={this.state.model} value={this.state.valueModel} handleModel={this.handleModel} />
                  </div>
                  <div className='row-form-right'>
                    <SelectVersion state={this.state.version} value={this.state.valueVersion} handleVersion={this.handleVersion} />
                  </div>
                </div>
              </div>
            </div>
            <div className='search-footer'>
              <LinkSearch />
              <div className='search-footer__buttons'>
                <ButtonClean handleClean={this.handleClean} />
                <ButtonOffers />
              </div>
            </div>
          </form>
        </section>
      </div>
    )
  }
}

export default App
