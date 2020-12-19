import React from 'react';
import { useHistory } from "react-router-dom";

export default function HomeStuff (props) {
   
    const history = useHistory();
    return (
      <div className='movie-card' onClick={() => history.push(`/pizza/PizzaForm`)}>
       
        <div className='movie-metascore'>
          <strong>Click Here to Order Pizza!</strong>
        </div>
      </div>
    );
  }

  