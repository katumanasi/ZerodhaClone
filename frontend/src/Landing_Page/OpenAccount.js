import React from 'react';


function OpenAccount() {
    return (  
        <div className='container p-5 mb-5'>
           <div className='row text-center'>
            <img src='media/images/homeHero.png' alt='Home Page' className='mb-3'/>
            <h1 className='mt-5 mb-4'>Open a Zerodha account</h1>
            <p className='mb-5 fw-medium fs-5 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button type="button" className='btn btn-primary btn-sm p-2 mb-5' style={{width:"20%", margin:"0 auto", fontSize:"1.5rem"}}>Sign up now</button>
           </div>
       </div>
    );
}

export default OpenAccount;