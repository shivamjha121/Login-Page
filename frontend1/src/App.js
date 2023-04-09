import Home from "./screen/Home";
import Login from "./screen/Login";
import RedirectWithAuthToken from './screen/RedirectWithAuthToken'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
<div>
  <Routes>
    
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/home" element={<Home/>} />
    <Route exact path="/" element={<RedirectWithAuthToken />}/>
  
  
    
  </Routes>
  </div>
    </Router>
  );
}

export default App;
