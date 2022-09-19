
import './App.css';
import Layout from './component/pages/Layout';
import Home from './component/pages/Home';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Contact from './component/pages/Contact';
import LoginRes from './component/pages/Auth/LoginRes';

function App() {
  return (
    <>

  <BrowserRouter>

  <Routes>

    <Route  path = "/" element = {<Layout/>} >  
    <Route index element = {<Home/>}/>
    <Route path='contact' element = {<Contact/>}/>
    <Route path='login' element = {<LoginRes/>}/>
    </Route>

  </Routes>
  
  
  
  </BrowserRouter>
    
    
    </>
     
  
  );
}

export default App;
