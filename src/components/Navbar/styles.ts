import styled from "styled-components";

export const NavbarContainer = styled.nav`
  height: 2.5rem;
  padding: 2rem 12vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.img`
  height: 2.5rem;
  
  &:hover {
    cursor: pointer;
  }
`

export const LocationCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.375rem;
`

export const LocationContainer = styled.div`
  height: 1.375rem;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color:  ${({ theme }) => theme.colors.product.purple_light};
`

export const LocationText = styled.p`
  margin-left: 0.25rem;
  color: ${({ theme }) => theme.colors.product.purple_dark};
  font-family: ${({ theme }) => theme.font_family.roboto};
  font-size: ${({ theme }) => theme.font_size.text_s};
  background-color:  ${({ theme }) => theme.colors.product.purple_light};
`