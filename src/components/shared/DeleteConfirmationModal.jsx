import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import styled from 'styled-components';

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: 8px;
  }
`;

const StyledDialogTitle = styled(DialogTitle)`
  color: #b92031;
  font-weight: 600;
`;

const StyledButton = styled(Button)`
  &.confirm-button {
    background-color: #b92031;
    &:hover {
      background-color: #8b1724;
    }
  }
`;

const DeleteConfirmationModal = ({ open, onClose, onConfirm, patientName }) => {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
    >
      <StyledDialogTitle id="delete-dialog-title">
        Confirm Deletion
      </StyledDialogTitle>
      <DialogContent>
        <DialogContentText id="delete-dialog-description">
          Are you sure you want to delete {patientName}? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <StyledButton
          onClick={onConfirm}
          color="primary"
          variant="contained"
          className="confirm-button"
          autoFocus
        >
          Delete
        </StyledButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default DeleteConfirmationModal; 