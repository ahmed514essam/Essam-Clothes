import { Outlet } from 'react-router-dom';
import Header from './MainComponents/Header/Header';
import Footer from './MainComponents/Footer/Footer';
export default function Root() {
  return (
<>
<Header/>
    <Outlet/>
    <Footer/>
</>
  )
}


