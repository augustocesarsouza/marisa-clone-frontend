import { ThemeProvider } from 'styled-components';
import { theme } from '../../Style/theme';
import { BrowserRouter } from 'react-router-dom';
import AppContent from '../AppContent/AppContent';
import { GlobalStyle } from '../../Style/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
