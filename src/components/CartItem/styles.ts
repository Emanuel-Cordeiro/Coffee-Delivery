import styled from "styled-components";

export const ContainerItem = styled.div`
  width: 100%;
  height: 6.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.base.card};
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.button};
`

export const CoffeeImg = styled.img`
  height: 4rem;
  width: 4rem;
`

export const InlineInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1.25rem;
`

export const ItemInfo = styled.h1`
  font-family: ${({ theme }) => theme.font_family.roboto};
  font-size: ${({ theme }) => theme.font_size.text_m};
  color: ${({ theme }) => theme.colors.base.text};
  margin-bottom: 0.75rem;
`

export const ContainerColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
`

export const ButtonRemove = styled.button`
  padding: 0.5rem;
  width: 6rem;
  height: 2.375rem;
  border-radius: 6px;
  border: none;
  line-height: 160%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: ${({ theme }) => theme.font_family.roboto};
  font-size: ${({ theme }) => theme.font_size.button_s};
  color: ${({ theme }) => theme.colors.base.text};
  background-color: ${({ theme }) => theme.colors.base.button};

  &:hover{ 
    background-color: ${({ theme }) => theme.colors.base.hover};
    transition: 0.5s;
    cursor: pointer;
  }
`
