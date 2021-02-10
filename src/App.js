import './App.css';

// Components
import Header from './components/elements/Header';
import Footer from './components/elements/Footer';
import Routes from './components/Routes';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
