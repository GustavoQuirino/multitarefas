import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Timer from './pages/Timer';
import Cep from './pages/Cep';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Cep/>}/>
        <Route path="/timer" element={<Timer/>}/>
      </Routes>
    </div>
  );
}

export default App;
