import { useState } from 'react'
import styled from '@emotion/styled'
import Form from "./components/Form"
import BackImg from './assets/img/backg-img.png'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px){
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
`
const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
  font-size: 34px;

  @media(max-width: 992px){
    margin: 50px auto 50px auto;
  }
`

function App() {

  return (
    <Container>
      <Image src={BackImg} alt='logos de criptomonedas' />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Form/>
      </div>
    </Container>
  )
}

export default App
