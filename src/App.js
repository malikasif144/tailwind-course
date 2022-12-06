
import './App.css';
import Banner from './components/Banner';
import Experts from './components/Experts';
import Footer from './components/Footer';
import Header from './components/Header';
import Newsletter from './components/Newsletter';
import Plans from './components/Plans';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Banner/>
      <Experts/>
      <Newsletter/>  
      <Plans/>
      <Footer/>
      
    </div>
  );
}

export default App;
