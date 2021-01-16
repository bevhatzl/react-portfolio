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
          <Route exact path="/" component={Welcome} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </Switch>        

        <Footer></Footer>
    </HashRouter>
  );
}

export default App;
