import { useLocation, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Box,
    Button,
    styled,
} from '@mui/material';
import { LocalHospital, People, Home } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderRadius:0,
}));

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 2rem',
});

const NavButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'isActive'
})(({ theme, isActive }) => ({
    color: 'white',
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
}));

const Logo = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

const Layout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <StyledAppBar position="sticky">
                <StyledToolbar>
                    <Logo variant="h6" onClick={() => navigate('/')}>
                        <LocalHospital /> HMS
                    </Logo>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <NavButton
                            isActive={location.pathname === '/'}
                            onClick={() => navigate('/')}
                            startIcon={<Home />}
                        >
                            Home
                        </NavButton>
                        <NavButton
                            isActive={location.pathname === '/patients'}
                            onClick={() => navigate('/patients')}
                            startIcon={<People />}
                        >
                            Patients
                        </NavButton>
                        <NavButton
                            isActive={location.pathname === '/doctors'}
                            onClick={() => navigate('/doctors')}
                            startIcon={<LocalHospital />}
                        >
                            Doctors
                        </NavButton>
                    </Box>
                </StyledToolbar>
            </StyledAppBar>
            <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
                {children}
            </Container>
        </Box>
    );
};

export default Layout; 