import React from "react";
import { Link, Outlet } from "react-router-dom";
import { UseAppDispatch,UseAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { setPage } from "../app/features/pageSlice";
import { inherits } from "util";


function Header(props:any){
  const value = UseAppSelector((state:RootState ) => state.counter.value)
  const page = UseAppSelector((state:RootState ) => state.page.page)
  const dispatch = UseAppDispatch()

  
    return(
      
     <nav className="navbar navbar-expand-lg bg-body-tertiary fh">
        <div className="container-fluid">
         <div className="navbar-brand">
         <h1 className="p-0"><Link to={"/"} onClick={() =>dispatch(setPage("Home"))} ><small>think different</small>
         <br />
           greenpeace.</Link></h1>
       </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse bg-body-tertiary p-2 abs" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"} onClick={() =>dispatch(setPage("Home"))}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={() =>dispatch(setPage("Services"))}> Services</Link>
            </li>
              {/* <li className="nav-item dropdown">
       <a className="nav-link dropdown-toggle" href="i" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Dropdown
       </a>
       <ul className="dropdown-menu">
         <li><a className="dropdown-item" href="i">Action</a></li>
         <li><a className="dropdown-item" href="i">Another action</a></li>
         <li><hr className="dropdown-divider"/></li>
         <li><a className="dropdown-item" href="i">Something else here</a></li>
       </ul>
     </li> */}
     <li className="nav-item">
       <Link className="nav-link" to="/aboutUs" onClick={() =>dispatch(setPage("About"))}> About Us</Link>
     </li>
     <li className="nav-item">
       <Link className="nav-link" to="/contactUs" onClick={() =>dispatch(setPage("Contact"))}> Contact Us</Link>
     </li>
        </ul>
            <div className="navbar-text span">
            <Link className="nav-link " style={{backgroundColor:'inherit',color:"inherit"}} to="/signup" onClick={() =>dispatch(setPage("Login"))}> <span>Become a Member</span></Link>
            </div>
          </div>
        </div>
        <Outlet/>
      </nav>

    
    )

}



export default Header