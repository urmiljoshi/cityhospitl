import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import { Update } from '@mui/icons-material';


function DoctorsAdmin(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [dopen, setdOpen] = React.useState(false);
    const [did, setdid] = React.useState(false)
    const [update, setUpdate] = useState()



    const localDataFun = () => {
        let localData = JSON.parse(localStorage.getItem("Doctor"));
        if (localData !== null) {
            setData(localData);
          }

    }
    useEffect(() => {
        localDataFun();
    }, [])





    const handleClickOpen = () => {
        setOpen(true);
        setUpdate(false);
        formik.resetForm();
    };

    const handleDelete = (data) => {
        setdOpen(true)
        setdid(data.id)
    }

    const handleEdit = (data) => {
        setOpen(true);
        console.log(data);
        formik.setValues(data)
        setUpdate(true);
    }

    const handleDeleteData = () => {

        let localData = JSON.parse(localStorage.getItem("Doctor"))
        let Ddata = localData.filter((l) => l.id !== did)

        localStorage.setItem("Doctor", JSON.stringify(Ddata))
        setData(Ddata)
        setdOpen(false)

        console.log(Ddata);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleadd = (values) => {
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
        localDataFun()
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
            if (update) {
                handleUpdateData(values);
              }else{
                handleadd(values);
              }

        },
    });

    const handleUpdateData = (values) => {
        const localData = JSON.parse(localStorage.getItem("Doctor"))
        let uData = localData.map((l) =>{
          if (l.id == values.id) {
             return values
          }else{
             return l;
          }
        })
    
         setData(uData);
         localStorage.setItem("Doctor", JSON.stringify(uData));
         handleClose();
      }
    

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'name', width: 130 },
        { field: 'age', headerName: 'age', width: 130 },

        {
            field: '',
            headerName: 'Action',
            width: 90,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={() => handleEdit(params.row)}>
                        <ModeIcon />
                    </IconButton>
                </>
            )
        },
    ];
    const { handleChange, handleSubmit, errors, touched, values, handleBlur } = formik;

    console.log(errors, touched);

    return (
        <div>
            <h1>DoctorsAdmin</h1>
            <br />
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>

                                <TextField

                                    margin="dense"
                                    id="name"
                                    name="name"
                                    label="Doctor name"
                                    fullWidth
                                    variant="standard"
                                    value={values.name}
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
                                    value={values.age}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.age && touched.age ? errors.age : ''}</p>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type='submit'>{update ? "Update" : "Add"}</Button>
                                </DialogActions>
                            </DialogContent>
                        </Form>
                    </Formik>
                </Dialog>
                <Dialog open={dopen} onClose={handleClose}>
                    <DialogTitle>Delete DoctorDate</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>No</Button>
                        <Button onClick={() => handleDeleteData()}>Yes </Button>
                    </DialogActions>
                </Dialog>

            </div>
        </div>

    );
}

export default DoctorsAdmin;