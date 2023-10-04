import { useState, useEffect } from 'react';
import Logo from "../../components/Header Components/Logo";
import NavLinks from "../../components/Header Components/NavLinks";
import CTAButton from "../../components/Header Components/CTAButton"
// import Example from "../../components/Header Component - SM/HeaderComponent_SM"
import BurgerIcon from "../../components/Header Components/BurgerIcon"

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div id="header__container" className="flex items-center justify-around h-24">
      <Logo/>
      <div className='flex'>
      {windowWidth > 1200 && <NavLinks/>}
      {windowWidth <= 1200  && <BurgerIcon/>}
      {windowWidth >= 800 && <CTAButton/>}
      </div>
    </div>
  )
}

export default Header;
