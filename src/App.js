// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project';
import About from './components/About/About';
// import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}

        <Header className="App-header"></Header>

        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/Project" component={Project}/>
          <Route exact path="/About" component={About}/>
        </Switch>
        
        <Footer></Footer>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
