import styled from "styled-components";

export const ContainerInput = styled.div`
  width: 100%;
  height: 2.625rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.base.input};
  border: 1px solid ${({ theme }) => theme.colors.base.button};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputComponent = styled.input`
  border: none;
  outline: none;
  width: 100%;
  margin: 0.75rem;
  background: transparent;
  font-family: ${({ theme }) => theme.font_family.roboto};
  font-size: ${({ theme }) => theme.font_size.text_s};
  color: ${({ theme }) => theme.colors.base.text};
`