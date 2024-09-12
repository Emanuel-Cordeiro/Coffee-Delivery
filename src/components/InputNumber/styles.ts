import styled from "styled-components";

export const NumberContainer = styled.div`
  width: 4.750rem;
  height: 2.375rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.base.button};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 0.5rem 0 1.5rem;
  user-select: none;
`

export const NumberButton = styled.div`
  width: 0.875rem;
  height: 0.875rem;
  color: ${({ theme }) => theme.colors.product.purple_dark};

  &:hover {
    color: ${({ theme }) => theme.colors.product.purple};
    cursor: pointer;
  }
`

export const NumberInput = styled.input`
  background: transparent;
  border: none;
  width: 1.5rem;
  font-size: ${({ theme }) => theme.font_size.text_m};
  font-family: ${({ theme }) => theme.font_family.roboto};
  text-align: center;
  outline: none;
`