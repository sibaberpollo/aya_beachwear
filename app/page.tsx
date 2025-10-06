import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="page">
        <HeroSlider />
        <MainContent />
      </main>
      <Footer />
    </>
  );
}

