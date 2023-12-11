import styled, {css} from "styled-components";
import {ShopEnum} from "./enums";

export const Button = styled.div<{ $light?: boolean; $dark?: boolean; $productType?: ShopEnum, $buttonTitle?: string }>`
  ${(props) => {
    if (props.$productType === props.$buttonTitle && props.$buttonTitle) {
        props.$dark = true;
        return '';
    }
  }}
  
  padding: 12px 24px;
  background-color: ${props => props.$dark ? '#333' : "#e0edf4"};
  color: ${props => props.$dark ? '#fff' : "#333"};
  cursor: pointer;
  transition: all 350ms ease, -webkit-transform 350ms ease;
  
  &:hover {
    transform: translate(0px, -4px);
  }
`

export const Input = styled.input<{ $border?: boolean; $maxWidth?: string }>`
  max-width: ${props => props.$maxWidth ? props.$maxWidth : '500px'};
  padding: 12px 24px;
  background-color: #fff;
  border: none;
  outline: none;
  width: 100%;
  border: ${props => props.$border ? "1px solid #333" : "none"}
`

export const LineDiver = styled.div`
  width: 100%;
  height: 1px;
  border-style: solid;
  border-width: 0px;
  border-color: #333;
  background-color: #333;
`

export const ProductList = styled.div`
  display: grid;
  justify-items: stretch;
  -ms-flex-align: start;
  align-items: start;
  grid-auto-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;    
`