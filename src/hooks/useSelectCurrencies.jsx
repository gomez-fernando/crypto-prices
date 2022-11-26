import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: #FFF;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`

const useSelectCurrencies = (label, currencies) => {
  const SelectCurrencies = () => 
  (
    <>
      <Label htmlFor="">{label}</Label>
      <Select name="" id="">
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

  return [SelectCurrencies]
}

export default useSelectCurrencies