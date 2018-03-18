'use strict'
import React from 'react'
import Option from 'muicss/lib/react/option'
import Select from 'muicss/lib/react/select'

const Where = ({ value, handleWhere }) => (
  <div className='search-form__where'>
    <label>Onde:</label>
    <input value={value} onChange={handleWhere} />
    <div className='search-form__lightning'>
      <Select name='input' label='Raio:' defaultValue='option1'>
        <Option value='1' label='Raio' />
        <Option value='2' label='25km' />
        <Option value='3' label='50km' />
        <Option value='4' label='100km' />
        <Option value='5' label='150km' />
      </Select>
    </div>
  </div>
)

export default Where
