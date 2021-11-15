import React from 'react';
import bbq from './images/bbq.jpg'
import './css/slice.css';

function Bbq() {
    return(
      <div className="Bbq col-4">
        <div className="card">
          <img src={ bbq } class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Bbq chicken</h5>
            <p className="card-text">Perhaps the most popular slice we offer. BBQ chicken over a delicious dollar pizza. what more could one want more in life?</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price: $2.00</li>
          </ul>
        </div>
      </div>
    );
  }

export default Bbq;
