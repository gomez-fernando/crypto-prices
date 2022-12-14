import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: #FFF;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`

const useSelectCurrencies = (label, currencies) => {
  const [state, setState] = useState('')

  const SelectCurrencies = () =>
  (
    <>
      <Label htmlFor="">{label}</Label>
      <Select
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value="">Seleccione</option>

        {currencies.map(currency => (
          <option
            key={currency.id}
            value={currency.id}
          >{currency.name}</option>
        ))

        }
      </Select>
    </>
  )

  return [state, SelectCurrencies]
}

export default useSelectCurrencies