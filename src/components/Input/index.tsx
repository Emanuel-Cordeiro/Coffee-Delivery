import { ContainerInput, ErrorMessage, InputComponent } from "./styles";

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: () => void;
  error?: string;
}

export function Input({ placeholder, value, error, onChangeText }: InputProps) {

  return (
    <>
      <ContainerInput>
        <InputComponent
          value={value}
          placeholder={placeholder}
          onChange={onChangeText}
        />
      </ContainerInput>
      {error ? <ErrorMessage>Informação inválida</ErrorMessage> : <div></div>}
    </>
  )
}