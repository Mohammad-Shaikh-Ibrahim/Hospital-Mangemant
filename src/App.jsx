import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PatientProvider } from './contexts/PatientContext';
import { DoctorProvider } from './contexts/DoctorContext';
import theme from './theme/theme';
import AppRoutes from './routes/AppRoutes';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <PatientProvider>
            <DoctorProvider>
              <AppRoutes />
            </DoctorProvider>
          </PatientProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
