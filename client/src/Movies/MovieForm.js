import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieForm(props) {
  console.log(props);
  console.log(props.match.params.id);


  return (
    <div className='movieform-container'>
      {console.log(props)}

    </div>
  )
}
export default MovieForm;