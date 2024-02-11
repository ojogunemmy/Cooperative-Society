import React from 'react';
import '../components/css/App.css';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import HomePage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import search from "../components/images/search.gif"
import SVGShape01 from '../components/SvgShape';
import Services from './Services';
import AboutUS from './AboutUs';
import ContactUs from './ContactUs';
import SigninPage from './SigninPage';
import SignupPage from './SignupPage';
import Terms from '../components/TermsAndCondition';
import { UseAppSelector } from '../components/app/hooks';
import { RootState } from '../components/app/store';


function App() {
  const value = UseAppSelector((state:RootState ) => state.page.page)

  return (
   
    <Router> 
      <div className='container-fluid'>
      <Header/>
        <div className='container-xl'>
      
       <div className="container-fluid main" style={value==="Home"?{visibility:"visible"}:{display:"none"}}>
       <div className="row header">
        <h2 className="col-12 col-md-12 col-lg-6 col-xl-6 bigtext"><span>Big Solutions for a small planet</span><br />
        Think different. Advanced<br />
        made simple.</h2>
        <SVGShape01/>
       </div>
       </div>

      

       <div className='container-fluid '>
       <div className="row align-items-start">
        <div className='col-12 col-md-4 col-sm-4 body mt-3 sidenav '>
        
        <h2>Sidebar Menu</h2>
            <ul>
              <li><a href="i">Home</a></li>
              <li><a href="i">TemplateInfo</a></li>
              <li><a href="i">Style Demo</a></li>
              <li><a href="i">Blog</a></li>
              <li><a href="i">Archives</a></li>
            </ul>
            <div className="bg"></div>
            <h2>Sponsors</h2>
            <ul className="sponsors">
              <li className="sponsors"><a href="i">Lorem ipsum dolor</a><br />
                Donec libero. Suspendisse bibendum</li>
              <li className="sponsors"><a href="i">Dui pede condimentum</a><br />
                Phasellus suscipit, leo a pharetra</li>
              <li className="sponsors"><a href="i">Condimentum lorem</a><br />
                Tellus eleifend magna eget</li>
              <li className="sponsors"><a href="i">Fringilla velit magna</a><br />
                Curabitur vel urna in tristique</li>
              <li className="sponsors"><a href="i">Suspendisse bibendum</a><br />
                Cras id urna orbi tincidunt orci ac</li>
              <li className="sponsors"><a href="i">Donec mattis</a><br />
                purus nec placerat bibendum</li>
            </ul>
            <div className="bg"></div>
            <h2>Search</h2>
            <div className="search">
              <form id="form1" name="form1" method="post" action="i">
                <span>
                <input name="q" type="text" className="keywords" id="textfield" placeholder='Search...' />
                </span>
                <input name="b" type="image" alt="" src={search} className="button" />
              </form>
            </div>
        </div>
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
