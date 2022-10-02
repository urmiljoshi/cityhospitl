import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import { useState } from 'react';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import { Update } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect , useState } from 'react';

function Pesant(props) {
    const [open, setOpen] = useState(false);
    const [dopen, setdOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [did, setdid] = React.useState(false)
    const [update, setUpdate] = useState()

    const localDataFun = () => {
        let localData = JSON.parse(localStorage.getItem("Pesant"));
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

        let localData = JSON.parse(localStorage.getItem("Pesant"))
        let Ddata = localData.filter((l) => l.id !== did)

        localStorage.setItem("Pesant", JSON.stringify(Ddata))
        setData(Ddata)
        setdOpen(false)

        console.log(Ddata);
    }

    const handleClose = () => {
        setOpen(false);
        setUpdate(false);
        formik.resetForm(false);
    };

    const handleadd = (values) => {
        let localData = JSON.parse(localStorage.getItem("Pesant"))
        let id = Math.floor(Math.random() * 1000);
        let data = { id: id, ...values }
        console.log(localData, data);
        if (localData === null) {
            localStorage.setItem("Pesant", JSON.stringify([data]))
        } else {
            localData.push(data);
            localStorage.setItem("Pesant", JSON.stringify(localData))
        }
        setOpen(false);
        localDataFun();

        formik.resetForm();
    }
    let schema = yup.object().shape({
        name: yup.string().required('please enter name'),
        age: yup.number().required('please Enter age'),
        email: yup.string().required('please Enter Email'),
        number: yup.number().required('please Enter Number'),
    });
    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            name: '',
            age: '',
            email: '',
            number: '',
        },
        onSubmit: values => {
            if (update) {
                handleUpdateData(values);
            } else {
                handleadd(values);
            }
        },
    });
    const handleUpdateData = (values) => {
        const localData = JSON.parse(localStorage.getItem("Pesant"))
        let uData = localData.map((l) => {
            if (l.id == values.id) {
                return values
            } else {
                return l;
            }
        })

        setData(uData);
        localStorage.setItem("Pesant", JSON.stringify(uData));
        handleClose();
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'name', width: 130 },
        { field: 'age', headerName: 'age', width: 130 },
        {
            field: 'email',
            headerName: 'email',
            type: 'number',
            width: 90,
        },
        {
            field: 'number',
            headerName: 'number',
            type: 'number',
            width: 90,
        },
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

    const { handleChange, handleSubmit, errors, values , touched, handleBlur } = formik;
    return (
        <div>
            <h1>Pesant Date</h1>
            <br />
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open Pesant Date
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
                    <DialogTitle>pesant</DialogTitle>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>
                                <TextField

                                    margin="dense"
                                    id="name"
                                    label="name"
                                    name="name"
                                    fullWidth
                                    variant="standard"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                <p>{errors.name && touched.name ? errors.name : ''}</p>

                                <TextField

                                    margin="dense"
                                    id="email"
                                    name="email"
                                    label="email"
                                    fullWidth
                                    variant="standard"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                <p>{errors.email && touched.email ? errors.email : ''}</p>
                                <TextField

                                    margin="dense"
                                    id="age"
                                    label="age"
                                    name="age"
                                    fullWidth
                                    variant="standard"
                                    value={values.age}
                                    onChange={handleChange}
                                    onBlur={handleBlur}


                                />
                                <p>{errors.age && touched.age ? errors.age : ''}</p>
                                <TextField

                                    margin="dense"
                                    id="Number"
                                    label="Number"
                                    name="number"
                                    fullWidth
                                    variant="standard"
                                    value={values.number}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                <p>{errors.number && touched.number ? errors.number : ''}</p>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type='submit'>{update ? "Update" :  "Add Pesant Date"}</Button>
                                </DialogActions>
                            </DialogContent>
                        </Form>
                    </Formik>
                </Dialog>
                <Dialog open={dopen} onClose={handleClose}>
                    <DialogTitle>Delete Pesant Date </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>No</Button>
                        <Button onClick={() => handleDeleteData()}>Yes </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Pesant;