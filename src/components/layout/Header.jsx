// IMAGES //
import logo from '../../images/omnifood-logo.png';

// STYLES //
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className=" flex container">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
