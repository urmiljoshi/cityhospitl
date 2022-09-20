import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MedicinAdmin(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
            <h1>MedicinAdmin</h1>
            <br/>
            <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      MedicinAdmin      
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>MedicinAdmin</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Add Medicin"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Price"
            name="Price"
            label="Price"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Qnt"
            name="Qnt"
            label=" Qntity"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="expiry"
            name="expiry"
            label="expiry"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add Medicin</Button>
        </DialogActions>
      </Dialog>
    </div>
        </div>
        
    );
}

export default MedicinAdmin;