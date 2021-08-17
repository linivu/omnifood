// COMPONENTS //
import Header from '../components/layout/Header';
import Home from '../components/page/Home';
import FeaturedIn from '../components/page/FeaturedIn';
import HowItWorks from '../components/page/HowItWorks';
import Meals from '../components/page/Meals';
import Testimonials from '../components/page/Testimonials';
import Pricing from '../components/page/Pricing';
import Cta from '../components/page/Cta';

const LandingPage = () => {
  return (
    <main className="main">
      <Header />
      <Home />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
      <Testimonials />
      <Pricing />
      <Cta />
    </main>
  );
};

export default LandingPage;
