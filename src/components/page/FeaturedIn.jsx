// IMAGES //
import logoOne from '../../images/logos/techcrunch.png';
import logoTwo from '../../images/logos/forbes.png';
import logoThree from '../../images/logos/business-insider.png';
import logoFour from '../../images/logos/usa-today.png';
import logoFive from '../../images/logos/the-new-york-times.png';

// STYLES //
import './FeaturedIn.scss';

const FeaturedIn = () => {
  return (
    <section className="featured-in">
      <div className="container">
        <h2 className="featured-in__heading">As Featured In</h2>
        <div className="featured-in__logos">
          <img src={logoOne} alt="featured in logo" />
          <img src={logoTwo} alt="featured in logo" />
          <img src={logoThree} alt="featured in logo" />
          <img src={logoFour} alt="featured in logo" />
          <img src={logoFive} alt="featured in logo" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
