import styled from '@emotion/styled'

const Container = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
  flex-direction: column;

  @media (max-width: 991px) {
    font-size: 24px;
  }
`
const Price = styled.p`
  font-size: 24px;
  margin-top: 10px;
  span{
    font-weight: 700;
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
`
const Text = styled.p`
  font-size: 18px;
  span{
    font-weight: 700;
  }
  @media (max-width: 700px) {
    font-size: 16px;
  }
`
const IMG = styled.img`
  display: block;
  width: 80px;
  @media (max-width: 700px) {
    width: 60px;
  }
`

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result
  return (
    <Container>
      <IMG src={`https://cryptocompare.com/${IMAGEURL}`} alt="logo crypto" />
      <div>
        <Price>El Precio es de: <span>{PRICE}</span></Price>
        <Text>Precio más alto del día: <span>{HIGHDAY}</span></Text>
        <Text>Precio más bajo del día: <span>{LOWDAY}</span></Text>
        <Text>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR} %</span></Text>
        <Text>Última actualización: <span>{LASTUPDATE}</span></Text>
      </div>
    </Container>
  )
}

export default Result