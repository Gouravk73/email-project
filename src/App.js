import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Login from './components/Login';
import { useSelector } from 'react-redux';
function App() {
  const email=useSelector((state)=>state.login.email);
  console.log(email);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
