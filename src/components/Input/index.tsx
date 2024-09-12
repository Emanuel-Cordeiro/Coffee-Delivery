import { ContainerInput, InputComponent } from "./styles";

interface InputProps {
  placeholder: string;
}

export function Input({ placeholder }: InputProps) {
  return (
    <ContainerInput>
      <InputComponent placeholder={placeholder} />
    </ContainerInput>
  )
}