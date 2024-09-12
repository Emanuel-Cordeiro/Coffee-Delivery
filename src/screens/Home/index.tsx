import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import { Navbar } from "../../components/Navbar";
import { CoffeeList } from "../../components/CoffeeList";

import CoffeeHome from '../../assets/CoffeeHome.svg';

import theme from "../../theme";

import {
  ItemText,
  HomeTitle,
  HomeSubTitle,
  IconItemText,
  HomeContainer,
  CoffeeHomeImage,
  ContainerItemText,
} from "./styles";

export function Home() {

  return (
    <>
      <Navbar />
      <HomeContainer>
        <div>
          <HomeTitle>Encontre o café perfeito para qualquer hora do dia</HomeTitle>
          <HomeSubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</HomeSubTitle>

          <ContainerItemText>
            <ItemText>
              <IconItemText background={theme.colors.product.yellow_dark}>
                <ShoppingCart weight="fill" color={theme.colors.base.white} />
              </IconItemText>
              Compra simples e segura
            </ItemText>

            <ItemText>
              <IconItemText background={theme.colors.base.text}>
                <Package weight="fill" color={theme.colors.base.white} />
              </IconItemText>
              Embalagem mantém o café intacto
            </ItemText>

            <ItemText>
              <IconItemText background={theme.colors.product.yellow}>
                <Timer weight="fill" color={theme.colors.base.white} />
              </IconItemText>
              Entrega rápida e rastreada
            </ItemText>

            <ItemText>
              <IconItemText background={theme.colors.product.purple}>
                <Coffee weight="fill" color={theme.colors.base.white} />
              </IconItemText>
              O café chega fresquinho até você
            </ItemText>
          </ContainerItemText>
        </div>

        <CoffeeHomeImage src={CoffeeHome} />
      </HomeContainer >

      <CoffeeList />
    </>
  )
}