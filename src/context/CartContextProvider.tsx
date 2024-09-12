import { createContext, useState } from "react";

interface CartItemType {
  id: number;
  quantity: number;
  price: number;
}

interface ChildrenProps {
  children: React.ReactNode,
}

interface CartType {
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  paymentMethod: 'credit' | 'debit' | 'cash';
  cartItens: Array<CartItemType>
}

interface CartContextType {
  handleAddItemToCart: (newItem: CartItemType) => void;
  itens: CartItemType[]
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartContextProvider({ children }: ChildrenProps) {
  const [cart, setCart] = useState<CartType>({} as CartType);
  const [itens, setItens] = useState<Array<CartItemType>>([]);

  function handleAddItemToCart(newItem: CartItemType) {
    const updatedList = [...itens, newItem];
    setItens(updatedList);
  }

  return (
    <CartContext.Provider value={{ handleAddItemToCart, itens }}>
      {children}
    </CartContext.Provider>
  )
}