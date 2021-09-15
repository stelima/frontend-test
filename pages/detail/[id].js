
import styled from 'styled-components'

const ENDPOINT = 'https://api.mercadolibre.com/items/'

const Detail = ({ data, description }) =>
  <Wrapper>
    <First>
      <img src={data.thumbnail} alt={data.title} />
      <h2>Descrição do Produto</h2>
      <p>{description.plain_text}</p>
    </First>
    <div>
      <p>{data.condition} - {data.sold_quantity} vendidos</p>
      <h2>{data.title}</h2>
      <p>${data.price}</p>
    </div>
  </Wrapper>

export async function getServerSideProps (context) {
  const { id } = context.query

  try {
    const data = await fetch(encodeURI(`${ENDPOINT}${id}`))
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json()
        } else {
          console.log('Falha ao pegar os dados da api')
        }
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)

    const description = await fetch(encodeURI(`${ENDPOINT}${id}/description`))
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json()
        } else {
          console.log('Falha ao pegar os dados da api')
        }
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)

    return {
      props: {
        data,
        description
      }
    }
  } catch (err) {
    throw new Error(err)
  }
}

const Wrapper = styled.div`
  display: flex;
  width: 70%;
  background: #fff;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`
const First = styled.div`
  flex: 1 0 75%;
  img {
    width: 150px;
  }
`
export default Detail
