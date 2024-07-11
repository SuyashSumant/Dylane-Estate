import './App.css'
import Hero from './components/Hero';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Proplist from './components/Proplist';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
       
       <Route path='/' element={
        <>
        < Nav/>
        <Hero/>
        </>
      }
      ></Route>

<Route path="/Proplist" element={<Proplist/>} />
      
       

        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
