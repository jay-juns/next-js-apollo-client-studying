import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [ show, setShow] = useState(true);
    const [ lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = () => {
        if ( typeof window !== 'undefined') {
            if(window.scrollY > lastScrollY) {
                setShow(false)
            } else {
                setShow(true)
            }

            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            window.addEventListener('touchmove', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
                window.removeEventListener('touchmove', controlNavbar);
            }
        }
    },[lastScrollY])

  return (
    <nav className={`active ${show && 'hidden'}`}>
        <p>나라 정보</p> 
    </nav>
  )
}

export default Navbar