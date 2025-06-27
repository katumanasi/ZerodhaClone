import React from 'react';

function RightSection( {
  imageUrl,
  productName,
  productDescription,
  learnMore,
  kiteConnect,
  
  
}) {
    return ( 
      <div className='container p-5 mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <h1>{productName}</h1>
                  <p>{productDescription}</p>

                   <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more <i class="fa-solid fa-arrow-right ms-1 fs-6 "></i>
            </a>
            </div>
            </div>

             <div className='col-6'>
                 <img src={imageUrl} style={{ width: "100%" }} />
             </div>
        </div>

      </div>
     );
}

export default RightSection;