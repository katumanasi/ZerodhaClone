import React from 'react';

function Pricing() {
    return ( 
       <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <h1 className='mb-3'>Unbeatable pricing</h1>
                <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India.
                     Flat fees and no hidden charges.</p>
                     <a href='' className='fs-5' style={{textDecoration:"none"}}> See price <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className='col-2'></div>
            <div className='col-6'>
                <div className='row text-center'>
                    <div className='col p-2 border'>
                        <h1  className='mb-4 mt-3'> <i class="fa-solid fa-indian-rupee-sign fs-2"></i>0</h1>
                        <p className='fs-4'>Free equity delivery and direct mutual funds</p>
                     
                    </div>
                    <div className='col  p-2 border'>
                        <h1  className='mb-4 mt-3'> <i class="fa-solid fa-indian-rupee-sign fs-2"></i>20</h1>
                        <p className='fs-4'>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
     );
}

export default Pricing;
