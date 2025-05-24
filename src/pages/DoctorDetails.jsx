import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DoctorContext } from '../contexts/DoctorContext';
import {
    Container,
    Typography,
    Paper,
    Grid,
    Button,
    Box,
    Divider,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import BadgeIcon from '@mui/icons-material/Badge';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NoteIcon from '@mui/icons-material/Note';

const StyledContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 2rem;
  margin-top: 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled(Box)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #8b0019;
`;

const StyledTextField = styled(TextField)`
  .MuiInputBase-input {
    color: #333;
    font-size: 1rem;
  }
  .MuiInputLabel-root {
    color: #666;
  }
  .MuiOutlinedInput-root {
    background-color: #f8f9fa;
    &:hover {
      background-color: #f1f3f5;
    }
  }
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
  .MuiInputBase-input {
    color: #333;
    font-size: 1rem;
  }
  .MuiInputLabel-root {
    color: #666;
  }
  .MuiOutlinedInput-root {
    background-color: #f8f9fa;
    &:hover {
      background-color: #f1f3f5;
    }
  }
`;

const DoctorHeader = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const DoctorAvatar = styled(Box)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #8b0019;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

function DoctorDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { doctors } = useContext(DoctorContext);
    const doctor = doctors.find(d => d.id === parseInt(id));

    if (!doctor) {
        return (
            <StyledContainer>
                <Typography variant="h4" color="error">
                    Doctor not found
                </Typography>
                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate('/doctors')}
                    sx={{ mt: 2 }}
                >
                    Back to Doctors
                </Button>
            </StyledContainer>
        );
    }

    return (
        <StyledContainer>
            <ButtonContainer>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate('/doctors')}
                >
                    Back to Doctors
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon />}
                    onClick={() => navigate(`/edit-doctor/${doctor.id}`)}
                >
                    Edit Doctor
                </Button>
            </ButtonContainer>

            <StyledPaper>
                <DoctorHeader>
                    <DoctorAvatar>
                        <PersonIcon sx={{ fontSize: 40 }} />
                    </DoctorAvatar>
                    <Box>
                        <Typography variant="h4" gutterBottom>
                            {`Dr. ${doctor.firstName} ${doctor.lastName}`}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Doctor ID: {doctor.id}
                        </Typography>
                    </Box>
                </DoctorHeader>

                <Grid container spacing={3}>
                    {/* Basic Information Section */}
                    <Grid size={12}>
                        <SectionTitle variant="h6">
                            <PersonIcon /> Basic Information
                        </SectionTitle>
                        <Divider sx={{ mb: 2 }} />
                    </Grid>

                    <Grid size={5}>
                        <StyledTextField
                            fullWidth
                            label="Specialization"
                            value={doctor.specialization || ''}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>

                    <Grid size={5}>
                        <StyledFormControl>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                value={doctor.gender || ''}
                                label="Gender"
                                readOnly
                            >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>
                        </StyledFormControl>
                    </Grid>

                    {/* Contact Information Section */}
                    <Grid size={12}>
                        <SectionTitle variant="h6">
                            <PhoneIcon /> Contact Information
                        </SectionTitle>
                        <Divider sx={{ mb: 2 }} />
                    </Grid>

                    <Grid size={5}>
                        <StyledTextField
                            fullWidth
                            label="Phone"
                            value={doctor.phone || ''}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>

                    <Grid size={5}>
                        <StyledTextField
                            fullWidth
                            label="Email"
                            value={doctor.email || ''}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>

                    <Grid size={12}>
                        <StyledTextField
                            fullWidth
                            label="Address"
                            value={doctor.address || ''}
                            multiline
                            rows={2}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>

                    {/* Professional Information Section */}
                    <Grid size={12}>
                        <SectionTitle variant="h6">
                            <WorkIcon /> Professional Information
                        </SectionTitle>
                        <Divider sx={{ mb: 2 }} />
                    </Grid>

                    <Grid size={12}>
                        <StyledTextField
                            fullWidth
                            label="Qualifications"
                            value={doctor.qualifications || ''}
                            multiline
                            rows={3}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>

                    <Grid size={5}>
                        <StyledTextField
                            fullWidth
                            label="License Number"
                            value={doctor.licenseNumber || ''}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>

                    <Grid size={5}>
                        <StyledTextField
                            fullWidth
                            label="Years of Experience"
                            value={doctor.experience || ''}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>

                    {/* Working Hours Section */}
                    <Grid size={12}>
                        <SectionTitle variant="h6">
                            <AccessTimeIcon /> Working Hours
                        </SectionTitle>
                        <Divider sx={{ mb: 2 }} />
                    </Grid>

                    <Grid size={5}>
                        <StyledTextField
                            fullWidth
                            label="Working Days"
                            value={doctor.workingDays || ''}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>

                    <Grid size={5}>
                        <StyledTextField
                            fullWidth
                            label="Working Hours"
                            value={doctor.workingHours || ''}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>

                    {/* Additional Information Section */}
                    <Grid size={12}>
                        <SectionTitle variant="h6">
                            <BadgeIcon /> Additional Information
                        </SectionTitle>
                        <Divider sx={{ mb: 2 }} />
                    </Grid>

                    <Grid size={12}>
                        <StyledTextField
                            fullWidth
                            label="Languages Spoken"
                            value={doctor.languages || ''}
                            multiline
                            rows={2}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>

                    <Grid size={12}>
                        <StyledTextField
                            fullWidth
                            label="Insurance Accepted"
                            value={doctor.insuranceAccepted || ''}
                            multiline
                            rows={2}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>

                    {/* Notes Section */}
                    <Grid size={12}>
                        <SectionTitle variant="h6">
                            <NoteIcon /> Notes
                        </SectionTitle>
                        <Divider sx={{ mb: 2 }} />
                    </Grid>

                    <Grid size={12}>
                        <StyledTextField
                            fullWidth
                            label="Notes"
                            value={doctor.notes || ''}
                            multiline
                            rows={3}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>
                </Grid>
            </StyledPaper>
        </StyledContainer>
    );
}

export default DoctorDetails; 