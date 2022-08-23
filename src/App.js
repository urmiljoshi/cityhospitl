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
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [toloding,setToloding] =useState(false)
  const [data,setData] = useState([])


  const orgDate =[
    {
      id:-202,
      name:-'price'
    },
    {
      id:-101,
      name:-'nishid'
    }
  ]

  useEffect(() =>{
    setToloding(true)
    setTimeout(() => {setToloding(false);setData(orgDate)},2000)
    
  },[])

  console.log(toloding,data);
  return (
    <div>
      {/* <Headar />
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/Departments"} component={Departments}/>
        <Route exact path={"/about"} component={About}/>
        <Route exact path={"/Doctors"} component={Doctors}/>
        <Route exact path={"/Contact"} component={Contact}/>
        <Route exact path={"/Appointment"} component={Appointment}/>
        </Switch>
      <Footer /> */}
    </div>
  );
}

export default App;
