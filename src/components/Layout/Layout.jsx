import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
        <div className="" style={{ minHeight: "80vh" }}>
          {children}
        </div>
      <Footer />
    </>
  );
};

export default Layout;