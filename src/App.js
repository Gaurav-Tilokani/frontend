import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Container1 from './components/Container1';
import Container2 from './components/Container2';
import Container3 from './components/Container3';
import Container4 from './components/Container4';
import Container5 from './components/Container5';

  

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Container1 />} />
            <Route path="/container2" element={<Container2 />} />
            <Route path="/container3" element={<Container3 />} />
            <Route path="/container4" element={<Container4 />} />
            <Route path="/container5" element={<Container5 />} />
          </Routes>
      </Router>
    </>
    
  );
}

export default App;
