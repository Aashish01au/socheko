import React from 'react'

function Header() {
    return (
        <>
            <div className="container py-3">
                <div className="row align-items-center">
                    <div className="col-lg-2">
                        <img className='w-100' src="https://www.socheko.com/9073c22fb5c6c910fb5bf16d76fc29a1.png" alt="logo" />
                    </div>
                    <div className='col-lg-4'>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search Products" aria-label="Search" />

                        </form>


                    </div>
                    <div className="col-lg-5 gap-2 d-flex justify-content-end">
                        <ul className='d-flex gap-3'>
                            <li> Sell on Socheko.com</li>
                            <li>Mahila Udhyami</li>
                        </ul>
                      

                    </div>
                    <div className="col-lg-1">
                        
                    <button type="button" className="btn btn-primary position-relative">
                        <i class="bi bi-cart2"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                99+
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header