import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'

const CardProduct = ({ results }) =>
  <Wrapper>
    {results && results.slice(0, 4).map((results, index) => (
      <Link key={index} href={`/detail/?id=${results.id}`} as={`/detail/${results.id}`}>
        <Card>
          <img src={results.thumbnail} alt={results.title} />
          <div>
            <p>$ {results.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
            <p>{results.title}</p>
          </div>
          <p>{results.address.city_name}</p>
        </Card>
      </Link>
    ))}
  </Wrapper>

CardProduct.propTypes = {
  results: PropTypes.array
}

const Wrapper = styled.div`
  width: 900px;
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
`
const Card = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  background: #fff;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
    img {
      width: 180px;
      height: 180px;
      border-radius: 4px;
    }
`
export default CardProduct
