import React ,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from './Components/Header';
import Navbar1 from './Components/Navbar';
import Skills from './Components/skills';
import Testimonials from './Components/Testimonials';
import Clients from './Components/Clients';
import FunFacts from './Components/Fun-Facts';
import Footer from './Components/footer';
function App() {
  const[name, setName]= useState("Alex Smith");
  // const[occupation ,setOccupation]=useState("SDE")
  return (
    <div className="App">
      <Navbar1 n={name}/>
      <Card1/>
      <Skills/>
      <Testimonials/>
      <Clients/>
      <FunFacts/>
      <Footer/>    
    </div>
  );
}

export default App;
