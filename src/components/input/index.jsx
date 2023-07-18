import {
  Form,
  Input,
  Label,
  Container,
  ContainerInput,
  Subtitle,
  Section,
  TextContent,
  IconImLocation,
  IconBsFillPersonFill,
  IconHiTicket,
  IconBsCalendar2CheckFill,
  Button,
  ButtonContainer,
  ErrorMessage,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Modal } from "../modal";
import { useState } from "react";

const schemaForm = yup.object().shape({
  nome: yup.string().required("Por favor, preencha este campo"),
  email: yup
    .string()
    .email("Este e-mail não é válido")
    .required("Por favor, preencha este campo"),
  origem: yup.string().required("Por favor, preencha este campo"),
  destino: yup.string().required("Por favor, preencha este campo"),
  criancas: yup.string().required("Por favor, preencha este campo"),
  adultos: yup.string().required("Por favor, preencha este campo"),
  data_ida: yup
    .date()
    .typeError("Por favor, preencha este campo")
    .required("Por favor, preencha este campo"),
  data_retorno: yup
    .date()
    .typeError("Por favor, preencha este campo")
    .required("Por favor, preencha este campo"),
});

export const InputForm = () => {
  const [isOpen, setIsOpen] = useState(!false);
  const [opacity, setOpacity] = useState(0);
  const {
    register,
    handleSubmit: onSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForm),
  });

  function toggleModal() {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  const handleResult = (data) => {
    toggleModal()
    return console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit(handleResult)} id="form">
        <TextContent>
          <IconBsFillPersonFill />
          <Subtitle>Responsável pela reserva</Subtitle>
        </TextContent>
        <Section>
          <ContainerInput>
            <Label htmlFor="nome">Nome</Label>
            <Input
              name="nome"
              placeholder="seu nome"
              type="text"
              id="nome"
              {...register("nome")}
            />
            <ErrorMessage>{errors.nome?.message}</ErrorMessage>
          </ContainerInput>
          <ContainerInput>
            <Label htmlFor="email">E-mail</Label>
            <Input
              name="destino"
              placeholder="e-mail"
              type="email"
              id="email"
              {...register("email")}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </ContainerInput>
        </Section>
        <TextContent>
          <IconImLocation />
          <Subtitle>Local de embarque & destino </Subtitle>
        </TextContent>
        <Section>
          <ContainerInput>
            <Label htmlFor="origem">Local de embarque</Label>
            <Input
              name="origem"
              placeholder="saindo de"
              type="text"
              id="origem"
              {...register("origem")}
            />
            <ErrorMessage>{errors.origem?.message}</ErrorMessage>
          </ContainerInput>
          <ContainerInput>
            <Label htmlFor="destino">Para onde você deseja ir?</Label>
            <Input
              name="destino"
              placeholder="indo para"
              type="text"
              id="destino"
              {...register("destino")}
            />{" "}
            <ErrorMessage>{errors.destino?.message}</ErrorMessage>
          </ContainerInput>
        </Section>
        <TextContent>
          <IconHiTicket />
          <Subtitle>Quantidade de passagens</Subtitle>
        </TextContent>
        <Section>
          <ContainerInput>
            <Label htmlFor="criancas">Quantas crianças?</Label>
            <Input
              name="criancas"
              placeholder="insira a quantidade"
              type="number"
              id="criancas"
              {...register("criancas")}
            />{" "}
            <ErrorMessage>{errors.criancas?.message}</ErrorMessage>
          </ContainerInput>
          <ContainerInput>
            <Label htmlFor="adultos">Quantos adultos?</Label>
            <Input
              name="adultos"
              placeholder="insira a quantidade"
              type="number"
              id="adultos"
              {...register("adultos")}
            />{" "}
            <ErrorMessage>{errors.adultos?.message}</ErrorMessage>
          </ContainerInput>
        </Section>
        <TextContent>
          <IconBsCalendar2CheckFill />
          <Subtitle>Data de ida & retorno</Subtitle>
        </TextContent>
        <Section>
          <ContainerInput>
            <Label htmlFor="data-ida">Quando deseja ir?</Label>
            <Input
              name="data-ida"
              type="date"
              id="data-ida"
              {...register("data_ida")}
            />{" "}
            <ErrorMessage>{errors.data_ida?.message}</ErrorMessage>
          </ContainerInput>
          <ContainerInput>
            <Label htmlFor="data-retorno">Quando deseja voltar?</Label>
            <Input
              name="data-retorno"
              type="date"
              id="data-retorno"
              {...register("data_retorno")}
            />{" "}
            <ErrorMessage>{errors.data_retorno?.message}</ErrorMessage>
          </ContainerInput>
        </Section>
        <ButtonContainer>
          <Button form="form" type="submit">
            Reservar
          </Button>
        </ButtonContainer>
      </Form>
      <Modal
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        isOpen={isOpen}
        opacity={opacity}
        toggleModal={toggleModal}
      />
    </Container>
  );
};
