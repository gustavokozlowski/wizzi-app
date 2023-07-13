import { InputForm } from "../input";
import { ContainerHeader, ContainerText, Title } from "./styles";

export const Header = () => {
  return (
    <ContainerHeader>
      <ContainerText>
        <Title>Wizzi!</Title>
      </ContainerText>
      <InputForm />
    </ContainerHeader>
  );
};
