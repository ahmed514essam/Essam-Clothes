import Header from "./MainComponents/Header/Header";
import Footer from "./MainComponents/Footer/Footer";
import { Outlet } from "react-router-dom";

// Named function for better clarity and debugging
export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
