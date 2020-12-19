import React from 'react';
import { Link } from "react-router-dom";

export default function NavBlock (props) {
    return (
      <div className='movie-card'>
        <Link to={`../`}>
        <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }