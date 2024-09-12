import { useState } from "react";
import { Trash } from "@phosphor-icons/react";

import { InputNumber } from "../InputNumber";
import { useCartContext } from "../../hooks/useCart";
import CartItemType from "../../@types/CartItemType";
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

interface CartItem {
  coffee: CartItemType;
}

export function CartItem({ coffee }: CartItem) {
  const [qty, setQuantity] = useState(coffee.quantity);
  const { handleRemoveItem } = useCartContext();

  return (
    <ContainerItem>
      <CoffeeImg src={`/coffee/${coffee.id}.png`} />

      <ContainerColumn>
        <InlineInfo>
          <ItemInfo>{coffee.title}</ItemInfo>
          <ItemInfo><span>R$ {coffee.price?.toFixed(2)}</span></ItemInfo>
        </InlineInfo>

        <ContainerButtons>
          <InputNumber qty={qty} setQty={setQuantity} />
          <ButtonRemove onClick={() => handleRemoveItem(coffee.id)}>
            <Trash size={16} color={theme.colors.product.purple} />
            REMOVER
          </ButtonRemove>
        </ContainerButtons>
      </ContainerColumn>

    </ContainerItem>
  )
}
