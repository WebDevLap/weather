import styled from "styled-components";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";

export const CardEl = styled.div``;
export const CardContainer = styled.div`
  max-width: ${UI_Funcs.pxToRem(320)};
  width: 100%;
  border-radius: ${UI_Funcs.pxToEm(20)};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: ${UI_Funcs.pxToRem(450)};
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.textColor};
`;
export const CardImg = styled.img`
  max-width: ${UI_Funcs.pxToRem(270)};
  max-height: ${UI_Funcs.pxToRem(270)};
  height: 100%;
  object-fit: cover;
  margin-bottom: ${UI_Funcs.pxToEm(10)};
  border-radius: ${UI_Funcs.pxToEm(20)};
  align-self: center;
`;
export const CardTitle = styled.h2`
  margin-bottom: ${UI_Funcs.pxToEm(30, 18)};
  text-align: center;
  font-size: ${UI_Funcs.pxToRem(18)};
  color: ${({ theme }) => theme.colors.textColor};
`;

export const CardPrice = styled.div`
  font-size: ${UI_Funcs.pxToRem(22)};
  font-weight: 600;
  flex: 1 1 auto;
  margin-bottom: ${UI_Funcs.pxToEm(10)};
  color: ${({ theme }) => theme.colors.textColor};

  span {
    text-decoration: line-through;
    color: ${({ theme }) => theme.colors.grey};
    margin-left: ${UI_Funcs.pxToEm(8)};
  }
  p {
    display: inline;
    color: ${({ theme }) => theme.colors.textColor};
  }
  b {
    border: 2px solid ${({ theme }) => theme.colors.orange};
    padding: ${UI_Funcs.pxToEm(2)};
    color: ${({ theme }) => theme.colors.textColor};
    display: inline-block;
    border-radius: ${UI_Funcs.pxToEm(5)};
  }
`;

export const CardCounter = styled.div`
  display: flex;
  padding: ${UI_Funcs.pxToEm(5)};
  border-radius: ${UI_Funcs.pxToEm(10)};
  justify-content: center;
`;
export const CardCounterIncrement = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.textColor};
  border-radius: ${UI_Funcs.pxToEm(8)};
  width: ${UI_Funcs.pxToRem(35)};
  height: ${UI_Funcs.pxToRem(35)};
  position: relative;
  cursor: pointer;

  &::before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: ${UI_Funcs.pxToEm(5)};
    top: 50%;
    width: 40%;
    transform: translate(-50%, -50%);
    height: ${UI_Funcs.pxToRem(2)};
    left: 50%;
    background-color: ${({ theme }) => theme.colors.textColor};
  }
  &:before {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  &:after {
  }
`;
export const CardCounterCount = styled.div`
  width: ${UI_Funcs.pxToRem(45)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  margin: 0 ${UI_Funcs.pxToEm(5, 30)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${UI_Funcs.pxToRem(30)};
  color: ${({ theme }) => theme.colors.textColor};
`;
export const CardCounterDecrement = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.textColor};
  border-radius: ${UI_Funcs.pxToEm(8)};
  width: ${UI_Funcs.pxToRem(35)};
  height: ${UI_Funcs.pxToRem(35)};
  position: relative;
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: ${UI_Funcs.pxToEm(5)};
    top: 50%;
    width: 40%;
    transform: translate(-50%, -50%);
    height: ${UI_Funcs.pxToRem(2)};
    left: 50%;
    background-color: ${({ theme }) => theme.colors.textColor};
  }
`;

export const CardAddToCard = styled.div`
  padding: 0.625em 1.25em;
  font-size: 1.25em;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 0.625em;
  align-self: center;
  cursor: pointer;
`;
