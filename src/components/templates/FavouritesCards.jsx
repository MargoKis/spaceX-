import React from 'react'
import styled from "styled-components";

const ClearAllWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 5%;
    margin-right: 8%;
`

const ClearAll = styled.div`
font-family: Lato;
font-size: 24px;
font-weight: 300;
text-align: center;
cursor: pointer;
`

const FavouritesCards = () => {
  return (
    <ClearAllWrap>
        <ClearAll>Clear All</ClearAll>
    </ClearAllWrap>

  )
}

export default FavouritesCards
