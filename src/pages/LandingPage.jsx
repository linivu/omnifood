// COMPONENTS //
import Header from '../components/layout/Header';
import Home from '../components/page/Home';
import FeaturedIn from '../components/page/FeaturedIn';
import HowItWorks from '../components/page/HowItWorks';

const LandingPage = () => {
  return (
    <main className="main">
      <Header />
      <Home />
      <FeaturedIn />
      <HowItWorks />
    </main>
  );
};

export default LandingPage;
