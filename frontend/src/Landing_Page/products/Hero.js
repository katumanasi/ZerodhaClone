import React from 'react';

function Hero() {
    return (
       <div className='container p-5 m-3'>
        <div className='row p-5  justify-content-center text-center mt-2 border-bottom' style={{marginLeft:"7rem"}}>
           <h1  style={{fontSize:"50px"}}>Zerodha Products</h1>
           <p  className="text-muted mt-3 " style={{fontSize:"20px",}}>Sleek, modern, and intuitive trading platforms</p>
           <p>Check out our <a href='' className='text-decoration-none mt-3'>investment offerings →</a></p>
        </div>
     
       </div>
      );
}

export default Hero;