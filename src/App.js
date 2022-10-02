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
import Loading from './conteinars/Hoc/Loading';
import Auth from './conteinars/Auth/Auth';
import Medicine from './conteinars/Medicine/Medicine';
import MedicinAdmin from './Admin/conteinars/MedicinAdmin';
import Layout from './Admin/componets/Layout';
import DoctorsAdmin from './Admin/conteinars/DoctorsAdmin';
import pesant from './conteinars/pesant/Pesant';
// const HWL = Loading(Home)
 function App() {


//  const [loding,setloding] = useState(false)
  


//   const orgDate =[
//     {
//       id:-202,
//       name:-'prince'
//     },
//     {
//       id:-101,
//       name:-'nishid'
//     }
//   ]

//   useEffect(() =>{
//     setloding(true)
//     setTimeout(() => {setloding(false)},2000)
    
//   },[])

  // console.log(loding);
  return (
    
    <div>
      {/* <HWL
            loading = {loding}
      />   */}
      {/* <Headar />
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/Departments"} component={Departments}/>
        <Route exact path={"/Medicine"} component={Medicine}/>
        <Route exact path={"/about"} component={About}/>
        <Route exact path={"/Doctors"} component={Doctors}/>
        <Route exact path={"/Contact"} component={Contact}/>
        <Route exact path={"/Appointment"} component={Appointment}/>
        <Route exact path={"/Auth"} component={Auth}/>
        </Switch>
      <Footer /> */}
      <Layout>
        <Switch>
            <Route exact path={'/MedicinAdmin'} component={MedicinAdmin}/>
            <Route exact path={'/DoctorsAdmin'} component={DoctorsAdmin}/>
            <Route exact path={'/pesant'} component={pesant}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
