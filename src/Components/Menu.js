import React from 'react';
import Color from './Color.js';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color="red" handleClick={props.newPost}></Color>
          <Color color="pink" handleClick={props.newPost}></Color>
          <Color color="blue" handleClick={props.newPost}></Color>
          <Color color="green" handleClick={props.newPost}></Color>
      </div>
    );
}

export default Menu;