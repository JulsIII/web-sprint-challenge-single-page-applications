import React from 'react';

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
     
          <label htmlFor="pizzaSize">
            Pizza Size
            <select id="pizza-size" name="pizzaSize" value={formValues.pizzaSize} onChange={change}>
            <option value="">------select size------</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          </label>

        <p>
        <label htmlFor="topPepperoni">
          <input type="checkbox" name="topPepperoni" checked={formValues.topPepperoni} onChange={change}/>Pepperoni 
        </label>
        <label htmlFor="topSausage">
          <input type="checkbox" name="topSausage" checked={formValues.topSausage} onChange={change}/>Sausage 
        </label>
        <label htmlFor="topMushrooms">
          <input type="checkbox" name="topMushrooms" checked={formValues.topMushrooms} onChange={change}/>Mushrooms 
        </label>
        <label htmlFor="topOlives">
         <input type="checkbox" name="topOlives" checked={formValues.topOlives} onChange={change}/>Olives 
        </label>
        </p>

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
          <input type="checkbox" name="terms" onChange={change}/> Agree to Terms
        </label>
         <p><button id='submitBtn' disabled={buttonDisabled}>Order!</button></p>
        </form>
      </div>
    );
  }

