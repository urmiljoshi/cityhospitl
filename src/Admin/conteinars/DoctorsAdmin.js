import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';


function DoctorsAdmin(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleadd= (values) => {
        let localData = JSON.parse(localStorage.getItem("Doctor"))
        let id = Math.floor(Math.random() * 1000);
        let data = { id: id, ...values }
        console.log(localData, data);
        if (localData === null) {
          localStorage.setItem("Doctor", JSON.stringify([data]))
        } else {
          localData.push(data);
          localStorage.setItem("Doctor", JSON.stringify(localData))
        }
        setOpen(false);
    
        formik.resetForm();
      }
    
    

    let schema = yup.object().shape({

        name: yup.string().required('Please Enter name'),
        age: yup.number().required('please Enter your Number'),

    });

    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            name: '',
            age: '',
        },

        onSubmit: values => {
        handleadd  (values);

        },
    });

    const { handleChange, handleSubmit, errors, touched, handleBlur } = formik;



    return (
        <div>
            <h1>DoctorsAdmin</h1>
            <br />
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <Formik  values={formik}>
                        <Form  onSubmit={handleSubmit}>
                            <DialogContent>

                                <TextField
                                    
                                    margin="dense"
                                    id="name"
                                    name="name"
                                    label="Doctor name"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.name && touched.name ? errors.name : ''}</p>
                                <TextField
                                    
                                    margin="dense"
                                    id="age"
                                    name="age"
                                    label="Doctor Number"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.age && touched.age ? errors.age : ''}</p>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type='submit'>Add</Button>
                                </DialogActions>
                            </DialogContent>


                        </Form>
                    </Formik>
                </Dialog>
            </div>
        </div>

    );
}

export default DoctorsAdmin;