import { createContext, useState } from "react";
import CartItemType from "../@types/CartItemType";

interface ChildrenProps {
  children: React.ReactNode,
}

interface CartContextType {
  handleAddItemToCart: (newItem: CartItemType) => void;
  handleRemoveItem: (id: number) => void;
  itens: CartItemType[]
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartContextProvider({ children }: ChildrenProps) {
  // const [cart, setCart] = useState<CartType>({} as CartType);
  const [itens, setItens] = useState<Array<CartItemType>>([]);

  function handleAddItemToCart(newItem: CartItemType) {
    if (newItem.quantity === 0) return;

    const index = itens.findIndex(item => item.id === newItem.id)

    let updatedList = [];

    if (index === -1) {
      updatedList = [...itens, newItem];

      setItens(updatedList);
    } else {
      updatedList = itens;

      updatedList[index].quantity += newItem.quantity;

      setItens(updatedList);
    }
  }

  function handleRemoveItem(id: number) {
    const updatedList = itens.filter(item => item.id !== id);

    setItens(updatedList);
  }

  return (
    <CartContext.Provider value={{ handleAddItemToCart, handleRemoveItem, itens }}>
      {children}
    </CartContext.Provider>
  )
}