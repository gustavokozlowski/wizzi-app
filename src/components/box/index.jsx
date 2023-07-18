import { InputForm } from "../input";
import { BoxContainer, BoxContent, HeaderBox, Title } from "./styles";

export const Box = () => {
  return (
    <BoxContainer>
      <BoxContent>
        <HeaderBox>
        <Title>Bora agendar a sua viagem!</Title>
        </HeaderBox>
        <InputForm />
      </BoxContent>
    </BoxContainer>
  );
};
