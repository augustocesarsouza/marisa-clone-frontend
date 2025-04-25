import { ThemeProvider } from 'styled-components';
import { theme } from '../../Style/theme';
import { BrowserRouter } from 'react-router-dom';
import AppContent from '../AppContent/AppContent';
import { GlobalStyle } from '../../Style/GlobalStyle';
import { Provider } from 'react-redux';
import { storeAddressMain } from '../../Components/MyAccountComponents/MyAddressesComponents/AddressDisplayedComponents/ChangeAddressMainRedux/storeAddressMain';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={storeAddressMain}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
