import React from 'react';

function Universe() {
    return (  
      <div className='container p-5'>
        <div className='row text-center text-muted'>
     <h1>The Zerodha Universe</h1>
     <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
        
        <div className='col-4 p-4 mt-4'>
          <img src='media/images/zerodhaFundhouse.png' style={{ width: "70%" }} />
          <p className='text-small text-muted'>
            Our asset management venture <br></br>that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>
         <div className='col-4 p-4 mt-4'>
            <img src='media/images/sensibullLogo.svg' style={{ width: "70%" }} />
          <p className='text-small text-muted'>
            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
          </p>
         </div>
          <div className='col-4 p-4 mt-4'>
              <img src='media/images/dittoLogo.png' style={{ width: "50%" }} />
          <p className='text-small text-muted'>
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
          </div>


          <div className='col-4 p-4 mt-4'>
          <img src='media/images/streakLogo.png' style={{ width: "50%" }}/>
          <p className='text-small text-muted'>
            Systematic trading platform <br></br>that allows you to create and backtest <br></br>strategies without coding.
          </p>
        </div>
         <div className='col-4 p-4 mt-4 '>
            <img src='media/images/smallcaseLogo.png'/>
          <p className='text-small text-muted'>
            Thematic investing platform <br></br>that helps you invest in diversified <br></br>baskets of stocks on ETFs.
          </p>
         </div>
          <div className='col-4 p-4 mt-4 '>
              <img src='media/images/idCcBvECRQ_logos.png' style={{ width: "50%" }}/>
          <p className='text-small text-muted'>
            Investment research platform <br></br>that offers detailed insights on stocks, <br></br>sectors, supply chains, and more.
          </p>

          
          </div>
            <button type="button" className='btn btn-primary btn-sm p-2 mb-5' style={{width:"20%", margin:"0 auto", fontSize:"1.5rem"}}>Sign up for free</button>
      </div>
      
</div>
    );
}

export default Universe;