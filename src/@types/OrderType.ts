import CartItemType from "./CartItemType";

interface OrderType {
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

export default OrderType;