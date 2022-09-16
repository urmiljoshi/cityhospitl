import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Appointment(props) {
    let Appointmentschema ,int;

    Appointmentschema ={
        name: yup.string().required("please Enter your name"),
        email: yup.string().required("please Enter valid email").email("please Enter email"),
        phone: yup.string().required("Enter Your Phone Number"),
        date: yup.string().required("Please Enter Your appointment_date "),
        department: yup.string().required("Select your department"),
        message: yup.string().required("Enter Your message"),
    }
    int  = {
        name:'',
        email:'',
        phone:'',
        date:'',
        department:'',
        message:'',
    }
    let schema = yup.object().shape(Appointmentschema);

    const formik = useFormik({
        initialValues: int,
        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
        },
    });

    const { handleChange, errors, handleSubmit,touched,handleBlur } = formik;

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
                    <Form onSubmit={handleSubmit}  action method="post" role="form" className="php-email-form">
                        <div className="row">
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
                                    />
                                    <p>{errors.name && touched.name ?errors.name :''}</p>
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
                                      />
                                    <p>{errors.email && touched.email ?errors.email :''}</p>
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
                                     />
                                     <p>{errors.phone  && touched.phone ?errors.phone :''}</p>
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
                                    />
                                    <p>{errors.date  && touched.date ?errors.date :''}</p>
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select 
                                name="department"
                                 id="department" 
                                 className="form-select"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 >
                                    <option value>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </select>
                                <p>{errors.department  && touched.department ?errors.department :''}</p>
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea 
                            className="form-control"
                             name="message" rows={5}
                              placeholder="Message (Optional)"
                               defaultValue={""}
                               onBlur={handleBlur}
                               onChange={handleChange}
                               />
                               <p>{errors.message  && touched.message?errors.message :''}</p>
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Make an Appointment</button></div>
                    </Form>
                    </Formik>
                </div>
            </section>

        </div>
    );
}

export default Appointment;