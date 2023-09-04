import { styled } from "styled-components";

export const BotaoCompra = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background-color: ${(props) => props.bgcor};
  color: red;
  font-size: ${(props) => props.font};

  &:hover {
    cursor: pointer;
    background-color: #83794e;
  }

  &:active {
    color: blue;
  }
`;

export const Selecao = styled.select`
  width: 160px;
  height: 35px;
  border-radius: 4px;
  text-align: center;
  outline: none;
  border: 1px solid blue;
  background-color: transparent;

  option {
    border-radius: 4px;
  }
`;


