import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row p-5'>
                <div className='col-6 mb-5'>
                    <img src="/media/images/education.svg" />
                </div>

                <div className='col-6'>
                    <h2 className='mb-1'>Free and open market education</h2>
                <p className='fs-4 mt-3 text-muted'>Varsity, the largest online stock market education book in the world covering everything 
                from the basics to advanced trading.</p>
                 <a href ="" className='fs-4'  style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right mx-1"></i></a>

                 <p className='fs-4 mt-3 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market
                     related queries.</p>
                 <a href ="" className='fs-4'  style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right mx-1"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;