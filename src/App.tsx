import { Router } from "./Routes/router";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {

  return (
    <ThemeProvider theme={theme}>
    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <Router />
    </div>
    </ThemeProvider>
  )
};

export default App;
