import React from "react";
import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  font-family: "Syne";
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px; /* Если требуется */

  ${({ variant }) => {
    switch (variant) {
      case "Sign":
      case "Buy":
        return css`
          width: ${variant === "Sign" ? "163px" : "278px"};
          font-size: 24px;
          background-color: #d3eaff;
          color: #000000;
        `;
      case "GrayLike":
        return css`
          width: 53px;
          height: 53px;
          font-size: 16px;
          background-color: #ececec;
        `;
        case "Delete":
          return css`
            width: 53px;
            height: 53px;
            font-size: 16px;
            background-color: #ececec;
          `;
      case "PinkLike":
        return css`
          width: 53px;
          height: 53px;
          font-size: 16px;
          background-color: #dd377d;
          color: black;
        `;
      default:
        return null;
    }
  }}

  ${({ additionalStyles }) => additionalStyles && additionalStyles};
`;

const Button = ({ onClick, children, variant, additionalStyles, icon }) => {
  return (
    <ButtonStyled
      variant={variant}
      onClick={onClick}
      additionalStyles={additionalStyles}
    >
      {icon && <img src={icon} alt="Icon" />} 
      {children}
    </ButtonStyled>
  );
};

export default Button;
