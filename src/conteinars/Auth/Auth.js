import React, { useRef, useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Auth(props) {
    const [userType, setuserType] = useState('Login');
    const [reset, setreset] = useState(false)

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    function handel() { 
        passRef.current.focus();
        passRef.current.style.border = "2px solid yellow"
        console.log(emailRef.current.value);
        console.log(passRef.current.value);

    }
    function handelon() {
        nameRef.current.focus();
        nameRef.current.style.border = '2px solid blue'
    }

    let authschema, initval;

    if (userType === 'Singup' && reset === false) {
        authschema = {
            name: yup.string().required("please Enter your name"),
            email: yup.string().required("please Enter valid email").email("please Enter email"),
            pssword: yup.string().required("Enter your pssword").min(8)
        }
        initval = {
            name: '',
            email: '',
            pssword: '',
        }

        

    } else if (userType === 'Login' && reset === false) {
        authschema = {
            email: yup.string().required("please Enter valid email").email("please Enter email"),
            pssword: yup.string().required("Enter your pssword").min(8),
        }
        initval = {
            email: '',
            pssword: '',
        }
    } else if (reset === true) {
        authschema = {
            email: yup.string().required("please Enter  email").email("please Enter valid email"),
        }
        initval = {
            email: '',
        }
    }

    console.log(authschema, initval);
    let schema = yup.object().shape(authschema);

    const formik = useFormik({
        initialValues: initval,
        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
        },
    });

    const { handleChange, errors, handleSubmit,touched,handleBlur } = formik;

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        reset === true ?
                            <h2>Reset password</h2>
                            :

                            userType === 'Login' ?
                                <h2>Login</h2>
                                :
                                <h2>Singup</h2>
                    }


                </div>
                <Formik value={formik}>
                    <Form onSubmit={handleSubmit} className="php-email-form">

                        <div className="col-md-4 form-group">
                            {
                                reset === true ?
                                    null
                                    :
                                    userType === 'Login' ?
                                        null
                                        :
                                        <div className="row">
                                            <input 
                                            // ref={nameRef}
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name" placeholder="Your Name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                            <p>{errors.name && touched.name ? errors.name :'' }</p>
                                            <div className="validate" />
                                        </div>
                            }


                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input 
                                    ref={emailRef}
                                    type="email"
                                    className="form-control"
                                    name="email" id="email"
                                    placeholder="Your Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <p>{errors.email && touched.email ? errors.email :'' }</p>
                                <div className="validate" />
                            </div>

                        </div>
                        {
                            reset === true ?
                                null
                                :
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input ref={passRef}
                                            type="tel"
                                            className="form-control"
                                            name="pssword" id="pssword"
                                            placeholder="Your pssword"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        <p>{errors.pssword && touched.pssword ? errors.pssword :'' }</p>
                                        <div className="validate" />
                                    </div>
                                </div>
                        }


                        {
                            reset === true ?
                                <div className="text-center"><button type="submit">submit</button></div>
                                :
                                userType === 'Login' ?
                                    <div className="text-center"><button type="submit" >Login</button></div>
                                    :
                                    <div className="text-center"><button type="submit"  >sigup</button></div>
                        }


                    </Form>
                </Formik>
                {
                    userType === 'Login' ?
                        <div>Create a new Account1 <button onClick={() => { setreset(false); setuserType('Singup') }}>Signup</button></div>
                        :
                        <div>Already have Account1 <button onClick={() => { setreset(false); setuserType('Login') }}>Login</button></div>

                }
                <span>Forget password <button onClick={() => setreset(true)}>Click Here</button></span>

            </div>
        </section>


    );
}

export default Auth;