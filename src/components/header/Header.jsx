import React from 'react';

function Header() {
  return (
    <div className='header mt-5'>
        <h1 className='heading'> 
            Number Guessing Game!
        </h1>
        <h4 className='sub-heading text-secondary'> 
           Click the below button to generate random number between 1 and 10
        </h4>

    </div>
  )
}

export default Header