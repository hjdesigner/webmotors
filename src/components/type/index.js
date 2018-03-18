import React from 'react'

const Type = () => (
  <div>
    <div className='search-checkbox'>
      <input type='checkbox' name='typeAd' id='typeAdNew' />
      <label htmlFor='typeAdNew'>Novos</label>
    </div>
    <div className='search-checkbox'>
      <input type='checkbox' name='typeAd' id='typeAdUsed' />
      <label htmlFor='typeAdUsed'>Usados</label>
    </div>
  </div>
)

export default Type
