import styled from 'styled-components'

interface IconItemTextProps {
  background: string;
}

export const HomeContainer = styled.div`
  height: 24rem;
  padding: 6rem 12vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: url('/Background.png');
  background-size: cover; 
  background-position: center;
`

export const HomeTitle = styled.h1`
  font-family: ${({ theme }) => theme.font_family.baloo};
  font-size: ${({ theme }) => theme.font_size.title_xl};
  color: ${({ theme }) => theme.colors.base.title};
  width: 36.75rem;
  font-weight: 800;
`

export const HomeSubTitle = styled.p`
  font-family: ${({ theme }) => theme.font_family.baloo};
  font-size: ${({ theme }) => theme.font_size.text_l};
  color: ${({ theme }) => theme.colors.base.subtitle};
  width: 36rem;
  margin-top: 1rem;
`

export const ContainerItemText = styled.div`
  display: grid;
  grid-template-columns: 17rem 18.375rem;
  margin-top: 4rem;
`

export const ItemText = styled.p`
  font-family: ${({ theme }) => theme.font_family.baloo};
  font-size: ${({ theme }) => theme.font_size.text_m};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.675rem 0;
`

export const IconItemText = styled.div<IconItemTextProps>`
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  margin-right: 0.75rem;
  background-color: ${({ background }) => background};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CoffeeHomeImage = styled.img`
  height: 23.5rem;
  margin-left: 5rem;
`