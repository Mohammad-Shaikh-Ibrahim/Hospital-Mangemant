import { useForm, Controller } from 'react-hook-form';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Grid,
    TextField,
    Typography,
    MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
    StyledCard,
    StyledTitle,
    StyledButton,
    StyledCancelButton,
} from '../components/shared/FormStyles';

const specializations = [
    'Neurology',
    'Cardiology',
    'Pediatrics',
    'Dermatology',
    'Orthopedics',
    'Psychiatry',
    'General Medicine',
    'Other'
];

const DoctorRegistration = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            specialization: '',
            licenseNumber: '',
            experience: '',
            hospital: '',
        }
    });

    const onSubmit = (data) => {
        console.log(data);
        // Here you would typically send the data to your backend
        navigate('/');
    };

    return (
        <StyledCard>
            <StyledTitle variant="h4" gutterBottom>
                Doctor Registration
            </StyledTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    {/* First Name */}
                    <Grid size={5}>
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{
                                required: "First name is required",
                                pattern: {
                                    value: /^[^\d]*$/,
                                    message: "First name cannot contain numbers"
                                }
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="First Name *"
                                    fullWidth
                                    error={!!errors.firstName}
                                    helperText={errors.firstName?.message}
                                />
                            )}
                        />
                    </Grid>

                    {/* Last Name */}
                    <Grid size={5}>
                        <Controller
                            name="lastName"
                            control={control}
                            rules={{
                                required: "Last name is required",
                                pattern: {
                                    value: /^[^\d]*$/,
                                    message: "Last name cannot contain numbers"
                                }
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Last Name *"
                                    fullWidth
                                    error={!!errors.lastName}
                                    helperText={errors.lastName?.message}
                                />
                            )}
                        />
                    </Grid>

                    {/* Email */}
                    <Grid size={5}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email *"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            )}
                        />
                    </Grid>

                    {/* Phone */}
                    <Grid size={5}>
                        <Controller
                            name="phone"
                            control={control}
                            rules={{
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Phone number must be 10 digits"
                                }
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Phone Number *"
                                    fullWidth
                                    error={!!errors.phone}
                                    helperText={errors.phone?.message}
                                />
                            )}
                        />
                    </Grid>

                    {/* Specialization */}
                    <Grid size={5}>
                        <Controller
                            name="specialization"
                            control={control}
                            rules={{ required: "Specialization is required" }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    select
                                    label="Specialization *"
                                    fullWidth
                                    error={!!errors.specialization}
                                    helperText={errors.specialization?.message}
                                >
                                    {specializations.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}
                        />
                    </Grid>

                    {/* License Number */}
                    <Grid size={5}>
                        <Controller
                            name="licenseNumber"
                            control={control}
                            rules={{
                                required: "License number is required",
                                pattern: {
                                    value: /^[A-Z0-9]{6,}$/,
                                    message: "License number must be at least 6 characters"
                                }
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="License Number *"
                                    fullWidth
                                    error={!!errors.licenseNumber}
                                    helperText={errors.licenseNumber?.message}
                                />
                            )}
                        />
                    </Grid>

                    {/* Experience */}
                    <Grid size={5}>
                        <Controller
                            name="experience"
                            control={control}
                            rules={{
                                required: "Years of experience is required",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Please enter a valid number"
                                }
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Years of Experience *"
                                    fullWidth
                                    error={!!errors.experience}
                                    helperText={errors.experience?.message}
                                />
                            )}
                        />
                    </Grid>

                    {/* Hospital */}
                    <Grid size={5}>
                        <Controller
                            name="hospital"
                            control={control}
                            rules={{ required: "Hospital name is required" }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Hospital/Clinic Name *"
                                    fullWidth
                                    error={!!errors.hospital}
                                    helperText={errors.hospital?.message}
                                />
                            )}
                        />
                    </Grid>

                    {/* Buttons */}
                    <Grid size={12}>
                        <Box display="flex" justifyContent="flex-start" gap={2}>
                            <StyledButton
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Register
                            </StyledButton>
                            <StyledCancelButton
                                variant="outlined"
                                onClick={() => navigate('/')}
                            >
                                Cancel
                            </StyledCancelButton>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </StyledCard>
    );
};

export default DoctorRegistration; 