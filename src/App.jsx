
import Destination from "./components/Destination/Destination";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Help from "./components/Help/Help";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import System from "./components/System/System";
import Testimonials from "./components/Testimonials/Testimonials";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <Features />
        <Services />
        <Destination />
        <Testimonials />
        <System />
        <Help />
      </main>
      <Footer />
    </div>
  );
}