import React from 'react'
import '../css/footer.css'
export const Footer = () => {
    return (
        <footer className='footer text-center bg-dark footer-container d-flex justify-content-center align-items-center'>
            <p className='text-white'>TodoApp ©{new Date().getFullYear()}</p>
        </footer>
    )
}
