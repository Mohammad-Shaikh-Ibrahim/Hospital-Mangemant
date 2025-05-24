import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Container,
    Typography,
    Paper,
    Button,
    Box,
    Grid,
    styled,
    Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import EmergencyIcon from '@mui/icons-material/Emergency';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NoteIcon from '@mui/icons-material/Note';
import { PatientContext } from '../contexts/PatientContext';
import ErrorPage from '../components/shared/ErrorPage';

const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: theme.spacing(6),
    background: 'white',
    boxSizing: 'border-box',
    maxWidth: '90%',
    margin: 'auto',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    flex: '1 1 45%',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
    borderRadius: '16px',
    padding: theme.spacing(4),
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    fontWeight: 600,
}));

const PatientHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: `${theme.palette.primary.light}10`,
    borderRadius: theme.spacing(1),
}));

const PatientAvatar = styled(Box)(({ theme }) => ({
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '2rem',
}));

const InfoItem = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

const Label = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: '0.875rem',
    marginBottom: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

const Value = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 500,
    paddingLeft: theme.spacing(3),
}));

const ActionButton = styled(Button)(({ theme }) => ({
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
    fontSize: '1rem',
    textTransform: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
    },
    '& .MuiSvgIcon-root': {
        fontSize: '1.2rem',
    },
}));

const PatientDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { patients } = useContext(PatientContext);
    const patient = patients.find(p => p.id === parseInt(id));

    if (!patient) {
        return (
            <ErrorPage
                errorCode="404"
                title="Patient Not Found"
                message="The patient you're looking for doesn't exist or has been removed."
                showHomeButton={true}
                showBackButton={true}
            />
        );
    }

    return (
        <StyledContainer>
            <StyledPaper>
                <ButtonContainer>
                    <ActionButton
                        variant="contained"
                        startIcon={<ArrowBackIcon />}
                        onClick={() => navigate('/patients')}
                    >
                        Back to Patients
                    </ActionButton>
                    <ActionButton
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={() => navigate(`/add-patient/${patient.id}`)}
                    >
                        Edit Patient
                    </ActionButton>
                </ButtonContainer>

                <PatientHeader>
                    <PatientAvatar>
                        <PersonIcon sx={{ fontSize: 40 }} />
                    </PatientAvatar>
                    <Box>
                        <Typography variant="h4" gutterBottom>
                            {`${patient.firstName} ${patient.lastName}`}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Patient ID: {patient.id}
                        </Typography>
                    </Box>
                </PatientHeader>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <SectionTitle variant="h6">
                            <PersonIcon /> Basic Information
                        </SectionTitle>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <InfoItem>
                                    <Label>
                                        <PersonIcon fontSize="small" /> Full Name
                                    </Label>
                                    <Value>{`${patient.firstName} ${patient.lastName}`}</Value>
                                </InfoItem>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InfoItem>
                                    <Label>
                                        <PersonIcon fontSize="small" /> Gender
                                    </Label>
                                    <Value>{patient.gender}</Value>
                                </InfoItem>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InfoItem>
                                    <Label>
                                        <CalendarTodayIcon fontSize="small" /> Date of Birth
                                    </Label>
                                    <Value>{patient.dateOfBirth}</Value>
                                </InfoItem>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InfoItem>
                                    <Label>
                                        <BloodtypeIcon fontSize="small" /> Blood Type
                                    </Label>
                                    <Value>{patient.bloodType}</Value>
                                </InfoItem>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <SectionTitle variant="h6">
                            <PhoneIcon /> Contact Information
                        </SectionTitle>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <InfoItem>
                                    <Label>
                                        <PhoneIcon fontSize="small" /> Phone
                                    </Label>
                                    <Value>{patient.phone}</Value>
                                </InfoItem>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InfoItem>
                                    <Label>
                                        <EmailIcon fontSize="small" /> Email
                                    </Label>
                                    <Value>{patient.email}</Value>
                                </InfoItem>
                            </Grid>
                            <Grid item xs={12}>
                                <InfoItem>
                                    <Label>
                                        <LocationOnIcon fontSize="small" /> Address
                                    </Label>
                                    <Value>{patient.address}</Value>
                                </InfoItem>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <SectionTitle variant="h6">
                            <MedicalServicesIcon /> Medical Information
                        </SectionTitle>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <InfoItem>
                                    <Label>
                                        <MedicalServicesIcon fontSize="small" /> Medical History
                                    </Label>
                                    <Value>{patient.medicalHistory || 'No medical history recorded'}</Value>
                                </InfoItem>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InfoItem>
                                    <Label>
                                        <MedicalServicesIcon fontSize="small" /> Allergies
                                    </Label>
                                    <Value>{patient.allergies || 'No allergies recorded'}</Value>
                                </InfoItem>
                            </Grid>
                            <Grid item xs={12}>
                                <InfoItem>
                                    <Label>
                                        <MedicalServicesIcon fontSize="small" /> Current Medications
                                    </Label>
                                    <Value>{patient.currentMedications || 'No current medications'}</Value>
                                </InfoItem>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <SectionTitle variant="h6">
                            <EmergencyIcon /> Emergency Contact
                        </SectionTitle>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <InfoItem>
                                    <Label>
                                        <PersonIcon fontSize="small" /> Name
                                    </Label>
                                    <Value>{patient.emergencyContact?.name || 'Not specified'}</Value>
                                </InfoItem>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InfoItem>
                                    <Label>
                                        <PersonIcon fontSize="small" /> Relationship
                                    </Label>
                                    <Value>{patient.emergencyContact?.relationship || 'Not specified'}</Value>
                                </InfoItem>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InfoItem>
                                    <Label>
                                        <PhoneIcon fontSize="small" /> Phone
                                    </Label>
                                    <Value>{patient.emergencyContact?.phone || 'Not specified'}</Value>
                                </InfoItem>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <SectionTitle variant="h6">
                            <NoteIcon /> Notes
                        </SectionTitle>
                        <Divider sx={{ mb: 2 }} />
                        <InfoItem>
                            <Value>{patient.notes || 'No notes available'}</Value>
                        </InfoItem>
                    </Grid>
                </Grid>
            </StyledPaper>
        </StyledContainer>
    );
};

export default PatientDetails; 