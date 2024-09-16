import { useEffect, useState } from "react";
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
  cep:
    zod.string()
      .regex(/^\d{5}-\d{3}$/)
      .min(1)
      .max(9),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string().optional(),
  district: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().length(2).min(1),
  paymentMethod: zod.enum(['credit', 'debit', 'cash']),
  cartItens: zod.array(zod.object({
    id: zod.string(),
    title: zod.string(),
    price: zod.number(),
    quantity: zod.number(),
  })).min(1),
});


export function Checkout() {
  const page = useLocation();
  const navigate = useNavigate();
  const { itens } = useCartContext();
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const deliveryTax = itens.length > 0 ? 5 : 0;

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

  function handleClickPaymentMethod(paymentMethod: string) {
    setPaymentMethod(paymentMethod);
  }

  useEffect(() => {
    const calculatedTotal = calculateOrderValue(itens);
    setTotal(calculatedTotal);
  }, [itens]);
  const { control, handleSubmit, formState: { errors } } = useForm<OrderType>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      state: '',
      paymentMethod: 'credit',
      cartItens: [{}],
    }
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
                      error={errors.cep?.message}
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
                      error={errors.street?.message}
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
                        error={errors.number?.message}
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
                        error={errors.complement?.message}
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
                        error={errors.district?.message}
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
                        error={errors.city?.message}
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
                        error={errors.state?.message}
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
                <ButtonPayment
                  type="button"
                  isSelected={paymentMethod === 'credit'}
                  onClick={() => handleClickPaymentMethod('credit')}
                >
                  <CreditCard size={16} color={theme.colors.product.purple} />
                  <TextPayment>CARTÃO DE CRÉDITO</TextPayment>
                </ButtonPayment>

                <ButtonPayment
                  type="button"
                  isSelected={paymentMethod === 'debit'}
                  onClick={() => handleClickPaymentMethod('debit')}
                >
                  <Bank size={16} color={theme.colors.product.purple} />
                  <TextPayment>CARTÃO DE DÉBITO</TextPayment>
                </ButtonPayment>

                <ButtonPayment
                  type="button"
                  isSelected={paymentMethod === 'cash'}
                  onClick={() => handleClickPaymentMethod('cash')}
                >
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
                <PricesInfo>R$ {total.toFixed(2)}</PricesInfo>
              </InlineTotalInfo>

              <InlineTotalInfo>
                <PricesInfo>Entrega</PricesInfo>
                <PricesInfo>R$ {deliveryTax},00</PricesInfo>
              </InlineTotalInfo>

              <InlineTotalInfo>
                <TotalInfo>Total</TotalInfo>
                <TotalInfo>R$ {(total + deliveryTax).toFixed(2)}</TotalInfo>
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