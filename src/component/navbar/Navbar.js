import React from 'react'

export const Navbar = () => {
  return (
    <div className='container-lg'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-custom">
            <div class="container-lg">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="">
                        <button class="btn btn-outline-success" type="button">Contact us</button>
                        <button class="btn btn-light orange-btn" type="button">Signup</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
