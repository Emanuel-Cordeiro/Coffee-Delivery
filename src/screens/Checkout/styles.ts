import styled, { css } from "styled-components";

export const InlineInfo = styled.div`
  display: flex;
  flex-direction: row;
`

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 42rem 29rem;
  padding: 2.5rem 12vw;
  justify-content: space-between;
`

export const CheckoutTitle = styled.h1`
  font-family: ${({ theme }) => theme.font_family.baloo};
  font-size: ${({ theme }) => theme.font_size.title_xs};
  color: ${({ theme }) => theme.colors.base.subtitle};
`

export const CheckoutLabel = styled.p`
  font-family: ${({ theme }) => theme.font_family.roboto};
  font-size: ${({ theme }) => theme.font_size.text_m};
  color: ${({ theme }) => theme.colors.base.subtitle};
  margin-left: 0.5rem;
`

export const CheckoutSubLabel = styled.p`
  margin: 0 0 2rem 0.5rem;
  font-family: ${({ theme }) => theme.font_family.roboto};
  font-size: ${({ theme }) => theme.font_size.text_s};
  color: ${({ theme }) => theme.colors.base.text};
`

export const ContainerDelivery = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerFormDelivery = styled.div`
  width: 40rem;
  border-radius: 6px;
  margin-top: 1rem;
  padding: 2.5rem 2.5rem 1.125rem;
  background-color: ${({ theme }) => theme.colors.base.card};
`

export const InlineInput = styled(InlineInfo)`
  justify-content: space-between;
  gap: 12px;
`

export const ContainerCoringa = styled.div`
  margin-bottom: 1rem;
`

export const ContainerMenor = styled(ContainerCoringa)`
  width: 12.5rem;
`

export const ContainerComplemento = styled(ContainerCoringa)`
  width: 27.5rem;
`

export const ContainerCidade = styled(ContainerCoringa)`
  width: 23rem;
`

export const ContainerUF = styled(ContainerCoringa)`
  width: 3.75rem;
`

// -----------

export const ContainerPayment = styled.div`
  width: 40rem;
  height: 8rem;
  border-radius: 6px;
  margin-top: 1rem;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors.base.card};
`

export const InlineButtons = styled(InlineInfo)`
  gap: 0.75rem;
`
interface ButtonPaymentType {
  isSelected: boolean;
}

export const ButtonPayment = styled.button<ButtonPaymentType>`
  line-height: 160%;
  width: 100%;
  height: 3.1875rem;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.base.button};

  &:hover{ 
    background-color: ${({ theme }) => theme.colors.base.hover};
    transition: 0.5s;
    cursor: pointer;
  }

  ${props => props.isSelected &&
    css`
    border: 1px solid ${({ theme }) => theme.colors.product.purple};
    background-color: ${({ theme }) => theme.colors.product.purple_light};
  `}
`

export const TextPayment = styled.p`
  font-family: ${({ theme }) => theme.font_family.roboto};
  font-size: ${({ theme }) => theme.font_size.button_s};
  color: ${({ theme }) => theme.colors.base.text};
  margin-left: 0.75rem;
`

// -----------

export const CartItensContainer = styled.div`
  width: 23rem;
  min-height: 10rem;
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  background-color: ${({ theme }) => theme.colors.base.card};
`

export const ConfirmRequestButton = styled.button`
  width: 100%;
  height: 2.825rem;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.colors.product.yellow};
  font-family: ${({ theme }) => theme.font_family.roboto};
  font-size: ${({ theme }) => theme.font_size.button_g};
  color: ${({ theme }) => theme.colors.base.white};
  font-weight: bold;
  line-height: 160%;

  &:hover{ 
    background-color: ${({ theme }) => theme.colors.product.yellow_dark};
    transition: 0.5s;
    cursor: pointer;
  }
`

export const InlineTotalInfo = styled(InlineInfo)`
  justify-content: space-between;
`

export const TotalInfo = styled.h1`
  font-family: ${({ theme }) => theme.font_family.roboto};
  font-size: ${({ theme }) => theme.font_size.text_l};
  color: ${({ theme }) => theme.colors.base.subtitle};
  font-weight: bold;
  margin-bottom: 1.5rem;
`

export const PricesInfo = styled.h1`
  font-family: ${({ theme }) => theme.font_family.roboto};
  font-size: ${({ theme }) => theme.font_size.text_s};
  color: ${({ theme }) => theme.colors.base.text};
  font-weight: 400;
  margin-bottom: 0.75rem;
`