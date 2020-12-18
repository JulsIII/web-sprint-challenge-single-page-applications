import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from "react-router-dom";
import Nav from './pizza/Nav';
import Home from './pizza/Home';
import PizzaForm from './pizza/PizzaForm';
//import Confirm from './pizza/Confirm';
import UserList from "./pizza/FormData";
import * as yup from 'yup'
import formSchema from './validation/formSchema'


const defaultValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};

const defaultErrors = {
  name: '',
  email: '',
  password: '',
}

function App() {

  const [formValues, setFormValues] = useState(defaultValues);
  const [savedUserInfo, setSavedUserInfo] = useState([]); //users state
  const [errors, setErrors] = useState(defaultErrors); 
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const change = (evt) => {
  const { name, value } = evt.target;
  validate(name, value);
  setFormValues({ ...formValues, [name]: 
    evt.target.type === "checkbox" ? evt.target.checked : evt.target.value,
  });
};
 
 const submit = (evt) => {
 
  evt.preventDefault();
 
  axios
    .post("https://reqres.in/api/users", formValues)
    .then((res) => {
      setSavedUserInfo([res.data, ...savedUserInfo]);
    console.log(res.data);
  }).catch((err) => {
    console.log(err);
    debugger;
});

  const newData = {
    name: formValues.name.trim(),
    email: formValues.email.trimEnd(),
    password: formValues.name.trim(),
  };
  setSavedUserInfo([...savedUserInfo, newData]); 
  setFormValues(defaultValues);
};

const validate = (name, value) => {
  yup
    .reach(formSchema, name)
    .validate(value)
    .then((value) => {
      setErrors({ ...errors, [name]: "" });
    })
    .catch((err) => {
      setErrors({ ...errors, [name]: err.errors[0] }); 
    });
};

useEffect(() => {
  formSchema.isValid(formValues).then((valid) => {
    setButtonDisabled(!valid);
  });
}, [formValues]);

  return (
    <div>
      <Nav />

        <Route path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
         <PizzaForm formValues={formValues} change={change} submit={submit} buttonDisabled={buttonDisabled} errors={errors} />
        </Route>
        {/* <Route path='/pizza'>
         <Confirm />
        </Route> */}
        {/* <UserList tList={savedUserInfo} key={savedUserInfo.id}/> */}
    </div>
  );
}

//movies={movieList}
//exact
export default App;
