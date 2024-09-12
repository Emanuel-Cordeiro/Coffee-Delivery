import { Minus, Plus } from "@phosphor-icons/react";
import { NumberButton, NumberContainer, NumberInput } from "./styles";

interface InputNumberProps {
  setQty: (quantity: number) => void;
  qty: number;
}

export function InputNumber({ setQty, qty }: InputNumberProps) {
  function handleQuantityChange(operation: string) {
    if (qty === 0 && operation === 'minus') return;

    if (operation === 'minus') {
      setQty(qty - 1);
    }

    if (operation === 'plus') {
      setQty(qty + 1);
    }
  }

  return (
    <NumberContainer>
      <NumberButton onClick={() => handleQuantityChange('minus')}>
        <Minus size={14} weight="bold" />
      </NumberButton>

      <NumberInput value={qty} readOnly />

      <NumberButton onClick={() => handleQuantityChange('plus')}>
        <Plus size={14} weight="bold" />
      </NumberButton>
    </NumberContainer>
  );
}
