import { Trash } from "@phosphor-icons/react";
import { InputNumber } from "../InputNumber";

import theme from "../../theme";

import {
  ItemInfo,
  CoffeeImg,
  InlineInfo,
  ButtonRemove,
  ContainerItem,
  ContainerColumn,
  ContainerButtons,
} from "./styles";

export function CartItem() {
  return (
    <ContainerItem>
      <CoffeeImg src="/coffee/1.png" />

      <ContainerColumn>
        <InlineInfo>
          <ItemInfo>Expresso Tradicional</ItemInfo>
          <ItemInfo>R$ 9,90</ItemInfo>
        </InlineInfo>

        <ContainerButtons>
          <InputNumber />
          <ButtonRemove>
            <Trash size={16} color={theme.colors.product.purple} />
            REMOVER
          </ButtonRemove>
        </ContainerButtons>
      </ContainerColumn>

    </ContainerItem>
  )
}
