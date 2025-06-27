import React from 'react';

function Hero() {
    return ( 
       <section className='container-fluid' id='supportHero'>
        <div className='p-5 mt-5 mb-5' id='supportWrapper'>
             <h3>Support Portal</h3>
             <a href="">Track tickets</a>
             </div>


               <div className=' row ' >
                  <div className=' col-6 p-5' >
                    <h2 className='fs-4'>Search for an answer or browse help topics to create a ticket</h2>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected...' className='mb-4'/><br/>
                    <a href='' className='ms-4 fw-medium'>Track account opening</a>
                      <a href='' className='ms-4 fw-medium'>Track segment activation </a> <br/><br/>
                      <a href='' className='ms-4 ms-4 fw-medium'> Intraday margins</a>
                     <a href='' className='ms-4 fw-medium fs-6'> Kite user manual</a>  <br/>
                      
                  </div>

                      <div className=' col-6  p-5' >
                        <h2 className='fs-4'>Featured</h2>
                        <ol>
                      <li>  <a href='' className='ms-4 fw-medium'>Exclusion of F&O contracts on 8 securities from August 29, 2025</a><br/></li>
                       <li><a href=''  className='ms-4 fw-medium'>Revision in expiry day of Index and Stock derivatives contract   </a></li>  
                        
                          </ol>
                      </div>
           
             </div>
       </section>
     );
}

export default Hero;