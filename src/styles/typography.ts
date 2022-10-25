import styled, { css } from "styled-components";
import { BaseTitle } from "./components/typography";

export const StyledTitle = styled(BaseTitle)`
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight};

  color: ${({ theme }) => theme.colors.white};

  ${({ fontSize }) => {
    switch(fontSize) {
      case 'lg':
        return css`
          font-size: 44px;
        `
      case 'md':
        return css`
          font-size: 20px;
        `
      case 'sm':
        return css`
          font-size: 16px;
        `
    }
  }}
`;

interface IStyledParagraph {
  opacity?: number;
  fontSize: 'lg' | 'md' | 'sm';
}

export const StyledParagraph = styled.p<IStyledParagraph>`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  // toda tag strong ou b(bold) que estiver dentro da tag p será negrito
  strong, b {
    font-weight: 700;
  }

  color: ${({ theme }) => theme.colors.white};
                                            
  opacity: ${({ opacity }) => opacity ? opacity : .5}; // .5 = 50% de opacidade.

  ${({ fontSize }) => {
    switch(fontSize) {
      case 'lg':
        return css`
          font-size: 20px;
        `
      case 'md':
        return css`
          font-size: 16px;
        `
      case 'sm':
        return css`
          font-size: 14px;
        `
    }
  }}
  
`;