import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { useProduct } from '../../context/Product'

const Header = ({ setSearch }) => {
  const { handleOnSubmitSearch } = useProduct('')

  return (
    <HeaderWrapper>
      <Image src='/logo.png' alt='logo' width={50} height={30} />
      <form className='search' onSubmit={handleOnSubmitSearch}>
        <input name='query' type='search' onChange={(e) => setSearch(e.target.value)} />
        <button>
          <Image src='/search.png' alt='search' width={15} height={15} />
        </button>
      </form>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  results: PropTypes.object
}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  padding-top: 10px;
  box-sizing: border-box;
  form {
    height: 30px;
  }
  input {
    width: 800px;
    height: 30px;
    border: transparent;
    background-color: #fff;
  }
   button {
    background: #eee;
    height: 30px;
    width: 46px;
    border: none;
    border-radius: 0 4px 4px 4px;
    cursor: pointer;
   }
`

export default Header
