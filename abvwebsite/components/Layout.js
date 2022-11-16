import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import bg3 from '../public/bg3.jpg'

const Layout = ({ children }) => {
  return (
    <>
      <div style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh"
      }}> 
        <Image src={bg3} layout="fill" objectFit="cover" alt="" />
        </div>
        <div className="px-8 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      
    </>
  );
};

export default Layout;
