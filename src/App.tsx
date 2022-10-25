import { StyledParagraph, StyledTitle } from "./styles/typography";

export function App() {
  return (
    <div>
      <StyledTitle tag="h1" fontWeight={700} fontSize="lg">
        GameStore
      </StyledTitle>

      <StyledParagraph fontSize="lg">Welcome to the gamestore</StyledParagraph>
    </div>
  )
}
