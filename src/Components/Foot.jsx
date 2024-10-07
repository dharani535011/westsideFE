import React from 'react'
import f1 from "../../public/Frame_2.svg"
import f2 from "../../public/Frame_3.svg"

const Foot = () => {
  return (
    <div className='foot'>
        <div className='ff'>
            <div className='foo1'>
                <div className='f1'>
                    <h1 style={{fontWeight:"500"}}>DOWNLOAD THE APP</h1>
                    <img src={f1} alt="f1" />
                    <img src={f2} alt="f2" />
                </div>
                <div className='f2'>
                    <p>SHOP</p>
                    <p>WOMAN</p>
                    <p>MAN</p>
                    <p>BEAUTY</p>
                    <p>HOME</p>
                </div>
                <div className='f3'>
                    <p>SITES & STORES</p>
                    <p>ABOUT US</p>
                    <p>STORE LOCATOR</p>
                    <p>MEADIA CENTER</p>
                    <p>SITEMAP</p>
                    <p>MEMBERSHIP</p>
                </div>
                <div className='sum'>
                    <h4>Follow us on</h4>
                  <div className='f22'>
                  <i className="fa-brands fa-instagram"></i>
               <i className="fa-brands fa-facebook"></i>
               <i className="fa-brands fa-youtube"></i>
               <i className="fa-brands fa-twitter"></i>
                  </div>
               </div>
                <div className='f4'> 
                    <p>Join Our Newsletter</p>
                    <p>Get the latest updates from our stores</p>
                    <input type="text" placeholder='Email Id'/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className='foo2'>
               <div className='f21'>
               <p>TERMS & CONDITIONS</p>
                 <p>PRIVACY POLICY</p>
                 <p>RETURN POLICY</p>
               </div>
               <div className='f22'>
               <i className="fa-brands fa-instagram"></i>
               <i className="fa-brands fa-facebook"></i>
               <i className="fa-brands fa-youtube"></i>
               <i className="fa-brands fa-twitter"></i>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Foot