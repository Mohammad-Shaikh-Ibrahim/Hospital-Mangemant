import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Typography,
    Paper,
    Button,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    styled,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DoctorContext } from '../contexts/DoctorContext';
import DeleteConfirmationModal from '../components/shared/DeleteConfirmationModal';

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

const HeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    borderBottom: `2px solid ${theme.palette.primary.light}20`,
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(2),
    '&.MuiTableCell-head': {
        backgroundColor: `${theme.palette.primary.light}20`,
        color: theme.palette.primary.main,
        fontWeight: 600,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:hover': {
        backgroundColor: `${theme.palette.primary.light}10`,
    },
}));

const DetailsButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1, 2),
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    '&:hover': {
        background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
        transform: 'scale(1.05)',
    },
}));

const AddButton = styled(Button)(({ theme }) => ({
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

const Doctors = () => {
    const { doctors, deleteDoctor } = useContext(DoctorContext);
    const navigate = useNavigate();
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [doctorToDelete, setDoctorToDelete] = useState(null);

    const handleDeleteClick = (doctor) => {
        setDoctorToDelete(doctor);
        setDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        if (doctorToDelete) {
            deleteDoctor(doctorToDelete.id);
            setDeleteModalOpen(false);
            setDoctorToDelete(null);
        }
    };

    const handleDeleteCancel = () => {
        setDeleteModalOpen(false);
        setDoctorToDelete(null);
    };

    const handleEditClick = (doctor) => {
        navigate(`/add-doctor/${doctor.id}`);
    };

    return (
        <StyledContainer>
            <StyledPaper>
                <HeaderContainer>
                    <Typography variant="h4" component="h1" color="primary">
                        Doctors
                    </Typography>
                    <AddButton
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => navigate('/add-doctor')}
                    >
                        Add Doctor
                    </AddButton>
                </HeaderContainer>

                <StyledTableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Specialization</StyledTableCell>
                                <StyledTableCell>Details</StyledTableCell>
                                <StyledTableCell>Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {doctors.map((doctor) => (
                                <StyledTableRow key={doctor.id}>
                                    <TableCell>{doctor.id}</TableCell>
                                    <TableCell>{`${doctor.firstName} ${doctor.lastName}`}</TableCell>
                                    <TableCell>{doctor.specialization}</TableCell>
                                    <TableCell>
                                        <DetailsButton
                                            onClick={() => navigate(`/doctor-details/${doctor.id}`)}
                                        >
                                            Read More
                                        </DetailsButton>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <IconButton
                                                color="primary"
                                                onClick={() => handleEditClick(doctor)}
                                                aria-label="edit"
                                            >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton
                                                color="error"
                                                onClick={() => handleDeleteClick(doctor)}
                                                aria-label="delete"
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </StyledTableContainer>
            </StyledPaper>

            <DeleteConfirmationModal
                open={deleteModalOpen}
                onClose={handleDeleteCancel}
                onConfirm={handleDeleteConfirm}
                doctorName={doctorToDelete?.firstName}
            />
        </StyledContainer>
    );
};

export default Doctors; 