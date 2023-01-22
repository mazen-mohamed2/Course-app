import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Detilse from './components/Detilse';
import Auth from './components/Auth';
import NotFound from './components/NotFound';


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/detilse/:id' element={<Detilse  />} />
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;