import React from 'react';
import { useHistory } from "react-router-dom";

export default function ConfirmCard (props) {
    const { id, title, director, metascore } = props
    const history = useHistory();
    return (
      <div className='movie-card'>
        <h2>{title}</h2>
        <div className='movie-director'>
          Director: <em>{director}</em>
        </div>
        <div className='movie-metascore'>
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    );
  }