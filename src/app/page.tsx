import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/herosection";
import Cart from "./components/carts";
import Blogs from "./components/blogs";
import Instagram from "./components/Instagram";
export default function Home() {
  return (
    <>
      <div className="bg-gray-200">
    <Navbar />
    <HeroSection/>
    <Cart/>
    <Blogs/>
    <Instagram/>
    <Footer/>
  </div>
  </>
  );
}
