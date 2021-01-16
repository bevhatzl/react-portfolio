// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header className="App-header"></Header>
      <Welcome></Welcome>
      <Footer></Footer>
    </div>
  );
}

export default App;
