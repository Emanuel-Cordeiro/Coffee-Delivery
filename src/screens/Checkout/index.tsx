import { useLocation, useNavigate } from "react-router-dom";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";

import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { CartItem } from "../../components/CartItem";

import theme from "../../theme";

import {
  TotalInfo,
  PricesInfo,
  InlineInfo,
  InlineInput,
  TextPayment,
  ContainerUF,
  InlineButtons,
  CheckoutLabel,
  CheckoutTitle,
  ButtonPayment,
  ContainerMenor,
  InlineTotalInfo,
  CheckoutSubLabel,
  ContainerCidade,
  ContainerPayment,
  ContainerCoringa,
  ContainerDelivery,
  CheckoutContainer,
  CartItensContainer,
  ConfirmRequestButton,
  ContainerComplemento,
  ContainerFormDelivery,
} from "./styles";
import { useCartContext } from "../../hooks/useCart";
import { CartItemType } from "../../context/CartContextProvider";
import { useEffect, useRef } from "react";

export function Checkout() {
  const navigate = useNavigate();
  const page = useLocation();
  const { itens } = useCartContext();

  function handleConfirmOrder() {
    if (page.pathname !== '/checkout/success') {
      navigate('success')
    }
  }

  function calculateOrderValue(itens: CartItemType[]): number {
    return itens.reduce((acc, curr) => {
      return acc + (curr.price * curr.quantity);
    }, 0);
  }

  const total = useRef(0);

  useEffect(() => {
    total.current = calculateOrderValue(itens)
  }, [itens])

  return (
    <>
      <Navbar />
      <CheckoutContainer>
        <ContainerDelivery>
          <CheckoutTitle>Complete seu pedido</CheckoutTitle>
          <ContainerFormDelivery>
            <InlineInfo>
              <MapPinLine size={22} color={theme.colors.product.yellow_dark} />
              <div>
                <CheckoutLabel>Endereço de Entrega</CheckoutLabel>
                <CheckoutSubLabel>Informe o endereço onde deseja receber seu pedido</CheckoutSubLabel>
              </div>
            </InlineInfo>

            <ContainerMenor>
              <Input placeholder="CEP" />
            </ContainerMenor>

            <ContainerCoringa>
              <Input placeholder="Rua" />
            </ContainerCoringa>

            <InlineInput>
              <ContainerMenor>
                <Input placeholder="Número" />
              </ContainerMenor>

              <ContainerComplemento>
                <Input placeholder="Complemento" />
              </ContainerComplemento>
            </InlineInput>

            <InlineInput>
              <ContainerMenor>
                <Input placeholder="Bairro" />
              </ContainerMenor>

              <ContainerCidade>
                <Input placeholder="Cidade" />
              </ContainerCidade>

              <ContainerUF>
                <Input placeholder="UF" />
              </ContainerUF>
            </InlineInput>
          </ContainerFormDelivery>

          <ContainerPayment>
            <InlineInfo>
              <CurrencyDollar size={22} color={theme.colors.product.purple} />
              <div>
                <CheckoutLabel>Pagamento</CheckoutLabel>
                <CheckoutSubLabel>O pagamento é feito na entrega. Escolha a forma que deseja pagar</CheckoutSubLabel>
              </div>
            </InlineInfo>

            <InlineButtons>
              <ButtonPayment>
                <CreditCard size={16} color={theme.colors.product.purple} />
                <TextPayment>CARTÃO DE CRÉDITO</TextPayment>
              </ButtonPayment>

              <ButtonPayment>
                <Bank size={16} color={theme.colors.product.purple} />
                <TextPayment>CARTÃO DE DÉBITO</TextPayment>
              </ButtonPayment>

              <ButtonPayment>
                <Money size={16} color={theme.colors.product.purple} />
                <TextPayment>DINHEIRO</TextPayment>
              </ButtonPayment>
            </InlineButtons>

          </ContainerPayment>
        </ContainerDelivery>

        <ContainerDelivery>
          <CheckoutTitle>Cafés selecionados</CheckoutTitle>

          <CartItensContainer>

            {itens.map(item => (
              <CartItem coffee={item} />
            ))}

            <InlineTotalInfo>
              <PricesInfo>Total de itens</PricesInfo>
              <PricesInfo>R$ {total.current.toFixed(2)}</PricesInfo>
            </InlineTotalInfo>

            <InlineTotalInfo>
              <PricesInfo>Entrega</PricesInfo>
              <PricesInfo>R$ 5,00</PricesInfo>
            </InlineTotalInfo>

            <InlineTotalInfo>
              <TotalInfo>Total</TotalInfo>
              <TotalInfo>R$ {(total.current + 5).toFixed(2)}</TotalInfo>
            </InlineTotalInfo>

            <ConfirmRequestButton onClick={handleConfirmOrder}>
              CONFIRMAR PEDIDO
            </ConfirmRequestButton>
          </CartItensContainer>
        </ContainerDelivery>
      </CheckoutContainer>
    </>
  )
}