import styled from "styled-components";
import { devices } from "../../utils/device";
import { ImLocation } from "react-icons/im";
import { HiTicket } from "react-icons/hi";
import {
  BsFillPersonFill,
  BsCalendar2CheckFill,
} from "react-icons/bs";

export const Form = styled.form`
  /* background-color: rgb(25, 117, 233); */
  display: grid;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  grid-template-columns: auto;
  padding: 0 0 0 0.5rem;
`;

export const Subtitle = styled.h2`
  padding: 0 0 0 0.1rem;
  color: rgb(255, 7, 120);
  margin: 0;
  font-size: 1.4rem;
  text-shadow: #ddd 0.2px 0.2px 0.2px;
  @media ${devices.xs} {
    font-size: 0.7rem;
    margin: 0.2rem;
  }
  @media ${devices.sm} {
    font-size: 0.7rem;
  }
  @media ${devices.md} {
    font-size: 0.8rem;
  }
  @media ${devices.lg} {
    font-size: 0.9rem;
  }
  @media ${devices.xl} {
    font-size: 1rem;
  }
`;
export const Container = styled.div`
display: flex;
width: 100%;
height: 100%;

`;
export const IconImLocation = styled(ImLocation)`
  font-size: 1.3rem;
  color: rgb(255, 7, 120);
  @media ${devices.xs} {
    font-size: 0.7rem;
  }
  @media ${devices.sm} {
    font-size: 0.7rem;
  }
  @media ${devices.md} {
    font-size: 0.8rem;
  }
  @media ${devices.lg} {
    font-size: 0.8rem;
  }
  @media ${devices.xl} {
    font-size: 0.9rem;
  }
`;
export const IconBsFillPersonFill = styled(BsFillPersonFill)`
  font-size: 1.2rem;
  color: rgb(255, 7, 120);
  @media ${devices.xs} {
    font-size: 0.7rem;
  }
  @media ${devices.sm} {
    font-size: 0.7rem;
  }
  @media ${devices.md} {
    font-size: 0.8rem;
  }
  @media ${devices.lg} {
    font-size: 0.8rem;
  }
  @media ${devices.xl} {
    font-size: 0.9rem;
  }
`;
export const IconHiTicket = styled(HiTicket)`
  font-size: 1.4rem;
  color: rgb(255, 7, 120);
  @media ${devices.xs} {
    font-size: 0.7rem;
  }
  @media ${devices.sm} {
    font-size: 0.7rem;
  }
  @media ${devices.md} {
    font-size: 0.8rem;
  }
  @media ${devices.lg} {
    font-size: 0.8rem;
  }
  @media ${devices.xl} {
    font-size: 0.9rem;
  }
`;
export const IconBsCalendar2CheckFill = styled(BsCalendar2CheckFill)`
  font-size: 1rem;
  color: rgb(255, 7, 120);
  @media ${devices.xs} {
    font-size: 0.5rem;
  }
  @media ${devices.sm} {
    font-size: 0.5rem;
  }
  @media ${devices.md} {
    font-size: 0.6rem;
  }
  @media ${devices.lg} {
    font-size: 0.6rem;
  }
  @media ${devices.xl} {
    font-size: 0.6rem;
  }
`;

export const TextContent = styled.div`
  flex-direction: row;
  align-items: center;
  width: 100%;
  display: flex;
  margin: 0;
  margin: 0.2rem;
`;
export const Section = styled.section`
  /* background-color: aquamarine; */
  height: 100%;
  width: 100%;
  min-width: 90vw;
  display: grid;
  
  grid-template-columns: auto auto;
  @media ${devices.xs} {
    padding: 0;
    min-width: 80vw;
    align-items: center;
  }
  @media ${devices.sm} {
    padding: 0;
    min-width: 75vw;

  }
  @media ${devices.md} {
    padding: 0;
    min-width: 55vw;
  }
  @media ${devices.lg} {
     padding: 0;
     min-width: 50vw;
  }
  @media ${devices.xl} {
    padding: 0;
    min-width: 50vw;
    
  }

`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.xs} {
      width: 100%;
      justify-content: space-between;
    
      
  }
  @media ${devices.sm} {
      width: 100%;
      margin: 0 0.2rem 0 0.2rem;
      
  }
  @media ${devices.md} {
    width: 100%;
    margin: 0 0.2rem 0 0.2rem;
  }
  @media ${devices.lg} {
    width: 100%;
    justify-content: space-between;
    align-items: stretch;
  }
  @media ${devices.xl} {
    width: 100%;
    justify-content: space-between;
    align-items: stretch;
  }

`;

export const Label = styled.label`
  text-shadow: #ddd 0.2px 0.2px 0.2px;
  font-size: 1rem;
  color: rgb(255, 7, 120);
  font-weight: 500;
  @media ${devices.xs} {
    font-size: 0.6rem;
    margin: 0.2rem;
  }
  @media ${devices.sm} {
    font-size: 0.6rem;
  }
  @media ${devices.md} {
    font-size: 0.7rem;
  }
  @media ${devices.lg} {
    font-size: 0.7rem;
  }
  @media ${devices.xl} {
    font-size: 0.8rem;
  }
`;
export const ErrorMessage = styled.span`
  font-size: 0.7rem;
  font-weight: bold;
  margin:0.1rem;
  color: #f33;
  text-shadow: #ddd 0.1px 0.1px 0.1px;
  @media ${devices.xs} {
    font-size: 0.5rem;
  }
  @media ${devices.sm} {
    font-size: 0.6rem;
  }
  @media ${devices.md} {
    font-size: 0.6rem;
  }
  @media ${devices.lg} {
    font-size: 0.7rem;
  }
  @media ${devices.xl} {
    font-size: 0.8rem;
  }
`;
export const Input = styled.input`
  font-size: 0.8rem;
  border: none;
  border-bottom: 0.5px solid #000;
  height: 4vh;
  width: 90%;
  transition: border-color all 2s ease-in-out;
  text-shadow: #ddd 0.2px 0.2px 0.2px;
  &::placeholder {
    text-shadow: #ddd 0.2px 0.2px 0.2px;
  }
  &:focus {
    border-color: rgb(255, 7, 120);
    outline: none;
  }
  @media ${devices.xs} {
    height: 2vh;
    width: 90%;
    font-size: 0.7rem;
  
  }
  @media ${devices.sm} {
    height: 2vh;
    width: 90%;
    font-size: 0.7rem;
  
  }
  @media ${devices.md} {
    height: 2.5vh;
    width: 90%;
    font-size: 0.7rem;
  
  }
  @media ${devices.lg} {
    height: 2vh;
    width: 90%;
    font-size: 0.7rem;
  
  }
  @media ${devices.xl} {
    height: 3vh;
    width: 90%;
    font-size: 0.9rem;
  
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Button = styled.button`
  cursor: pointer;
  margin: 1rem;
  text-shadow: #000 0.2px 0.2px 0.2px;
  color: #fff;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  background-color: rgb(255, 7, 120);
  height: fit-content;
  width: 25%;
  border: none;
  box-shadow: 1px 1px 1px rgb(100, 100, 100), 1px 1px 1px rgb(100, 100, 100);
  @media ${devices.xs} {
    font-size: 0.9rem;
  }
  @media ${devices.sm} {
    font-size: 0.9rem;
  }
  @media ${devices.md} {
    font-size: 1rem;
  }
  @media ${devices.lg} {
    font-size: 1rem;
  }
  @media ${devices.xl} {
    font-size: 1rem;
  }
`;
