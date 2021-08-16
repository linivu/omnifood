// COMPONENTS //
import Header from '../components/layout/Header';
import Home from '../components/page/Home';
import FeaturedIn from '../components/page/FeaturedIn';

const LandingPage = () => {
  return (
    <main className="main">
      <Header />
      <Home />
      <FeaturedIn />
    </main>
  );
};

export default LandingPage;
