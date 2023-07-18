import styled from "styled-components";


export const BoxContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  flex-direction: column;
  
`;
export const BoxContent = styled.main`
  z-index: 1000;
  background-color:rgb(255, 255, 255);
  height: 100vh;
  width: 40vw;
  display: flex;
  align-items: center;
  border-radius: 6px;
  flex-direction: column;
  border: 1px solid #ddd ;
  /* box-shadow: 1px 1px 2px 2px rgb(100, 100, 100), 1px 1px 2px 2px rgb(100, 100, 100); */
`;

export const Title = styled.h1`
  color:  #fff ;
  font-size: 1.8rem;
  text-shadow: #000 1px 1px 1px;
  font-weight: bolder;
  
`;

export const HeaderBox = styled.header`
  background-color:rgb(255, 7, 120);
  height: 8%;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 6px 6px 0 0;
  justify-content: center;
  border-bottom: 1px solid #ddd;

`;
