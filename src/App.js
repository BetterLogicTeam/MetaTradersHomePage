
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {BrowserRouter,Routes,Route} from  'react-router-dom'
import Mint from './Components/Mint/Mint';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mint' element={<Mint />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
