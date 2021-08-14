import { useState } from 'react';

// COMPONENTS //
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
        <img src={logo} alt="logo" className="logo" />
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
