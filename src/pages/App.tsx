import React from 'react';
import '../components/css/App.css';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import HomePage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './Services';
import AboutUS from './AboutUs';
import ContactUs from './ContactUs';
import SigninPage from './SigninPage';
import SignupPage from './SignupPage';
import Terms from '../components/TermsAndCondition';

import Sidenav from '../components/sidenav';
import HomeIntro from '../components/HomeIntro';


function App() {

  return (
   
    <Router> 
      <div className='container-fluid'>
      <Header/>
        <div className='container-xl'>
      
      <HomeIntro/>

      

       <div className='container-fluid '>
       <div className="row align-items-start">
       <Sidenav/>
        <div className='col-12 col-md-8 col-sm-8 mt-3'>
       
           <Routes>
             <Route path='/' element={<HomePage/>}></Route>
             <Route index element={<HomePage/>}></Route>
             <Route path='services' element={<Services/>}></Route>
             <Route path='aboutUs' element={<AboutUS/>}></Route>
             <Route path='contactUs' element={<ContactUs/>}></Route>
             <Route path='signup' element={<SignupPage/>}></Route>
             <Route path='signin' element={<SigninPage/>}></Route>
             <Route path='terms' element={<Terms/>}></Route>
             <Route path='section' element={<Sidenav/>}></Route>

             
           </Routes>

        </div>

        </div>
       
         
      </div>
      
       </div>
       <Footer/>
        </div>
     
       </Router>


  );
}

export default App;
