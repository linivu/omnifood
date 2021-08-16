// IMAGES //
import stepOne from '../../images/steps/app-screen-1.png';
import stepTwo from '../../images/steps/app-screen-2.png';
import stepThree from '../../images/steps/app-screen-3.png';

// STYLES //
import './HowItWorks.scss';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <span className="subheading">How It Works</span>
        <h2 className="section-heading">Your daily dose of health in 3 simple steps</h2>
        <div className="grid">
          <div className="how-it-works__steps one">
            <p className="no">01</p>
            <h3 className="heading">Tell us what you like (and what not)</h3>
            <p className="description">
              Never again waste time thinking about what to eat! Omnifood AI will create a
              100% personalized weekly meal plan just for you. It makes sure you get all
              the nutrients and vitamins you need, no matter what diet you follow!
            </p>
          </div>
          <div className="how-it-works__image two">
            <img src={stepOne} alt="how it works" />
          </div>
          <div className="how-it-works__image three">
            <img src={stepTwo} alt="how it works" />
          </div>
          <div className="how-it-works__steps four">
            <p className="no">02</p>
            <h3 className="heading">Approve your weekly meal plan</h3>
            <p className="description">
              Once per week, approve the meal plan generated for you by Omnifood AI. You
              can change ingredients, swap entire meals, or even add your own recipes.
            </p>
          </div>
          <div className="how-it-works__steps five">
            <p className="no">03</p>
            <h3 className="heading">Receive meals at convenient time</h3>
            <p className="description">
              Best chefs in town will cook your selected meal every day, and we will
              deliver it to your door whenever works best for you. You can change delivery
              schedule and address daily!
            </p>
          </div>
          <div className="how-it-works__image six">
            <img src={stepThree} alt="how it works" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
