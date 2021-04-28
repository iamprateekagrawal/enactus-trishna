import './App.css';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <div id='circle'>
        <div id='trishna'>Project Trishna </div>
        <div id='tagline'>Love from Potters</div>
      </div>
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default App;
