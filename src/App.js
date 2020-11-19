import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/Nav';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Navbar/Home';
import Reservation from './components/Navbar/Reservation';
import Restaurant from './components/Navbar/Restaurant';
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';
import Footer from './components/Footer';


function App() { 
  
  return (
    <div className="App">
        <Nav/>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/Reservation" component={Reservation} /> 
        <Route exact path="/Restaurant" component={Restaurant}/> 
        <Route exact path="/About" component={About} /> 
        <Route exact path="/Contact" component={Contact} /> 
       </Switch>     
<Footer/>
</div>
  );
}
export default App;
