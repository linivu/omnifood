import { useState } from 'react';

// COMPONENTS //
import Navigation from './Navigation';
import HamburgerMenu from './HamburgerMenu';

// IMAGES //
import logo from '../../images/omnifood-logo.png';

// STYLES //
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className=" flex container">
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
