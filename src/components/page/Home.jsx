// IMAGES //
import home from '../../images/home.png';
import customerOne from '../../images/customers/customer-1.jpg';
import customerTwo from '../../images/customers/customer-2.jpg';
import customerThree from '../../images/customers/customer-3.jpg';
import customerFour from '../../images/customers/customer-4.jpg';
import customerFive from '../../images/customers/customer-5.jpg';
import customerSix from '../../images/customers/customer-6.jpg';

// COMPONENTS //
import Button from '../global/Button';

// STYLES //
import './Home.scss';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className=" grid container">
        <div className="home__content">
          <h1 className="main-heading">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="lead">
            The smart 365-days-per-year food subscription that will make you eat healthy
            again. Tailored to your personal tastes and nutritional needs.
          </p>
          <div className="home__content-btn-container">
            <Button href="#pricing" className="btn btn--primary">
              Start today
            </Button>
            <Button href="#about" className="btn btn--outline">
              More info
            </Button>
          </div>
          <div className="home__content-delivered-meals">
            <div className="images">
              <img src={customerOne} alt="customer" />
              <img src={customerTwo} alt="customer" />
              <img src={customerThree} alt="customer" />
              <img src={customerFour} alt="customer" />
              <img src={customerFive} alt="customer" />
              <img src={customerSix} alt="customer" />
            </div>
            <p className="text">
              <span>250 000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <img
          src={home}
          alt="image of woman eating delicious meal"
          className="home__image"
          height="750"
          width="750"
        ></img>
      </div>
    </section>
  );
};

export default Home;
