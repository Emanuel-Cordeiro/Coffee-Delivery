import { ShoppingCart } from "@phosphor-icons/react"
import { InputNumber } from "../InputNumber"

import theme from "../../theme"

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
} from "./styles"
import { useCartContext } from "../../hooks/useCart"

interface CoffeeType {
  id: number,
  category: Array<string>,
  title: string,
  description: string,
  price: number
}

interface CoffeeDataType {
  coffee: CoffeeType;
}

export function CoffeeItem({ coffee }: CoffeeDataType) {
  const { handleAddItemToCart } = useCartContext();

  function addItem(coffee: CoffeeType) {
    const newItem = { id: coffee.id, quantity: 1, price: coffee.price }
    handleAddItemToCart(newItem)
  }

  return (
    <CoffeContainer>
      <CoffeeImage src={`/coffee/${coffee.id}.png`} />

      <InlineInfo>
        {coffee.category.map(category => (
          <CoffeeCategory>{category}</CoffeeCategory>
        ))}
      </InlineInfo>

      <CoffeeTitle>{coffee.title}</CoffeeTitle>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <InlineInfoCoffee>
        <CoffeePriceTag>R$</CoffeePriceTag>
        <CoffeePrice>{coffee.price.toFixed(2)}</CoffeePrice>

        <InputNumber value={1} />

        <CartIcon onClick={() => addItem(coffee)}>
          <ShoppingCart size={20} weight="fill" color={theme.colors.base.white} />
        </CartIcon>
      </InlineInfoCoffee>

    </CoffeContainer>
  )
}