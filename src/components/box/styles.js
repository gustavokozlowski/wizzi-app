import styled from "styled-components";
import { devices } from "../../utils/device";

export const BoxContainer = styled.div`
  /* background-color:rgb(25, 117, 12); */

  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid #000; */
`;

// tem que ser sempre maior que o form
export const BoxContent = styled.main`
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  margin: 3rem;
  height: 80vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  flex-direction: column;
  border: 1px solid #ddd;
  @media ${devices.xs} {
  height: 60vh;
  align-items: center;

  width: 90vw;
 
  }
  @media ${devices.sm} {
  height: 45vh;
  width: 80vw;
  margin: 3rem;
  }
  @media ${devices.md} {
  height: 45vh;
  width: 60vw;
  margin: 4rem;
  }
  @media ${devices.lg} {
  height: 50vh;
  width: 60vw;
  margin: 4rem;

  }
  @media ${devices.xl} {
    height: 60vh;
  width: 55vw;
  margin: 5rem;
  }

`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  text-shadow: #000 1px 1px 1px;
 
  @media ${devices.xs} {
    font-size: 0.8rem;
    
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
    font-size: 1.1rem;
  }

`;

export const HeaderBox = styled.header`
  background-color: rgb(255, 7, 120);
  height: 7vh;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 6px 6px 0 0;
  justify-content: center;
`;
