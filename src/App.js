import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import ComposePage from "./components/ComposePage";
import ReceiveMail from './components/inbox components/ReceiveMail';
function App() {
  const email=useSelector((state)=>state.login.email);
  console.log(email);
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/compose' element={<ComposePage/>}/>
      <Route path='/receivemail' element={<ReceiveMail/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
