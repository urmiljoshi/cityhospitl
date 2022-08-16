import logo from './logo.svg';
import './App.css';
import Headar from './componets/Headar';
import Footer from './componets/Footer/Footer';
import Home from './conteinars/Home/Home';
import About from './conteinars/Home/About/About';
import Appointment from './conteinars/Appointment/Appointment';
import Contact from './conteinars/Home/Contact/Contact';
import Departments from './conteinars/Departments/Departments';
import Doctors from './conteinars/Doctors/Doctors';

function App() {
  return (
    <div>
      <Headar />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Appointment /> */}
      {/* <Contact /> */}
      {/* <Departments /> */}
      <Doctors />
      <Footer />
    </div>
  );
}

export default App;
