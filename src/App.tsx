import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import CursorTrail from "./components/CursorTrail";

export default function App() {
  return (
    <>
    <CursorTrail />
      <div className="min-h-screen bg-black text-white lg:cursor-none">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
