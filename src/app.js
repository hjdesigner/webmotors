'use strict'

import React, { Component } from 'react'
import NavSearch from './components/nav-search'
import Option from 'muicss/lib/react/option'
import Select from 'muicss/lib/react/select'
import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      addClassCar: 'active',
      addClassBike: '',
      type: 'meu carro'
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
  }

  render () {
    return (
      <div className='content'>
        <header>
          <div className='logo'>
            <a href='/'><img src='https://cdn.webmotors.com.br/webmotors/Content/assets/img/logo-webmotors@2x.png?v=21103' alt='Webmotors' /></a>
          </div>
        </header>
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
                <div className='search-checkbox'>
                  <input type='checkbox' name='typeAd' id='typeAdNew' />
                  <label htmlFor='typeAdNew'>Novos</label>
                </div>
                <div className='search-checkbox'>
                  <input type='checkbox' name='typeAd' id='typeAdUsed' />
                  <label htmlFor='typeAdUsed'>Usados</label>
                </div>
              </div>
              <div className='row row-form'>
                <div className='search-form__left'>
                  <div className='search-form__where'>
                    <label>Onde:</label>
                    <input value='Brasil' />
                    <div className='search-form__lightning'>
                      <Select name='input' label='Raio:' defaultValue='option1'>
                        <Option value='1' label='Raio' />
                        <Option value='2' label='25' />
                        <Option value='3' label='50' />
                        <Option value='4' label='100' />
                        <Option value='5' label='150' />
                      </Select>
                    </div>
                  </div>
                  <div className='search-form__yearPrice'>
                    <div className='search-form__year'>
                      Ano Desejado
                    </div>
                    <div className='search-form__price'>
                      Faixa de Preço
                    </div>
                  </div>
                </div>
                <div className='search-form__right'>
                  <div className='row-form-right'>
                    <div className='search-form__brand'>
                      <Select name='input' label='Marca:' defaultValue='option1'>
                        <Option value='1' label='Todas' />
                        <Option value='2' label='Chevrolet' />
                        <Option value='3' label='Fiat' />
                        <Option value='4' label='Ford' />
                      </Select>
                    </div>
                    <div className='search-form__model'>
                      <Select name='input' label='Modelo:' defaultValue='option1' disabled>
                        <Option value='1' label='Todas' />
                        <Option value='2' label='320' />
                        <Option value='3' label='A20' />
                        <Option value='4' label='Covertte' />
                      </Select>
                    </div>
                  </div>
                  <div className='row-form-right'>
                    <div className='search-form__version'>
                      <Select name='input' label='Versão:' defaultValue='option1' disabled>
                        <Option value='1' label='Todas' />
                        <Option value='2' label='320' />
                        <Option value='3' label='A20' />
                        <Option value='4' label='Covertte' />
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='search-footer'>
              <a href='#'>Busca Avançada</a>
              <div className='search-footer__buttons'>
                <button className='search-footer__buttons--clear'>Limpar filtros</button>
                <button className='search-footer__buttons--send'>Ver Ofertas</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    )
  }
}

export default App
