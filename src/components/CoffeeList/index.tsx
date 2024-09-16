import { CoffeeItem } from "../CoffeeItem";
import { dataCoffeeList } from "../../mockData/data";
import { GridCoffeeList, TitleCoffeeList } from "./styles";

export function CoffeeList() {
  return (
    <>
      <TitleCoffeeList>Nossos cafés</TitleCoffeeList>

      <GridCoffeeList>
        {dataCoffeeList.map((coffee) => (
          <CoffeeItem key={coffee.id} coffee={coffee} />
        ))}
      </GridCoffeeList>
    </>
  )
}