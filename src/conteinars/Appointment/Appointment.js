import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';

function Appointment(props) {
    const [Update, setUpdate] = useState(false);
    const history = useHistory();



    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    useEffect(() => {
        console.log(props.location.state);

        if (props.location.state !== null) {
            console.log(props.location.state);
            formik.setValues(props.location.state);
            setUpdate(true);
        }
    }, [])

    let Appointmentschema, int;


    Appointmentschema = {
        name: yup.string().required("please Enter your name")
            .min(2, "Mininum 2 characters")
            .max(30, "Maximum 30 characters")
            .matches(
                /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
                'please enter valid name'
            ),
        email: yup.string().required("please Enter valid email").email("please Enter email"),
        phone: yup.string().required("Please Enter Your Phone Number.").matches(phoneRegExp, 'Phone number is not valid').min(10, 'Enter min 10 digits').max(10, 'Enter max 10 digits'),
        date: yup.string().required("Please Enter Date.").matches(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/, "Enter Date in Format."),
        department: yup.string().required("Select your department"),
        message:
            yup.string()
                .min(2, 'minimum required 2 diget')
                .max(50, 'maximum required 50 diget')
                .required('pless enter messge'),
        Gender: yup.string().required("Please select Your gender"),
        Hobby: yup.array().min(1).of(yup.string().required()).required(),
    }
    const handleadd = () => {
        let localdata = JSON.parse(localStorage.getItem("apt"));

        let id = Math.floor(Math.random() * 1000);

        if (localdata === null) {
            localStorage.setItem("apt", JSON.stringify([{ "id": id, ...values }]));
        } else {
            localdata.push({ "id": id, ...values });
            localStorage.setItem("apt", JSON.stringify(localdata));
        }
        formik.resetForm();

        history.push("/Listappointment");
    }

    const UpdateData = (data) => {
        console.log(data);

        const localData = JSON.parse(localStorage.getItem("apt"));


        let udata = localData.map((l) => {
            if (l.id == data.id) {
                return data;
            } else {
                return l;
            }
        })

        localStorage.setItem("apt", JSON.stringify(udata));

        history.replace();
        setUpdate(false);
        history.push("/Listappointment");

    }


    let int1 = {
        name: '',
        email: '',
        phone: '',
        date: '',
        department: '',
        message: '',
        Gender: '',
        Hobby: [],
    }
    let schema = yup.object().shape(Appointmentschema);

    const formik = useFormik({
        initialValues: int1,
        validationSchema: schema,
        onSubmit: values => {
            if (Update) {
                UpdateData(values);
            } else {

                handleadd(values);
            }


        },
    });

    const { handleChange, errors, handleSubmit, touched, handleBlur, values } = formik;



    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <Formik>
                        <Form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form">
                            <div className="row">
                                <NavLink to={"/Listappointment"}>ListAppointment</NavLink>

                                <div className="col-md-4 form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control" id="name"
                                        placeholder="Your Name"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.name}
                                    />
                                    <p>{errors.name && touched.name ? <p>{errors.name}</p> : ''}</p>
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email" id="email"
                                        placeholder="Your Email"
                                        data-rule="email"
                                        data-msg="Please enter a valid email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                    />
                                    <p>{errors.email && touched.email ? <p>{errors.email}</p> : ''}</p>
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone" id="phone"
                                        placeholder="Your Phone"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.phone}
                                    />
                                    <p>{errors.phone && touched.phone ? <p>{errors.phone}</p> : ''}</p>
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input
                                        type="datetime"
                                        name="date"
                                        className="form-control datepicker" id="date"
                                        placeholder="Appointment Date"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.date}
                                    />
                                    <p>{errors.date && touched.date ? <p>{errors.date}</p> : ''}</p>
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select
                                        name="department"
                                        id="department"
                                        className="form-select"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.department}
                                    >
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                    <p>{errors.department && touched.department ? <p>{errors.department}</p> : ''}</p>
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    name="message" rows={5}
                                    placeholder="Message (Optional)"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.message}
                                />
                                <p>{errors.message && touched.message ? <p>{errors.message}</p> : ''}</p>
                                <div className="validate" />
                            </div>
                            <div>

                                <label><b>Gender:-</b></label>
                                <input type="radio" name="Gender" onBlur={handleBlur} value={"Male"} checked={values.Gender === "Male"} onChange={handleChange} />Male
                                <input type="radio" name="Gender" onBlur={handleBlur} value={"Female"} checked={values.Gender === "Female"} onChange={handleChange} />Female





                                <p>{errors.Gender && touched.Gender ? <p>{errors.Gender}</p> : ''}</p>
                            </div>
                            <div className="text-center">
                                <>
                                    <label><b>Hobby:-</b></label><br />
                                    <input type="checkbox" name="Hobby" value={"Traveling"} onBlur={handleBlur} checked={values.Hobby.some((h) => h === 'Traveling')} onChange={handleChange} />Traveling
                                    <input type="checkbox" name="Hobby" value={"Reading"} onBlur={handleBlur} checked={values.Hobby.some((h) => h === 'Reading')} onChange={handleChange} />Reading
                                    <input type="checkbox" name="Hobby" value={"Music"} onBlur={handleBlur} checked={values.Hobby.some((h) => h === 'Music')} onChange={handleChange} />Music
                                </>
                                <p>{errors.Hobby && touched.Hobby ? <p>{errors.Hobby}</p> : ''}</p>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">{Update ? "Update an Appointment" : "Make an Appointment"}</button></div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </div>
    );



}





export default Appointment;