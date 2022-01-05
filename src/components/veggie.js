import React from 'react';
import veggie from './images/veggie.jpeg';
import './css/slice.css';

function Veggie() {
  return(
    <div className="veggie col-4">
      <div className="card">
        <img src={ veggie } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Veggie Slice</h5>
          <p className="card-text">Your trying to be healthy but still cant resist pizza? Well then the veggie slice is for you! This is guilt-free pizza at its finest</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $3.00</li>
        </ul>
      </div>
    </div>
  );
}

export default veggie;
