
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { Switch,Route } from 'react-router';
import Tipcal from './components/Tipcal';
import Home from './components/Home';
function App() {
  return (
    <>
    <div className="sticky top-0 z-50"> < Navbar  /></div>
    <Switch>
       <Route path="/" exact component={Home} />  
      <Route path="/tipcal" component={Tipcal} />
    </Switch>
    </>
  );
}

export default App;
