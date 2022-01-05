import React from 'react';
import Plain from './plain';
import Pepperoni from './pepperoni';
import MeatLover from './meat-lover';
import Veggie from './veggie';
import Hawaiian from './hawaiian'
import Bbq from './bbq'
import plain from './images/plain.jpg';
import Slice from './slice'
import bbq from './images/bbq.jpg'
import hawaiian from './images/hawaiian.jpg';
import meat from './images/meat.jpg';
import pepperoni from './images/pepperoni.jpg';
import veggie from './images/veggie.jpeg';
import './css/menu.css';

function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
            <Slice 
            img={plain}
            title="plain"
            description="It's got cheese, it's got tomato sauce, and it's only a dollar. What more could you ask for?"
            price="1.00" />
            <Slice 
            img={bbq}
            title="bbq"
            description="Perhaps the most popular slice we offer. BBQ chicken over a delicious dollar pizza. what more could one want more in life?"
            price="2.00"/>
            <Slice
            img={hawaiian}
            title="Hawaiian"
            description="We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza."            
            price="2.00"/>
            <Slice
            img={meat}
            title="Meat-lover"
            description="Pepperoni not enough meat for you? Well this slice has Pepperoni, meatballs, and sausage"
            price="10.00" />
            <Slice
            img={Pepperoni}
            title="Pepperoni"
            description="A classic slice with cheese, sauce, and guess what else... that's right, pepperoni."
            price="5.00" />
            <Slice
            img={Veggie}
            title="Veggie pizza"
            description="Your trying to be healthy but still cant resist pizza? Well then the veggie slice is for you! This is guilt-free pizza at its finest"
            price="3.00" />
      </div>
    </div>
  );
}

export default Menu;
