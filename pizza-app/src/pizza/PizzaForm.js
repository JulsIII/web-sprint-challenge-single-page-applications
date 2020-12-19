import React from 'react';
import { useHistory } from "react-router-dom";

export default function PizzaForm (props) {
    const { formValues, change, submit, buttonDisabled, errors } = props;
    return (
        <div>
        <form onSubmit={submit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={change}
            />
            <p>{errors.name}</p> 
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={change}
            /> 
           <p>{errors.email}</p>         
          </label>
          <label htmlFor="email">
            Password
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={change}
            />   
            <p>{errors.password}</p>        
          </label>

          <label htmlFor="pizzaSize">
            Pizza Size
            <select id="pizza-size" type="text" value={formValues.pizzaSize} onChange={change}>
            <option value="">------select size------</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          </label>

        <label htmlFor="topPepperoni">
          Pepperoni<input type="checkbox" name="topPepperoni" checked={formValues.topPepperoni} onChange={change}/> 
        </label>
        <label htmlFor="topSausage">
          Sausage<input type="checkbox" name="topSausage" checked={formValues.topSausage} onChange={change}/> 
        </label>
        <label htmlFor="topMushrooms">
          Mushrooms<input type="checkbox" name="topMushrooms" checked={formValues.topMushrooms} onChange={change}/> 
        </label>
        <label htmlFor="topOlives">
         Olives<input type="checkbox" name="topOlives" checked={formValues.topOlives} onChange={change}/> 
        </label>

        <label htmlFor="special">
            Special Instructions
            <input
              type="text"
              name="special"
              value={formValues.special}
              onChange={change}
            />
            <p>{errors.special}</p> 
          </label>

          <label htmlFor="terms">
          Agree to Terms<input type="checkbox" name="terms" onChange={change}/> 
        </label>

          <button id='submitBtn' disabled={buttonDisabled}>Order!</button>
        </form>
      </div>
    );
  }

