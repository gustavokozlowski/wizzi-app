import styled from "styled-components";


export const Form = styled.form`
  background-color:rgb(255, 7, 120);
  height: fit-content;
  display: flex;
  align-items: center;
`;
export const Container = styled.main`
  display: flex;
  margin: 1rem;
`;
export const ContainerInput= styled.div`
  display: flex;
  margin: 1rem;
  padding: 0.5rem;
  flex-direction: column;
`;

export const Input = styled.input`
  font-size: 1vw;
  padding-left: 6px;
  margin-top: 4px;
  color: #000;
  border: 1px solid #000000;
  height: 3vh;
  width: 15vw;
  background-color: #fff;
  outline: none;
  border-radius: 3px;
  ::-webkit-input-placeholder {
    color: black;
  }
`;
export const Label = styled.label`
  margin-bottom: -1.5px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

