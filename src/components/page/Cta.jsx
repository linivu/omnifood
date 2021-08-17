// COMPONENTS //
import Button from '../global/Button';

// STYLES //
import './Cta.scss';

const Cta = () => {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <div className="cta__container">
          <div className="cta__container-image"></div>
          <div className="cta__container-content">
            <h3 className="heading">Get your first meal for free!</h3>
            <p className="text">
              Healthy, tasty and hassle-free meals are waiting for you. Start eating well
              today. You can cancel or pause anytime. And the first meal is on us!
            </p>
            <form className="form">
              <div>
                <label>Full Name</label>
                <input type="text" placeholder="John Smith" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="me@example.com" />
              </div>
              <div>
                <label>Where did you hear from us?</label>
                <select id="select-where" name="select-where" required="">
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div>
                <Button type="submit" className="btn--cta">
                  Sign Up Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
