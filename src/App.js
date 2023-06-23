import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Reviews from'./components/Reviews';
import Gallery from'./components/Gallery';
import Login from './components/Login';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App theme1">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
