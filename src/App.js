import logo from "./logo.svg";
import "./App.css";
import Login from "./modules/Login";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { Route, Routes } from "react-router-dom";
import HomePage from "./modules/HomePage";
// import HomePage from "./modules/HomePage";



function App() {
  return (
    // <div className="col-2">
      <div className="">
        <Routes>
          <Route path="/" element={ <Login />}/>
          <Route path="/home-page" element={ <HomePage />}/>
        </Routes>
         
        
      </div>
    
  );
}

export default App;
