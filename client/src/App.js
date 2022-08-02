import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';

import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Profile from './Components/Profile';
import Products from './Components/Products';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route  exact path="/" element={<Home />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/Products' element={<Products />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
