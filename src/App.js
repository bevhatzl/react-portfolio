// import logo from './logo.svg';
import './App.css';
import {HashRouter, BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';

function App() {
  return (
    <HashRouter>
        <Header className="App-header"></Header>

        <Switch>
          <Route exact path="/" component={Welcome} href="#jumpTop"/>
          <Route exact path="/portfolio" component={Portfolio} href="#portfolio"/>
          <Route exact path="/about" component={About} href="#about"/>
        </Switch>        

        <Footer></Footer>
    </HashRouter>
  );
}

export default App;
