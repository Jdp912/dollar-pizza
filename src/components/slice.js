import React from 'react';
import plain from './images/plain.jpg';
import bbq from './images/bbq.jpg'
import './css/slice.css';

function Slice(props) {
  return(
    <div className="Plain col-4">
      <div className="card">
        <img src={ props.img } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Slice;