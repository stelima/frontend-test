import Header from '../components/Header'
import { useProduct } from '../context/Product'

export default function Layout ({ children }) {
  const { setSearch } = useProduct('')

  return (
    <>
      <Header setSearch={setSearch}/>
      <main>{children}</main>
    </>
  )
}
