import styled from "styled-components";
import { devices } from "../../utils/device";

export const BoxContainer = styled.div`
  /* background-color:rgb(25, 117, 12); */

  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid #000; */
  @media ${devices.xs} {
  }
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
  height: 40vh;
  width: 90vw;
  margin: 2rem;
  }
  @media ${devices.sm} {
  height: 45vh;
  width: 80vw;
  margin: 1.2rem;
  }
  @media ${devices.md} {
  height: 45vh;
  width: 60vw;
  margin: 1.2rem;
  }
  @media ${devices.lg} {
  height: 50vh;
  width: 60vw;
  margin: 1.4rem;

  }
  @media ${devices.xl} {
    height: 60vh;
  width: 40vw;
  margin: 2rem;
  }

`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  text-shadow: #000 0.5px 0.5px 0.5px;
 
  @media ${devices.xs} {
    font-size: 0.8rem;
    text-shadow: #000 1px 1px 1px;
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
  height: 10vh;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 6px 6px 0 0;
  justify-content: center;
  border-bottom: 0.5px solid #000;
  @media ${devices.xs} {
    height: 5vh;
  }
`;
