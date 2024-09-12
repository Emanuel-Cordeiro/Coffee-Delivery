import styled from "styled-components";

interface IconItemTextProps {
  background: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-content: row;
`

export const TitleOrder = styled.h1`
  margin-top: 5.25rem;
  font-family: ${({ theme }) => theme.font_family.baloo};
  font-size: ${({ theme }) => theme.font_size.title_l};
  color: ${({ theme }) => theme.colors.product.yellow_dark};
`

export const SubtitleOrder = styled.p`
  margin-bottom: 2.625rem;
  font-family: ${({ theme }) => theme.font_family.baloo};
  font-size: ${({ theme }) => theme.font_size.text_l};
  color: ${({ theme }) => theme.colors.base.subtitle};
`

export const DeliveryImage = styled.img`
  height: 18rem;
  width: 31rem;
  margin-top: 9.875rem;
`

export const ContainerOrderInfo = styled.div`
  width: 32rem;
  height: 10rem;
  padding: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.product.purple};
  border-radius: 6px 36px 6px 36px;
`

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ItemText = styled.p`
  font-family: ${({ theme }) => theme.font_family.baloo};
  font-size: ${({ theme }) => theme.font_size.text_m};
  color: ${({ theme }) => theme.colors.base.text};
  width: 20rem;

  span {
    font-weight: bold;
  }
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

export const ColumnInfo = styled.div`
  flex-direction: column;
  padding: 0.675rem 0;
`