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

export function Success() {
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span> Farrapos - Porto Alegre, RS
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
                  <span>Cartão de Crédito</span>
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