// STYLES //
import Button from '../global/Button';
import './Pricing.scss';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="section-heading">Eating well without breaking the bank</h2>
        <div className="grid">
          <div className="pricing__plan">
            <h3 className="pricing__plan-heading">Starter</h3>
            <p className="pricing__plan-price">
              <span>$</span> 399
            </p>
            <p className="pricing__plan-subheading">
              per month. That is just $13 per meal!
            </p>
            <div className="pricing__plan-features">
              <div className="feature">
                <ion-icon name="checkmark-outline"></ion-icon>
                <p>1 Meal per day</p>
              </div>
              <div className="feature">
                <ion-icon name="checkmark-outline"></ion-icon>
                <p>Order from 11am to 9pm</p>
              </div>
              <div className="feature">
                <ion-icon name="checkmark-outline"></ion-icon>
                <p>Delivery is free</p>
              </div>
              <div className="feature">
                <ion-icon name="checkmark-outline"></ion-icon>
                <p>Regular recipes</p>
              </div>
            </div>
            <Button href="#contact" className="btn btn--primary">
              Start Today
            </Button>
          </div>

          <div className="pricing__plan complete">
            <h3 className="pricing__plan-heading">Complete</h3>
            <p className="pricing__plan-price">
              <span>$</span> 649
            </p>
            <p className="pricing__plan-subheading">
              per month. That is just $11 per meal!
            </p>
            <div className="pricing__plan-features">
              <div className="feature">
                <ion-icon name="checkmark-outline"></ion-icon>
                <p>
                  <strong>2</strong> Meal per day
                </p>
              </div>
              <div className="feature">
                <ion-icon name="checkmark-outline"></ion-icon>
                <p>
                  Order <strong>24 / 7</strong>
                </p>
              </div>
              <div className="feature">
                <ion-icon name="checkmark-outline"></ion-icon>
                <p>Delivery is free</p>
              </div>
              <div className="feature">
                <ion-icon name="checkmark-outline"></ion-icon>
                <p>Get access to latest recipes</p>
              </div>
            </div>
            <Button href="#contact" className="btn btn--primary">
              Start Today
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pricing__features">
          <p className="pricing__features-text">
            Prices include all applicable taxes. You can cancel at any time. Both plans
            include the following:
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
