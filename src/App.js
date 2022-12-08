import "./App.css";
// import Banner from "./components/Banner";
// import Experts from "./components/Experts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
// import Newsletter from "./components/Newsletter";
// import Plans from "./components/Plans";
import {Routes,Route} from 'react-router-dom'
import DropDown from "./components/DropDown";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="dropdown" element={<DropDown/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
