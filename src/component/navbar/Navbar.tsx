import React, { useState, useEffect } from 'react'
import { useDarkMode } from '../../utils/customHooks/useDarkMode'
import ToggleThemeBtn from '../buttons/ToggleThemeBtn';

const Navbar = () => {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
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

    if (!componentMounted) {
        return <div />
    }

  return (
    <nav className={`active ${show && 'hidden'}`}>
        <ToggleThemeBtn theme={theme} toggleTheme={toggleTheme} />
        <p>나라 정보</p> 
    </nav>
  )
}

export default Navbar