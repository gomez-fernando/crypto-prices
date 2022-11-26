import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
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

const Form = ({setCurrencies}) => {
  const [cryptos, setCryptos] = useState([])
  const [error, setError] = useState(false)

  const [currency, SelectCurrencies] = useSelectCurrencies('Elige tu Moneda', currencies)
  const [cryptoCurrency, SelectCryptoCurrencies] = useSelectCurrencies('Elige tu Criptomoneda', cryptos)

  useEffect(() => {
    const API = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const response = await fetch(url);
      const result = await response.json();

      const cryptos = result.Data.map(elem => {
        const obj = {
          id: elem.CoinInfo.Name,
          name: elem.CoinInfo.FullName
        }
        return obj;
      })
      setCryptos(cryptos)
    }
    API();
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    if ([currency, cryptoCurrency].includes('')) {
      setError(true)
      return
    }

    setError(false)
    setCurrencies({currency, cryptoCurrency})
  }

  return (
    <>
      {!!error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCurrencies />
        <SelectCryptoCurrencies />

        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  )
}

export default Form