import './App.css';
import HeaderComp from "./components/HeaderComp";
import { Outlet } from 'react-router-dom';
import FooterComp from './components/FooterComp';

function App() {


  return (
    <>
      <HeaderComp />
      <div className="container">
        <Outlet/>
      </div>
      <FooterComp />
    </>
  )
}

export default App
