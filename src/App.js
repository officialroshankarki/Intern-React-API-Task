import MyHeading from "./components/MyHeading";
import "./styles/App.css";
import "./styles/Header.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"


function App(){
return(
 <Router>

< MyHeading />
  <Routes>

<Route path="/Home" element={<Home />} />
<Route path="Contact/" element={<Contact />} />
<Route path="/About" element={<About />} />

  </Routes>
 
 </Router>
);
}

export default App;