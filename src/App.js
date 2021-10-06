import { useCallback, useState } from "react";
import { AppContainer, MainSection } from "./components/app.styled";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";
import { Button } from "./components/button.styled";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <MainSection>
          <h1>Você esta em {currentTheme} Modo</h1>
          <Button onClick={() => setCurrentTheme(getOpositeTheme())}>
            Altere para {getOpositeTheme()} Modo
          </Button>
        </MainSection>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
