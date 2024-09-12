import { ContainerInput, InputComponent } from "./styles";

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: () => void;
}

export function Input({ placeholder, value, onChangeText }: InputProps) {
  return (
    <ContainerInput>
      <InputComponent
        value={value}
        placeholder={placeholder}
        onChange={onChangeText}
      />
    </ContainerInput>
  )
}