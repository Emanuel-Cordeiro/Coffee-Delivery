import styled from "styled-components";

export const InlineInfo = styled.div`
  display: flex;
  flex-direction: row;
`

export const CoffeContainer = styled.div`
  width: 16rem;
  height: 20rem;
  margin: 0 3.2vw 2.5rem 0;
  border-radius: 0.375rem 2.25rem;
  background-color: ${({ theme }) => theme.colors.base.card};
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const CoffeeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  position: relative;
  top: -1.25rem;
  user-select: none;
`

export const CoffeeCategory = styled.h6`
  font-family: ${({ theme }) => theme.font_family.baloo};
  font-size: ${({ theme }) => theme.font_size.tag};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.product.yellow_dark};
  background-color: ${({ theme }) => theme.colors.product.yellow_light};
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  margin-left: 0.5rem;
`

export const CoffeeTitle = styled.h3`
  font-weight: bold;
  font-family: ${({ theme }) => theme.font_family.baloo};
  font-size: ${({ theme }) => theme.font_size.title_s};
  color: ${({ theme }) => theme.colors.base.subtitle};
  margin: 1rem 0 0.5rem;
`

export const DescriptionPriceComponent = styled.p`
  font-family: ${({ theme }) => theme.font_family.roboto};
  font-size: ${({ theme }) => theme.font_size.text_s};
  color: ${({ theme }) => theme.colors.base.label};
`

export const CoffeeDescription = styled(DescriptionPriceComponent)`
  text-align: center;
  margin: 0.5rem 1.125rem;
`

export const InlineInfoCoffee = styled(InlineInfo)`
  margin-top: 1rem;
`

export const CoffeePriceTag = styled(DescriptionPriceComponent)`
  margin: 0.5rem 0.125rem;
  display: flex;
  align-items: center;
`

export const CoffeePrice = styled.p`
  font-weight: bold;
  font-family: ${({ theme }) => theme.font_family.baloo};
  font-size: ${({ theme }) => theme.font_size.title_s};
  color: ${({ theme }) => theme.colors.base.text};
  margin: 0.5rem 0;
`

export const CartIcon = styled.button`
  height: 2.375rem;
  width: 2.375rem;
  border-radius: 6px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.product.purple_dark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.product.purple};
    transition: 0.5s;
    cursor: pointer;
  }
`