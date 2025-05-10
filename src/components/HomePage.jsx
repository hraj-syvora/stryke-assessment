import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-800">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;
