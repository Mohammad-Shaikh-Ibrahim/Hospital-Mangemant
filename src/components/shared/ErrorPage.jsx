import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    Button,
    Paper,
    styled,
    keyframes,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
`;

const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
`;

const StyledContainer = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `linear-gradient(135deg, ${theme.palette.primary.light}20 0%, ${theme.palette.primary.main}20 100%)`,
    padding: theme.spacing(2),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(6),
    textAlign: 'center',
    maxWidth: 600,
    width: '100%',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    },
}));

const ErrorIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
    fontSize: '120px',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
    animation: `${float} 3s ease-in-out infinite`,
}));

const ErrorCode = styled(Typography)(({ theme }) => ({
    fontSize: '72px',
    fontWeight: 700,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    animation: `${pulse} 2s ease-in-out infinite`,
    textShadow: `2px 2px 4px ${theme.palette.primary.light}40`,
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    justifyContent: 'center',
    marginTop: theme.spacing(4),
}));

const StyledButton = styled(Button)(({ theme }) => ({
    padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
    borderRadius: '12px',
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
    },
}));

const ErrorPage = ({
    errorCode = '404',
    title = 'Page Not Found',
    message = "Oops! The page you're looking for doesn't exist.",
    showHomeButton = true,
    showBackButton = true,
}) => {
    const navigate = useNavigate();

    return (
        <StyledContainer>
            <StyledPaper elevation={3}>
                <ErrorIcon />
                <ErrorCode variant="h1">
                    {errorCode}
                </ErrorCode>
                <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                    {title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    {message}
                </Typography>
                <ButtonContainer>
                    {showBackButton && (
                        <StyledButton
                            variant="outlined"
                            color="primary"
                            startIcon={<ArrowBackIcon />}
                            onClick={() => navigate(-1)}
                        >
                            Go Back
                        </StyledButton>
                    )}
                    {showHomeButton && (
                        <StyledButton
                            variant="contained"
                            color="primary"
                            startIcon={<HomeIcon />}
                            onClick={() => navigate('/')}
                        >
                            Go Home
                        </StyledButton>
                    )}
                </ButtonContainer>
            </StyledPaper>
        </StyledContainer>
    );
};

export default ErrorPage; 