import React from 'react'
import styled from '@emotion/styled'
import useSelectCurrencies from '../hooks/useSelectCurrencies'
import { currencies } from '../data/currencies'

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFFFFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 30px;
  transition: background-color .3s ease;

  &:hover{
    background-color: #7A7DFE;
    cursor: pointer;
  }
`

const Form = () => {
  

  const [SelectCurrencies] = useSelectCurrencies('Elige tu Moneda', currencies)
  // const [SelectCryptoCurrencies] = useSelectCurrencies('Elige tu Criptomoneda')

  return (
    <form>
      <SelectCurrencies/>
      {/* <SelectCryptoCurrencies/> */}
      
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  )
}

export default Form