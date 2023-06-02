import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home';
import Cosmetics from './Screens/Cosmetics';
import Hairdresser from './Screens/Hairdresser';
import Store from './Screens/Store';
import Contact from './Screens/Contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Hairdresser/>
      <Cosmetics/>      
      <Store/>
      <Contact/>
    </div>
  );
}

export default App;
