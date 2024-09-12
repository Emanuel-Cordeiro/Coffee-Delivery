import { useState } from "react";
import { Minus, Plus } from "@phosphor-icons/react";
import { NumberButton, NumberContainer, NumberInput } from "./styles";

interface InputNumberProps {
  value: number;
}

export function InputNumber({ value }: InputNumberProps) {
  const [quantity, setQuantity] = useState(value);

  function handleQuantityChange(operation: string) {
    if (quantity === 0 && operation === 'minus') return;

    if (operation === 'minus') {
      setQuantity(qty => qty - 1);
    }

    if (operation === 'plus') {
      setQuantity(qty => qty + 1);
    }
  }

  return (
    <NumberContainer>
      <NumberButton onClick={() => handleQuantityChange('minus')}>
        <Minus size={14} weight="bold" />
      </NumberButton>

      <NumberInput value={quantity} />

      <NumberButton onClick={() => handleQuantityChange('plus')}>
        <Plus size={14} weight="bold" />
      </NumberButton>
    </NumberContainer>
  )
}