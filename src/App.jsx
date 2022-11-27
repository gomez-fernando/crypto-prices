import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Form from "./components/Form"
import Result from './components/Result'
import BackImg from './assets/img/backg-img.png'
import Spinner from './components/Spinner/Spinner'

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  @media(min-width: 992px){
    margin: 50px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
  }
`
const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
  @media (max-width: 700px) {
    font-size: 28px;
  }
`
const Image = styled.img`
  max-width: 400px;
  width: 40%;
  margin: 100px auto 0 auto;
  display: block;
  font-size: 34px;
  margin: 0 auto;

  @media(min-width: 992px){
    margin: 50px auto 50px auto;
    width: 80%;
  }
`

function App() {
  const [currencies, setCurrencies] = useState({})
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (Object.keys(currencies).length > 0) {
      const { currency, cryptoCurrency } = currencies

      const priceCrypto = async () => {
        setLoading(true)
        setResult({})
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`

        const response = await fetch(url)
        const result = await response.json()
        setResult(result.DISPLAY[cryptoCurrency][currency])
        setLoading(false)
      }
      priceCrypto()
    }
  }, [currencies])

  return (
    <Container>
      <Image src={BackImg} alt='logos de criptomonedas' />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Form
          setCurrencies={setCurrencies}
        />

        {!!loading ?
          <Spinner />
          : result.PRICE &&
          <Result result={result} />
        }

      </div>
    </Container>
  )
}

export default App
