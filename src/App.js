
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import data from './data';
import Homescreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Link to="">my website</Link>
      </header>
      <main>
        <Routes>
          <Route exact path='/product/:slug' element={<ProductScreen />}/>
          <Route path="/" element={<Homescreen/>}/>
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
