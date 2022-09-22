import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function MedicinAdmin(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleadd = (values) => {
    let localData = JSON.parse(localStorage.getItem("Medicin"))
    let id = Math.floor(Math.random() * 1000);
    let data = { id: id, ...values }
    console.log(localData, data);
    if (localData === null) {
      localStorage.setItem("Medicin", JSON.stringify([data]))
    } else {
      localData.push(data);
      localStorage.setItem("Medicin", JSON.stringify(localData))
    }
    setOpen(false);

    formik.resetForm();
  }

  let schema = yup.object().shape({

    name: yup.string().required('Please Enter name'),
    Price: yup.number().required('please Enter Price'),
    Qnt: yup.string().required('please Enter Qnt'),
    expiry: yup.string().required('please Enter expiry'),
  });

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      name: '',
      Price: '',
      Qnt: '',
      expiry: '',
    },

    onSubmit: values => {
      handleadd(values);

    },
  });

  const { handleChange, handleSubmit, errors, touched, handleBlur } = formik;

  console.log(errors, touched);

  return (
    <div>
      <h1>MedicinAdmin</h1>
      <br />
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          MedicinAdmin
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>MedicinAdmin</DialogTitle>
          <Formik values={formik}>
            <Form onSubmit={handleSubmit} >
              <DialogContent>
                <TextField

                  margin="dense"
                  id="name"
                  name="name"
                  label="Add Medicin"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p>{errors.name && touched.name ? errors.name : ''}</p>
                <TextField

                  margin="dense"
                  id="Price"
                  name="Price"
                  label="Price"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p>{errors.Price && touched.Price ? errors.Price : ''}</p>
                <TextField

                  margin="dense"
                  id="Qnt"
                  name="Qnt"
                  label=" Qntity"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p>{errors.Qnt && touched.Qnt ? errors.Qnt : ''}</p>
                <TextField

                  margin="dense"
                  id="expiry"
                  name="expiry"
                  label="expiry"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p>{errors.expiry && touched.expiry ? errors.expiry : ''}</p>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type='submit'>Add </Button>
                </DialogActions>
              </DialogContent>
            </Form>
          </Formik>
        </Dialog>
      </div>
    </div>

  );
}

export default MedicinAdmin;