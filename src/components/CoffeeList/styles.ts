import styled from "styled-components";

export const TitleCoffeeList = styled.h3`
  font-family: ${({ theme }) => theme.font_family.baloo};
  font-size: ${({ theme }) => theme.font_size.title_l};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.base.subtitle};
  padding: 2rem 0 0 12vw;
`

export const GridCoffeeList = styled.div`
  padding: 3.5rem 12vw;
  display: grid;
  grid-template-columns: 18rem 18rem 18rem 18rem;
  justify-content: space-between;
`