import React, { createContext, useState, useContext } from 'react'
import { endpoint } from '../config'

const ProductContext = createContext()

export default function ProductProvider ({ children }) {
  const [products, setProducts] = useState({})
  const [search, setSearch] = useState('')

  const handleOnSubmitSearch = async (e) => {
    e.preventDefault()
    const response = await fetch(encodeURI(`${endpoint}${search}`))
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const newProducts = await response.json()
    setProducts(newProducts)
  }

  return (
    <ProductContext.Provider
      value={{ products, setProducts, search, setSearch, handleOnSubmitSearch }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProduct () {
  const context = useContext(ProductContext)
  const { products, setProducts, search, setSearch, handleOnSubmitSearch } = context
  return { products, setProducts, search, setSearch, handleOnSubmitSearch }
}
