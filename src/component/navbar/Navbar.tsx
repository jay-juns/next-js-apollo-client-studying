import React, { useState, useEffect } from 'react'
import Search from '../search/search';

export type navBaseProps = {
    children: React.ReactNode;
}

const Navbar = ({ children }:navBaseProps) => {    
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
        <div className='nav-wrap'>
            <Search />
            <p>나라 정보</p>
            {children}
        </div> 
    </nav>
  )
}

export default Navbar