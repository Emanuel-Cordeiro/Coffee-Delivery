import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import * as zod from 'zod';

import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { CartItem } from "../../components/CartItem";

import { useCartContext } from "../../hooks/useCart";

import OrderType from "../../@types/OrderType";
import CartItemType from "../../@types/CartItemType";

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

const zodSchema = zod.object({
  cep: zod.string().regex(/^\d{5}-\d{3}$/),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string().optional(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string().length(2),
  paymentMethod: zod.enum(['credit', 'debit', 'cash']),
  cartItens: zod.array(zod.object({
    id: zod.string(),
    title: zod.string(),
    price: zod.number(),
    quantity: zod.number(),
  })),
});


export function Checkout() {
  const page = useLocation();
  const navigate = useNavigate();
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
  }, [itens]);

  const { control, handleSubmit } = useForm<OrderType>({
    resolver: zodResolver(zodSchema)
  });

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit(handleConfirmOrder)}>
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
                <Controller
                  name='cep'
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Input
                      value={value}
                      onChangeText={onChange}
                      placeholder="CEP"
                    />
                  )}
                />
              </ContainerMenor>

              <ContainerCoringa>
                <Controller
                  name='street'
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Input
                      value={value}
                      onChangeText={onChange}
                      placeholder="Rua"
                    />
                  )}
                />
              </ContainerCoringa>

              <InlineInput>
                <ContainerMenor>
                  <Controller
                    name='number'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Input
                        value={value}
                        onChangeText={onChange}
                        placeholder="Número"
                      />
                    )}
                  />
                </ContainerMenor>

                <ContainerComplemento>
                  <Controller
                    name='complement'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Input
                        value={value}
                        onChangeText={onChange}
                        placeholder="Complemento"
                      />
                    )}
                  />
                </ContainerComplemento>
              </InlineInput>

              <InlineInput>
                <ContainerMenor>
                  <Controller
                    name='district'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Input
                        value={value}
                        onChangeText={onChange}
                        placeholder="Bairro"
                      />
                    )}
                  />
                </ContainerMenor>

                <ContainerCidade>
                  <Controller
                    name='city'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Input
                        value={value}
                        onChangeText={onChange}
                        placeholder="Cidade"
                      />
                    )}
                  />
                </ContainerCidade>

                <ContainerUF>
                  <Controller
                    name='state'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Input
                        value={value}
                        onChangeText={onChange}
                        placeholder="UF"
                      />
                    )}
                  />
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
                <CartItem key={item.id} coffee={item} />
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

              <ConfirmRequestButton type="submit">
                CONFIRMAR PEDIDO
              </ConfirmRequestButton>
            </CartItensContainer>
          </ContainerDelivery>
        </CheckoutContainer>
      </form>
    </>
  )
}