import React from 'react'
import { Option, Select } from 'muicss/react'

const SelectModel = ({ state, value, handleModel }) => (
  <div className='search-form__model'>
    <Select name='input' label='Modelo:' defaultValue='option1' disabled value={value} onChange={handleModel}>
      <Option value='0' label='Todas' />
      {state.map(data =>
        <Option key={data.ID} value={data.ID} label={data.Name} />
      )}
    </Select>
  </div>
)

export default SelectModel
