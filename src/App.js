
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom'
import Mint from './Components/Mint/Mint';
import {ToastContainer} from 'react-toastify'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mint' element={<Mint />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
