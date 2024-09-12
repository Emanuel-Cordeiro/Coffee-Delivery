import styled from "styled-components";

export const CartButton = styled.button`
  height: 2.375rem;
  width: 2.375rem;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.colors.product.yellow_light};
  margin-left: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.product.yellow_dark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.product.yellow};
    color: ${({ theme }) => theme.colors.product.yellow_light};
    transition: 0.5s;
    cursor: pointer;
  }
`

export const CartQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.25rem;
  width: 1.25rem;
  position: relative;
  top: -6px;
  left: -11px;
  border-radius: 1.25rem;
  color: ${({ theme }) => theme.colors.base.white};
  font-family: ${({ theme }) => theme.font_family.baloo};
  font-size: ${({ theme }) => theme.font_size.text_s};
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.product.yellow_dark};
`