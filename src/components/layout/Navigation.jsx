// COMPONENTS //
import Button from '../global/Button';

// STYLES //
import './Navigation.scss';

const Navigation = ({ isOpen, setIsOpen }) => {
  const navLinks = ['how it works', 'meals', 'testimonials', 'pricing'];

  const onClickHandler = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`nav ${isOpen ? 'open' : ''}`}>
      <ul className="nav__list">
        {navLinks.map((link, i) => (
          <li className="nav__item" key={i}>
            <a href={`#${link}`} className="nav__link" onClick={onClickHandler}>
              {link}
            </a>
          </li>
        ))}
        <li className="nav__item">
          <Button href="#cta" className="btn btn--primary" onClick={onClickHandler}>
            Try for free
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
