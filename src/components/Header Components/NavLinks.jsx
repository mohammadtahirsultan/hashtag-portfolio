/* eslint-disable no-unused-vars */
import { useState,useEffect, useRef } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Popover from './PopOver';
import NavSubLinks from './NavSubLinks';

// eslint-disable-next-line react/prop-types
function NavLink({ label }) {
  const popoverRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [popoverRef]);

  const handleTogglePopoverOutSide = () => {
    setIsOpen(!isOpen);
  };
  const handleTogglePopover = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <Popover>
      <div
        className="flex items-center py-2 text-[#8B8B8B] font-semibold hover:text-[#005CF1]"
        ref={popoverRef}
        onClick={handleTogglePopover && handleTogglePopoverOutSide}
      >
        {label}
        {isOpen ? (
          <KeyboardArrowUpIcon sx={{ fontSize: 18 }} />
          
        ) : (
          <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
        )
        }
      </div>
    </Popover>
  );
}

function NavLinks() {
  return (
    <nav className="flex space-x-4 text-[#8B8B8B] z-20">
      <NavLink label="What We Do"/>
      <NavLink label="Who We Serve" />
      <NavLink label="Technologies" />
      <NavLink label="How we engage" />
      <NavLink label="Who we are" />
    </nav>
  );
}

export default NavLinks;