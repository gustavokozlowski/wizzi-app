import styled from "styled-components";
import { ImLocation } from "react-icons/im";
import {
  BsFillPersonFill,
  BsFillTicketPerforatedFill,
  BsCalendar2CheckFill,
} from "react-icons/bs";
import { HiTicket } from "react-icons/hi";

export const Form = styled.form`
  /* background-color:rgb(25, 117, 12); */
  display: grid;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 40vw;
  grid-template-columns: auto;
`;

export const Subtitle = styled.h2`
  padding: 0 0 0 0.1rem;
  color: rgb(255, 7, 120);
  margin: 0;
  font-size: 1.4rem;
  text-shadow: #ddd 0.2px 0.2px 0.2px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const IconImLocation = styled(ImLocation)`
  font-size: 1.3rem;
  color: rgb(255, 7, 120);
`;
export const IconBsFillPersonFill = styled(BsFillPersonFill)`
  font-size: 1.2rem;
  color: rgb(255, 7, 120);
`;
export const IconBsFillTicketPerforatedFill = styled( BsFillTicketPerforatedFill)`
  font-size: 1.2rem;
  color: rgb(255, 7, 120);
`;
export const IconHiTicket = styled(HiTicket)`
  font-size: 1.4rem;
  color: rgb(255, 7, 120);
`;
export const IconBsCalendar2CheckFill = styled(BsCalendar2CheckFill)`
  font-size: 1rem;
  color: rgb(255, 7, 120);
`;

export const TextContent = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  margin: 0;
`;
export const Section = styled.section`
  margin: 0;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
`;
export const ContainerInput = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  width: fit-content;
`;

export const Input = styled.input`
  font-size: 0.8rem;
  border: none;
  border-bottom: 0.5px solid #000;
  height: 4vh;
  width: 15vw;
  padding-top: 0.5em;
  text-shadow: #ddd 0.2px 0.2px 0.2px;
  &::placeholder {
    text-shadow: #ddd 0.2px 0.2px 0.2px;
  }
  &:focus {
    border-color: rgb(255, 7, 120);
    outline: none;
  }
`;
export const Label = styled.label`
  text-shadow: #ddd 0.2px 0.2px 0.2px;
  font-size: 1rem;
  color: rgb(255, 7, 120);
  font-weight: bold;
`;
export const ErrorMessage = styled.span`
  font-size: 0.7rem;
  font-weight: bold;
  color: #f33;
  text-shadow: #ddd 0.2px 0.2px 0.2px;
  /* align-self: flex-start; */
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  text-shadow: #000 0.2px 0.2px 0.2px;
  color: #fff;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  background-color: rgb(255, 7, 120);
  height: fit-content;
  width: 25%;
  /* border: 1px solid #ddd; */
  border: none;
  margin: 2rem 0 0 0;
  box-shadow: 1px 1px 1px rgb(100, 100, 100), 1px 1px 1px rgb(100, 100, 100);
`;
