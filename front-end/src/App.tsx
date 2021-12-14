import { ThemeProvider } from 'styled-components';

import Router from './routes';
import { theme } from './styles/theme';
import GlobalStyled from './styles/globalStyled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Router />
    </ThemeProvider>
  );
}

export default App;