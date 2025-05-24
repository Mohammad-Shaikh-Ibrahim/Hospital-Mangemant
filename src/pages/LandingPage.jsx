import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Typography,
    Box,
    Button,
    Grid,
    Paper,
    styled,
} from '@mui/material';
import { People, LocalHospital } from '@mui/icons-material';

const HeroSection = styled(Box)(({ theme }) => ({
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(45deg, #8b0019 30%, #c62828 90%)',
    color: 'white',
    padding: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: 'center',
    height: '100%',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    '&:hover': {
        transform: 'translateY(-8px)',
    },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    fontSize: '4rem',
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
}));

const CardsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(3),
    justifyContent: 'center',
    width: '100%',
}));

function LandingPage() {
    const navigate = useNavigate();

    return (
        <Box>
            <HeroSection>
                <Container>
                    <Grid container spacing={4} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" component="h1" gutterBottom>
                                Hospital Management System
                            </Typography>
                            <Typography variant="h5" paragraph>
                                Efficiently manage your hospital's patients and doctors with our comprehensive management system.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CardsContainer>
                                <StyledPaper elevation={3} sx={{ flex: 1, maxWidth: '400px' }}>
                                    <IconWrapper>
                                        <People fontSize="inherit" />
                                    </IconWrapper>
                                    <Typography variant="h5" gutterBottom color="primary">
                                        Patient Management
                                    </Typography>
                                    <Typography paragraph color="text.secondary">
                                        Manage patient records, appointments, and medical history efficiently.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        onClick={() => navigate('/patients')}
                                    >
                                        Manage Patients
                                    </Button>
                                </StyledPaper>
                                <StyledPaper elevation={3} sx={{ flex: 1, maxWidth: '400px' }}>
                                    <IconWrapper>
                                        <LocalHospital fontSize="inherit" />
                                    </IconWrapper>
                                    <Typography variant="h5" gutterBottom color="primary">
                                        Doctor Management
                                    </Typography>
                                    <Typography paragraph color="text.secondary">
                                        Handle doctor schedules, specialties, and patient assignments.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        onClick={() => navigate('/doctors')}
                                    >
                                        Manage Doctors
                                    </Button>
                                </StyledPaper>
                            </CardsContainer>
                        </Grid>
                    </Grid>
                </Container>
            </HeroSection>
        </Box>
    );
}

export default LandingPage; 