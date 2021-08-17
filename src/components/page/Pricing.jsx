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

        <div className="pricing__features">
          <p className="pricing__features-text">
            Prices include all applicable taxes. You can cancel at any time. Both plans
            include the following:
          </p>
          <div className="grid">
            <div className="pricing__features-feature">
              <div className="icon">
                <ion-icon name="infinite-outline"></ion-icon>
              </div>
              <h3 className="heading">Never cook again!</h3>
              <p className="text">
                Our subscriptions cover 365 days per year, even including major holidays.
              </p>
            </div>

            <div className="pricing__features-feature">
              <div className="icon">
                <ion-icon name="nutrition-outline"></ion-icon>
              </div>
              <h3 className="heading">Local and organic</h3>
              <p className="text">
                Our cooks only use local, fresh, and organic products to prepare your
                meals.
              </p>
            </div>

            <div className="pricing__features-feature">
              <div className="icon">
                <ion-icon name="leaf-outline"></ion-icon>
              </div>
              <h3 className="heading">No waste</h3>
              <p className="text">
                All our partners only use reusable containers to package all your meals.
              </p>
            </div>

            <div className="pricing__features-feature">
              <div className="icon">
                <ion-icon name="pause-outline"></ion-icon>
              </div>
              <h3 className="heading">Pause anytime</h3>
              <p className="text">
                Going on vacation? Just pause your subscription, and we refund unused
                days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
