import React, {useState, useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import * as Yup from "yup";

const validate = ({ name, email, password, useroptions }) => {
    const errors = {};
    if (!name) {
        errors.name = 'You need a name!'
    } else if (name.length < 3) {
        errors.name = 'You need a longer name!'
    }


if (!email) {
    errors.email = 'You need a valid email address'
}
if (!useroptions) {
    errors.useroptions = 'Please Select One Option.'
}
return errors;
}

function FormikUserForm() {

return (
   
    
<Formik 
onSubmit={(values, tools) => {
tools.resetForm();

   
}}
validate={validate}
initialValues={{ name: '', email: '', password: ''}}
render={props => {
    return(
        <Form>
            <Field name='name' type='text' placeholder='Enter Name' />
            <ErrorMessage name='name' component='div' className='red' />

            <Field name='email'  type='text' placeholder='Enter Email'/>
            <ErrorMessage name='email' component='div' className='red' />

            <Field name='password'  type='text' placeholder='Enter Password'/>
            <ErrorMessage name='password' component='div' className='red' />

            <Field className="useroptions" component="select" name="options" >
                <option>Please Choose an Option</option>
                <option value="React-dev">React Developer</option>
                <option value="Front-End">Front End Developer</option>
                <option value="Back-End">Back End Developer</option>
                <ErrorMessage name='user-options' component='div' className='red' />
            </Field>
            <label className="checkbox">
         
               I Agree To Terms and Conditions
            <Field className="user-field" type="checkbox" name="terms" />
            </label> 

            <input type='submit' />
        </Form>
       
    )
    
}}
/>

)
}

 

export default FormikUserForm;