import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  variant: string;
  additionalStyles?: any;
  icon?: string;
}

const ButtonStyled = styled.button<ButtonProps>`
  border: none;
  font-family: "Syne";
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px;

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

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  variant,
  additionalStyles,
  icon,
}) => {
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
