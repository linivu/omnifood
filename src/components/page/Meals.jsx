// COMPONENTS //
import Button from '../global/Button';

// IMAGES //
import mealOne from '../../images/meals/meal-1.jpg';
import mealTwo from '../../images/meals/meal-2.jpg';

// STYLES //
import './Meals.scss';

const Meals = () => {
  return (
    <section id="meals" className="meals">
      <div className="container">
        <span className="subheading">Meals</span>
        <h2 className="section-heading">Omnifood AI chooses from 5,000+ recipes</h2>
        <div className="grid">
          <div className="meal">
            <img src={mealOne} alt="meal" className="meal__image" />
            <div className="meal__content">
              <span className="tag vegetarian">Vegetarian</span>
              <p className="title">Japanese Gyozas</p>
              <div className="features">
                <div className="feature">
                  <ion-icon name="flame-outline"></ion-icon>
                  <p>
                    <strong>650</strong> Calories
                  </p>
                </div>
                <div className="feature">
                  <ion-icon name="restaurant-outline"></ion-icon>
                  <p>
                    NutriScore ® <strong>74</strong>
                  </p>
                </div>
                <div className="feature">
                  <ion-icon name="star-outline"></ion-icon>
                  <p>
                    <strong>4.9</strong> Rating (537)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="meal">
            <img src={mealTwo} alt="meal" className="meal__image" />
            <div className="meal__content">
              <span className="tag vegan">Vegan</span>
              <span className="tag paleo">Paleo</span>
              <p className="title">Avocado Salad</p>
              <div className="features">
                <div className="feature">
                  <ion-icon name="flame-outline"></ion-icon>
                  <p>
                    <strong>400</strong> Calories
                  </p>
                </div>
                <div className="feature">
                  <ion-icon name="restaurant-outline"></ion-icon>
                  <p>
                    NutriScore ® <strong>92</strong>
                  </p>
                </div>
                <div className="feature">
                  <ion-icon name="star-outline"></ion-icon>
                  <p>
                    <strong>4.8</strong> Rating (441)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="meal diets">
            <div className="meal__content">
              <p className="title">Works with any diet:</p>
              <div className="features">
                <div className="feature">
                  <ion-icon name="checkmark-outline"></ion-icon>
                  <p>Vegetarian</p>
                </div>
                <div className="feature">
                  <ion-icon name="checkmark-outline"></ion-icon>
                  <p>Vegan</p>
                </div>
                <div className="feature">
                  <ion-icon name="checkmark-outline"></ion-icon>
                  <p>Pescatarian</p>
                </div>
                <div className="feature">
                  <ion-icon name="checkmark-outline"></ion-icon>
                  <p>Gluten-free</p>
                </div>
                <div className="feature">
                  <ion-icon name="checkmark-outline"></ion-icon>
                  <p>Lactose-free</p>
                </div>
                <div className="feature">
                  <ion-icon name="checkmark-outline"></ion-icon>
                  <p>Keto</p>
                </div>
                <div className="feature">
                  <ion-icon name="checkmark-outline"></ion-icon>
                  <p>Paleo</p>
                </div>
                <div className="feature">
                  <ion-icon name="checkmark-outline"></ion-icon>
                  <p>Low FODMAP</p>
                </div>
                <div className="feature">
                  <ion-icon name="checkmark-outline"></ion-icon>
                  <p>Kid-friendly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <Button href="/recipes" className="btn--text">
            See all recipes &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Meals;
