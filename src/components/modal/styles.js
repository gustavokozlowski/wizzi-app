import Modal, { BaseModalBackground} from "styled-react-modal";
import { BsFillCheckCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledModal = styled(Modal)`
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  `;

export const ModalContainer = styled.main`
  background-color:rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35vw;
  height: 30vh;
  background-color: #fff;
  color: #000;
  box-sizing: border-box;
  border-radius: 6px;
  box-shadow: 0.1px 0.1px 0.1px 0.1px black;
`;

export const IconBsFillCheckCircleFill = styled(BsFillCheckCircleFill)`
  margin: 1rem;
  font-size: 4rem;
  color: #2a8e29;
`;
export const IconMotion = styled(motion.div)`

`;

export const Title = styled.h1`
  color:  rgb(255, 7, 120) ;
  font-size: 1.8rem;
  text-shadow: #ddd 0.1px 0.1px 0.1px;
  margin: 1rem;
`;


export const FadingBackground = styled(BaseModalBackground)`
opacity: ${(props) => props.opacity};
transition: all 0.3s ease-in-out;
`;

export const Button = styled.button`
  cursor: pointer;
  text-shadow: #000 0.1px 0.1px 0.1px;
  color: #fff;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
  background-color: rgb(255, 7, 120);
  height: fit-content;
  width: 20%;
  border: none;
  font-weight: bolder;
  margin: 2rem 0 0 0;
  box-shadow: 1px 1px 1px rgb(100, 100, 100), 1px 1px 1px rgb(100, 100, 100);
`;
  