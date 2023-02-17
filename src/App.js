import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Components/Login'
import Register from './Components/Register';
import ProtectedRoutes from './Services/ProtectedRoutes';
import Cart from './Components/Cart';
import Header from './Components/Header';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<ProtectedRoutes/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
        </Route>
      </Routes>
    
    </BrowserRouter>
    </>
    
  );
}

export default App;
