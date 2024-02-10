import React from 'react'

function Footer() {
  return (
    <>
   <footer className='bg-dark text-light pt-3 pb-2'>
   <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <h4>INFORMATION</h4>
                <ul>
                    <li>    About Us</li>
                    <li> Contact Us</li>
                    <li> FAQ</li>
                    <li> Blog</li>
                </ul>
            </div>
            <div className="col-lg-3">
                <h4> POLICIES</h4>
                <ul>
                    <li> Return & Exchange Policy</li>
                    <li>Shipping Information</li>
                 
                </ul>
            </div>
            <div className="col-lg-3">
                <h4>ACCOUNT</h4>
                <ul>
                     <li>  My Account</li>
                    <li>Wishlist</li>
                 
                </ul>
            </div>
            <div className="col-lg-3">
                <h4>Address</h4>
                <ul>
                    <li>Socheko dot com</li>
                    <li>Kamalpokhari</li>
                    <li>Kathmandu</li>
                    <li>Central Region - 44600</li>
                    <li>NP</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="row  ">
            <div className="col-lg-10">
                <p>Copyright © 2014 - 2023 Socheko.com. All Rights Reserved.</p>
            </div>
            <div className='col-lg-2 '>
                <img width={66} height={20} src="http://demo.waftcommerce.com/public/files/E12777DEFCEC861-COD.png" alt="" />
                <img width={66} height={20} src="http://demo.waftcommerce.com/public/files/E59140945CF9443-esewa.png" alt="" />
            </div>
        </div>
    </div>
   </footer>
    </>
  )
}

export default Footer