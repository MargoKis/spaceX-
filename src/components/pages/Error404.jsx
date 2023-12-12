import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonStyled from "../atoms/Button";

const ErrorWrap = styled.div`
  position: fixed;
  top: 40%;
  left: 48%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Error = styled.div`
  font-weight: 400;
  color: gray;
  font-size: 28px;
  margin-bottom: 30px;
`;

const Error404 = () => {
  return (
    <>
      <ErrorWrap>
        <Error>
          Opps, this page doesn't exist, but you can return on home page
        </Error>
        <Link to="/">
          <ButtonStyled variant="Buy">Return home</ButtonStyled>
        </Link>
      </ErrorWrap>
    </>
  );
};

export default Error404;
