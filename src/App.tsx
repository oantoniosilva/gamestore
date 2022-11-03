
import { StyledButton } from "./styles/buttons";
import { StyledParagraph, StyledTitle } from "./styles/typography";

export function App() {
  return (
    <div>
      <StyledTitle tag="h2" fontWeight={700} fontSize="md">
        GameStore
      </StyledTitle>

      <StyledParagraph fontSize="md">Welcome to the gamestore</StyledParagraph>
      <StyledButton buttonSize="md" buttonStyle="outline">Teste</StyledButton>
    </div>
  )
}
