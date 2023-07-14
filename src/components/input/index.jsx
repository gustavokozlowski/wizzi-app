import { Form, Input, Label, Container, ContainerInput } from "./styles";

// Data de ida
// Data de volta
// Quantidade de passageiros (adultos e crianças separadamente)
// Origem
// Destino
// Nome do passageiro principal
// E-mail do passageiro principal

export const InputForm = () => {
  return (
    <Container>
      <Form>
        <ContainerInput>
        <Label htmlFor="origem">
          Para onde você deseja ir?
        </Label>
         <Input/>
        </ContainerInput>
        <ContainerInput>
        <Label htmlFor="destino">
          Para onde você deseja ir?
        </Label>
         <Input/>
        </ContainerInput>
      </Form>
    </Container>
  );
};
