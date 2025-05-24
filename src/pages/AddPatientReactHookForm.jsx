import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { PatientContext } from '../contexts/PatientContext';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Paper,
} from '@mui/material';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 2rem;
  margin-top: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const AddPatientReactHookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { patients, addPatient, editPatient } = useContext(PatientContext);
  const isEditMode = Boolean(id);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      phone: '',
      email: '',
      address: '',
      medicalHistory: '',
      currentMedications: '',
      allergies: '',
      bloodType: '',
      emergencyContact: '',
      insuranceInfo: '',
      lastVisit: '',
      nextAppointment: '',
      notes: ''
    }
  });

  useEffect(() => {
    if (isEditMode) {
      const patient = patients.find(p => p.id === parseInt(id));
      if (patient) {
        reset(patient);
      }
    }
  }, [id, patients, reset, isEditMode]);

  const onSubmit = (data) => {
    if (isEditMode) {
      editPatient({ ...data, id: parseInt(id) });
    } else {
      addPatient(data);
    }
    navigate('/patients');
  };

  return (
    <StyledContainer>
      <Typography variant="h4" component="h1" gutterBottom>
        {isEditMode ? 'Edit Patient' : 'Add New Patient'}
      </Typography>
      <StyledPaper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item size={5}>
              <TextField
                fullWidth
                label="First Name"
                {...register('firstName', { required: 'First name is required' })}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            </Grid>
            <Grid item size={5}>
              <TextField
                fullWidth
                label="Last Name"
                {...register('lastName', { required: 'Last name is required' })}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            </Grid>
            <Grid item size={5}>
              <TextField
                fullWidth
                label="Age"
                type="number"
                {...register('age', {
                  required: 'Age is required',
                  min: { value: 0, message: 'Age must be positive' }
                })}
                error={!!errors.age}
                helperText={errors.age?.message}
              />
            </Grid>
            <Grid item size={5}>
              <TextField
                fullWidth
                select
                label="Gender"
                {...register('gender', { required: 'Gender is required' })}
                error={!!errors.gender}
                helperText={errors.gender?.message}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item size={5}>
              <TextField
                fullWidth
                label="Phone"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10-digit phone number'
                  }
                })}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            </Grid>
            <Grid item size={5}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address'
                  }
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item size={12}>
              <TextField
                fullWidth
                label="Address"
                multiline
                rows={2}
                {...register('address')}
              />
            </Grid>
            <Grid item size={12}>
              <TextField
                fullWidth
                label="Medical History"
                multiline
                rows={3}
                {...register('medicalHistory')}
              />
            </Grid>
            <Grid item size={5}>
              <TextField
                fullWidth
                label="Current Medications"
                multiline
                rows={2}
                {...register('currentMedications')}
              />
            </Grid>
            <Grid item size={5}>
              <TextField
                fullWidth
                label="Allergies"
                multiline
                rows={2}
                {...register('allergies')}
              />
            </Grid>
            <Grid item size={5}>
              <TextField
                fullWidth
                select
                label="Blood Type"
                {...register('bloodType')}
              >
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="A-">A-</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="B-">B-</MenuItem>
                <MenuItem value="AB+">AB+</MenuItem>
                <MenuItem value="AB-">AB-</MenuItem>
                <MenuItem value="O+">O+</MenuItem>
                <MenuItem value="O-">O-</MenuItem>
              </TextField>
            </Grid>
            <Grid item size={5}>
              <TextField
                fullWidth
                label="Emergency Contact"
                {...register('emergencyContact')}
              />
            </Grid>
            <Grid item size={5}>
              <TextField
                fullWidth
                label="Last Visit"
                type="date"
                InputLabelProps={{ shrink: true }}
                {...register('lastVisit')}
              />
            </Grid>
            <Grid item size={5}>
              <TextField
                fullWidth
                label="Next Appointment"
                type="date"
                InputLabelProps={{ shrink: true }}
                {...register('nextAppointment')}
              />
            </Grid>
            <Grid item size={5}>
              <TextField
                fullWidth
                label="Insurance Information"
                multiline
                rows={2}
                {...register('insuranceInfo')}
              />
            </Grid>
            <Grid item size={12}>
              <TextField
                fullWidth
                label="Notes"
                multiline
                rows={3}
                {...register('notes')}
              />
            </Grid>
          </Grid>
          <ButtonContainer>
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              {isEditMode ? 'Update Patient' : 'Add Patient'}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate('/patients')}
            >
              Cancel
            </Button>
          </ButtonContainer>
        </form>
      </StyledPaper>
    </StyledContainer>
  );
};

export default AddPatientReactHookForm;