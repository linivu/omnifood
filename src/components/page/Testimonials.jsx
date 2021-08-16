// IMAGES //
import dave from '../../images/customers/dave.jpg';
import ben from '../../images/customers/ben.jpg';
import steve from '../../images/customers/steve.jpg';
import hannah from '../../images/customers/hannah.jpg';

import galleryOne from '../../images/gallery/gallery-1.jpg';
import galleryTwo from '../../images/gallery/gallery-2.jpg';
import galleryThree from '../../images/gallery/gallery-3.jpg';
import galleryFour from '../../images/gallery/gallery-4.jpg';
import galleryFive from '../../images/gallery/gallery-5.jpg';
import gallerySix from '../../images/gallery/gallery-6.jpg';
import gallerySeven from '../../images/gallery/gallery-7.jpg';
import galleryEight from '../../images/gallery/gallery-8.jpg';
import galleryNine from '../../images/gallery/gallery-9.jpg';
import galleryTen from '../../images/gallery/gallery-10.jpg';
import galleryEleven from '../../images/gallery/gallery-11.jpg';
import galleryTwelve from '../../images/gallery/gallery-12.jpg';

// STYLES //
import './Testimonials.scss';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="grid">
        <div className="testimonials">
          <span className="subheading">Testimonials</span>
          <h2 className="section-heading">Once you try it, you can't go back</h2>
          <div className="testimonials__grid">
            <div className="testimonial">
              <img src={dave} alt="dave" />
              <blockquote className="quote">
                Inexpensive, healthy and great-tasting meals, without even having to order
                manually! It feels truly magical.
              </blockquote>
              <cite className="cite">&mdash; Dave Bryson</cite>
            </div>
            <div className="testimonial">
              <img src={ben} alt="dave" />
              <blockquote className="quote">
                The AI algorithm is crazy good, it chooses the right meals for me every
                time. It's amazing not to worry about food anymore!
              </blockquote>
              <cite className="cite">&mdash; Ben Hadley</cite>
            </div>
            <div className="testimonial">
              <img src={steve} alt="dave" />
              <blockquote className="quote">
                Omnifood is a life saver! I just started a company, so there's no time for
                cooking. I couldn't live without my daily meals now!
              </blockquote>
              <cite className="cite">&mdash; Steve Miller</cite>
            </div>
            <div className="testimonial">
              <img src={hannah} alt="dave" />
              <blockquote className="quote">
                I got Omnifood for the whole family, and it frees up so much time! Plus,
                everything is organic and vegan and without plastic.
              </blockquote>
              <cite className="cite">&mdash; Hannah Smith</cite>
            </div>
          </div>
        </div>
        <div className="gallery">
          <figure className="gallery__item">
            <img src={galleryOne} alt="gallery img" />
          </figure>
          <figure className="gallery__item">
            <img src={galleryTwo} alt="gallery img" />
          </figure>
          <figure className="gallery__item">
            <img src={galleryThree} alt="gallery img" />
          </figure>
          <figure className="gallery__item">
            <img src={galleryFour} alt="gallery img" />
          </figure>
          <figure className="gallery__item">
            <img src={galleryFive} alt="gallery img" />
          </figure>
          <figure className="gallery__item">
            <img src={gallerySix} alt="gallery img" />
          </figure>
          <figure className="gallery__item">
            <img src={gallerySeven} alt="gallery img" />
          </figure>
          <figure className="gallery__item">
            <img src={galleryEight} alt="gallery img" />
          </figure>
          <figure className="gallery__item">
            <img src={galleryNine} alt="gallery img" />
          </figure>
          <figure className="gallery__item">
            <img src={galleryTen} alt="gallery img" />
          </figure>
          <figure className="gallery__item">
            <img src={galleryEleven} alt="gallery img" />
          </figure>
          <figure className="gallery__item">
            <img src={galleryTwelve} alt="gallery img" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
