import Modal, { BaseModalBackground } from "styled-react-modal";
import { BsFillCheckCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from "../../utils/device";

export const StyledModal = styled(Modal)`
  opacity: ${(props) => props.opacity};
  transition: all 0.2s ease-in-out;
  flex-direction: column;
`;

export const ModalContainer = styled.main`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 35vw;
  height: 30vh;
  background-color: #fff;
  color: #000;
  box-sizing: border-box;
  border-radius: 6px;
  @media ${devices.xs} {
    width: 70vw;
    height: 30vh;
  }
  @media ${devices.sm} {
    width: 70vw;
    height: 30vh;
  }
  @media ${devices.md} {
    width: 60vw;
    height: 25vh;
  }
  @media ${devices.lg} {
    width: 60vw;
    height: 30vh;
  }
  @media ${devices.xl} {
    width: 60vw;
    height: 40vh;
  }
`;

export const IconBsFillCheckCircleFill = styled(BsFillCheckCircleFill)`
  margin: 1rem;
  font-size: 4rem;
  color: #2a8e29;
  @media ${devices.xs} {
    font-size: 2rem;
    margin: 0.5rem;
  }
  @media ${devices.sm} {
    font-size: 2.5rem;
  }
  @media ${devices.md} {
    font-size: 3rem;
  }
  @media ${devices.lg} {
    font-size: 3.5rem;
  }
  @media ${devices.xl} {
    font-size: 4rem;
  }
`;
export const IconMotion = styled(motion.div)``;

export const Title = styled.h1`
  color: rgb(255, 7, 120);
  font-size: 1.8rem;
  text-shadow: #ddd 0.1px 0.1px 0.1px;
  margin: 1rem;
  @media ${devices.xs} {
    font-size: 1rem;
  }
  @media ${devices.sm} {
    font-size: 1.3rem;
  }
  @media ${devices.md} {
    font-size: 1.5rem;
  }
  @media ${devices.lg} {
    font-size: 1.7rem;
  }
  @media ${devices.xl} {
    font-size: 2rem;
  }
`;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const Button = styled.button`
  cursor: pointer;
  text-shadow: #000 0.3px 0.3px 0.3px;
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
  @media ${devices.xs} {
    font-size: 0.9rem;
    width: 40%;
    margin: 1rem;
  }
  @media ${devices.sm} {
    font-size: 1rem;
    width: 40%;
    margin: 2rem;
  }
  @media ${devices.md} {
    font-size: 1.2rem;
    width: 50%;
    margin: 2rem ;
  }
  @media ${devices.lg} {
    font-size: 1.4rem;
    width: 60%;
    margin: 2rem;
  }
  @media ${devices.xl} {
    font-size: 1.6rem;
    width: 26%;
    margin: 3rem;
    max-width: 62%; 
  }
`;
