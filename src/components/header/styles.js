import styled from "styled-components";
import { devices } from "../../utils/device";


export const HeaderContainer = styled.header`
  background-color:rgb(255, 7, 120);
  height: 7vh;
  display: flex;
  align-items: center;
`;
export const HeaderContent = styled.main`
  display: flex;
  margin: 1rem;
  width: 20vw;
  align-items: center;
  justify-content: center;

`;

export const Title = styled.h1`
  color:  #fff ;
  font-size: 1.8rem;
  text-shadow: #000 0.1em 0.1em 0.1em;
  font-weight: bolder;
  @media ${devices.xs} {
    font-size: 1rem;
    
  }
  @media ${devices.sm} {
    font-size: 1.2rem;
  }
  @media ${devices.md} {
    font-size: 1.3rem;
  }
  @media ${devices.lg} {
    font-size: 1.4rem;
  }
  @media ${devices.xl} {
    font-size: 1.5rem;
  }
`;
