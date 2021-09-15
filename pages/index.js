import CardProduct from '../src/components/CardProduct'
import { useProduct } from '../src/context/Product'
import { endpoint } from '../src/config'

export default function Home ({ data }) {
  const { products } = useProduct(data)

  return (
    <CardProduct {...products}/>
  )
}

export async function getServerSideProps () {
  const query = ''
  try {
    const data = await fetch(encodeURI(`${endpoint}${query}`))
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
        data
      }
    }
  } catch (err) {
    throw new Error(err)
  }
}
