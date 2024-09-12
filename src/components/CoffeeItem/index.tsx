import { useState } from "react";
import { ShoppingCart } from "@phosphor-icons/react";

import { InputNumber } from "../InputNumber";
import { useCartContext } from "../../hooks/useCart";

import theme from "../../theme";

import {
  CartIcon,
  InlineInfo,
  CoffeeImage,
  CoffeePrice,
  CoffeeTitle,
  CoffeContainer,
  CoffeeCategory,
  CoffeePriceTag,
  InlineInfoCoffee,
  CoffeeDescription,
} from "./styles";

interface CoffeeType {
  id: number;
  category: Array<string>;
  title: string;
  description: string;
  price: number;
}

export interface CoffeeDataType {
  coffee: CoffeeType;
}

export function CoffeeItem({ coffee }: CoffeeDataType) {
  const { handleAddItemToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  function addItem(coffee: CoffeeType) {
    const newItem = { id: coffee.id, title: coffee.title, quantity: quantity, price: coffee.price };

    handleAddItemToCart(newItem);
  }

  return (
    <CoffeContainer>
      <CoffeeImage src={`/coffee/${coffee.id}.png`} />

      <InlineInfo>
        {coffee.category.map((category) => (
          <CoffeeCategory key={category}>{category}</CoffeeCategory>
        ))}
      </InlineInfo>

      <CoffeeTitle>{coffee.title}</CoffeeTitle>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <InlineInfoCoffee>
        <CoffeePriceTag>R$</CoffeePriceTag>
        <CoffeePrice>{coffee.price.toFixed(2)}</CoffeePrice>

        <InputNumber setQty={setQuantity} qty={quantity} />

        <CartIcon onClick={() => addItem(coffee)}>
          <ShoppingCart size={20} weight="fill" color={theme.colors.base.white} />
        </CartIcon>
      </InlineInfoCoffee>
    </CoffeContainer>
  );
}
