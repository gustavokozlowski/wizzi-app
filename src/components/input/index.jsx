import { Form, Input, Label, Container, ContainerInput } from "./styles";

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
