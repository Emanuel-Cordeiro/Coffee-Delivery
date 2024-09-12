import { Route, Routes } from "react-router-dom";

import { Home } from "../screens/Home";
import { Success } from "../screens/Success";
import { Checkout } from "../screens/Checkout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout/success" element={<Success />} />
    </Routes>
  )
}