import React, { useState } from 'react';

function Auth(props) {
    const [userType , setuserType] =useState('Login/sigup');
    return (
        <section id="appointment" className="appointment">
        <div className="container">
            <div className="section-title">
                {
                    userType === 'Login' ?
                    <h2>Login</h2>
                    :
                    <h2>signup</h2>
                }
                
               
            </div>
            <div action method="post" role="form" className="php-email-form">
                
                    <div className="col-md-4 form-group">
                        {
                            userType ==='Login'?
                            null
                            :
                            <div className="row">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                            </div>
                        }
                        
                    
                </div>  
                <div className="row">
                <div className="col-md-4 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                        <div className="validate" />
                    </div>
                </div>
                <div className="row">
                <div className="col-md-4 form-group mt-3 mt-md-0">
                        <input type="tel" className="form-control" name="pssword" id="pssword" placeholder="Your pssword" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                    </div>
                </div>
                    
                    {
                        userType === 'Login'?
                        <div className="text-center"><button type="submit">Login</button></div>
                        :
                        <div className="text-center"><button type="submit">sigup</button></div>
                    }
                 
                 {
                    userType ==='Login'?
                    <div>Create a new Account1 <button onClick={() => setuserType('Singup')}>Signup</button></div>
                    :
                    <div>Already have Account1 <button onClick={() => setuserType('Login')}>Login</button></div>
                 }
               
            </div>
        </div>
    </section>


    );
}

export default Auth;