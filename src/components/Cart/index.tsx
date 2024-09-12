import { ShoppingCart } from "@phosphor-icons/react";
import { CartButton, CartQuantity } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useCartContext } from "../../hooks/useCart";

export function Cart() {
  const navigate = useNavigate();
  const page = useLocation();
  const { itens } = useCartContext();

  function handleCartClick() {
    if (page.pathname !== '/checkout' && page.pathname !== '/checkout/success') {
      navigate('checkout')
    }
  }

  return (
    <>
      <CartButton onClick={handleCartClick}>
        <ShoppingCart size={20} weight="fill" />
      </CartButton>
      <CartQuantity>{itens.length}</CartQuantity>
    </>
  )
}