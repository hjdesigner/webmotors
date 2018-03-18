import React from 'react'
import { Option, Select } from 'muicss/react'

const SelectVersion = ({ state, value, handleVersion }) => (
  <div className='search-form__version'>
    <Select name='input' label='Versão:' value={value} onChange={handleVersion} defaultValue='option1' disabled>
      <Option value='0' label='Todas' />
      {state.map(data =>
        <Option key={data.ID} value={data.ID} label={data.Name} />
      )}
    </Select>
  </div>
)

export default SelectVersion
