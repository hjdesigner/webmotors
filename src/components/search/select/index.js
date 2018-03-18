import React from 'react'
import { Option, Select } from 'muicss/react'

const SelectDefault = ({ state, value, handleBrand, title, divClass, status }) => (
  <div className={`search-form__${divClass}`}>
    <Select name='input' label={title} value={value} disabled={status} onChange={handleBrand}>
      <Option value='0' label='Todas' />
      {state.map(data =>
        <Option key={data.ID} value={data.ID} label={data.Name} />
      )}
    </Select>
  </div>
)

export default SelectDefault
