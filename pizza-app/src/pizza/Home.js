import React from 'react';
import { useHistory } from "react-router-dom";

export default function HomeStuff (props) {
    const { id, title, director, metascore } = props
    const history = useHistory();
    return (
      <div className='movie-card' onClick={() => history.push(`/pizza/PizzaForm`)}>
        <h2>{title}</h2>
        <div className='movie-metascore'>
          <strong>BTN TO GOTO PIZZA FORM</strong>
        </div>
      </div>
    );
  }

  