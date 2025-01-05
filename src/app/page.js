// import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import About from './components/About';
import DownloadSection from './components/DownloadSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <ServicesSection/>
      <About/>
      <DownloadSection/>
      <Contact/>
      <Footer/>
    </>
  );
}
