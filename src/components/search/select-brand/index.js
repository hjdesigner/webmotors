import React from 'react'
import Option from 'muicss/lib/react/option'
import Select from 'muicss/lib/react/select'

const SelectBrand = ({ state, value, handleBrand }) => (
  <div className='search-form__brand'>
    <Select name='input' label='Marca:' value={value} onChange={handleBrand}>
      <Option value='0' label='Todas' />
      {state.map(data =>
        <Option key={data.ID} value={data.ID} label={data.Name} />
      )}
    </Select>
  </div>
)

export default SelectBrand
