import { MapPin, Money, Timer } from "@phosphor-icons/react";

import theme from "../../theme";

import DeliveryImg from '../../assets/DeliveryGuy.svg'
import { Navbar } from "../../components/Navbar";

import {
  ItemText,
  Container,
  TitleOrder,
  ColumnInfo,
  IconItemText,
  SubtitleOrder,
  DeliveryImage,
  ContainerItem,
  ContainerOrderInfo,
} from "./styles";
import { useCartContext } from "../../hooks/useCart";

export function Success() {
  const { order } = useCartContext();

  let paymentMethod = '';

  switch (order.paymentMethod) {
    case 'credit':
      paymentMethod = 'Cartão de crédito'
      break
    case 'debit':
      paymentMethod = 'Cartão de débito'
      break
    case 'cash':
      paymentMethod = 'Dinheiro'
      break
    default:
      paymentMethod = ''
  }

  return (
    <>
      <Navbar />
      <Container>
        <div>
          <TitleOrder>Uhu! Pedido Confirmado</TitleOrder>

          <SubtitleOrder>Agora é só aguardar que logo o café chegará até você</SubtitleOrder>
          <ContainerOrderInfo>
            <ContainerItem>
              <IconItemText background={theme.colors.product.purple}>
                <MapPin weight="fill" color={theme.colors.base.white} />
              </IconItemText>
              <ItemText>
                Entrega em <span>{order.street}, {order.number}</span> {order.district} - {order.city}, {order.state}
              </ItemText>
            </ContainerItem>

            <ContainerItem>
              <IconItemText background={theme.colors.product.yellow}>
                <Timer weight="fill" color={theme.colors.base.white} />
              </IconItemText>
              <ColumnInfo>
                <ItemText>
                  Previsão de entrega
                </ItemText>
                <ItemText>
                  <span>20 min - 30 min</span>
                </ItemText>
              </ColumnInfo>
            </ContainerItem>

            <ContainerItem>
              <IconItemText background={theme.colors.product.yellow_dark}>
                <Money weight="fill" color={theme.colors.base.white} />
              </IconItemText>
              <ColumnInfo>
                <ItemText>
                  Pagamento na entrega
                </ItemText>
                <ItemText>
                  <span>{paymentMethod}</span>
                </ItemText>
              </ColumnInfo>
            </ContainerItem>

          </ContainerOrderInfo>
        </div>
        <DeliveryImage src={DeliveryImg} />
      </Container>
    </>
  )
}