import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const RootLayouts = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default RootLayouts;
