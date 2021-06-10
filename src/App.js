import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="bg-green-300">
      <Header></Header>
      <Home></Home>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
