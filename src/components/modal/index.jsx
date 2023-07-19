import { Button, IconBsFillCheckCircleFill, IconMotion, ModalContainer, StyledModal, Title } from "./styles";

// eslint-disable-next-line react/prop-types
export const Modal = ({ toggleModal, afterOpen, beforeClose, isOpen, opacity }) => {
  return ( 
      <StyledModal
      isOpen={isOpen}
      afterOpen={afterOpen}
      beforeClose={beforeClose}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      opacity={opacity}
      backgroundProps={{ opacity }}
      >
      <ModalContainer>
         <Title>Viagem agendada com sucesso!</Title>
         <IconMotion
         initial={{ y: -70 }}
         animate={{ y: 0 }}
         transition={{ type: "spring", stiffness: 60 }}
         >
          < IconBsFillCheckCircleFill />
         </IconMotion>
         <Button onClick={toggleModal}> Fechar</Button>
      </ModalContainer>
      </StyledModal>
  );
};
