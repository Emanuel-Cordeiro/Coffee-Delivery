import { createContext, useState } from "react";
import CartItemType from "../@types/CartItemType";
import OrderType from "../@types/OrderType";

interface ChildrenProps {
  children: React.ReactNode,
}

interface CartContextType {
  handleAddItemToCart: (newItem: CartItemType) => void;
  handleRemoveItem: (id: number) => void;
  handleOrderConfirmation: (order: OrderType) => void;
  order: OrderType;
  itens: CartItemType[]
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartContextProvider({ children }: ChildrenProps) {
  const [itens, setItens] = useState<Array<CartItemType>>([]);
  const [order, setOrder] = useState({} as OrderType)

  function handleOrderConfirmation(order: OrderType) {
    setOrder(order);
  }

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
    <CartContext.Provider value={{ handleAddItemToCart, handleRemoveItem, itens, handleOrderConfirmation, order }}>
      {children}
    </CartContext.Provider>
  )
}