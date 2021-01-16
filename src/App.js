// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
        <Header className="App-header"></Header>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/Portfolio" component={Portfolio}/>
          <Route exact path="/About" component={About}/>
        </Switch>        
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
