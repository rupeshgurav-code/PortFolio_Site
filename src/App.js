import Main from './Main';
import './App.css';
import NavBar from './NavBar';
import Skill from './Skill';
import Bottom from './Bottom';
import Platform from './Platform';
import { Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import More from './More';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/platform' element={<Platform/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/more' element={<More/>}/>
        <Route path="/"
          element={
            <>
              <Main />
              <Skill />
            </>
          }
        />
      </Routes>
      <Bottom />
    </div>
  );
}

export default App;
