import React from "react";
import img from "../images/fbg_1.jpg"
import gall from "../images/gall_1.jpg"
import view from "../images/view.gif"
import { Link } from "react-router-dom";
import { UseAppDispatch } from "../app/hooks";
import { setPage } from "../app/features/pageSlice";

function Footer(props:any){

  const dispatch = UseAppDispatch();

  const date = new Date();

    return(
        <>
    <div className="container-fluid FBG">
    <div className="row align-items-start d-flex justify-content-center FBG_resize">
      <div className="col-12 col-md-4 col-sm-12 blok">
      <h1 className="p-0 link"><Link to={"/"} className="link" onClick={() =>dispatch(setPage("Home"))} ><small>Academic Alliance</small>
         <br />
           Association</Link></h1>
        {/* <h2>Image Gallery</h2>
        <img src={gall} alt="" width="42" height="42" /><img src="images/gall_2.jpg" alt="" width="42" height="42" /><img src="images/gall_3.jpg" alt="" width="42" height="42" /><img src="images/gall_4.jpg" alt="" width="42" height="42" /><img src="images/gall_5.jpg" alt="" width="42" height="42" /><img src="images/gall_6.jpg" alt="" width="42" height="42" />
        <div className="clr"></div>
        <h2>Lorem ipsum </h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. </p> */}
      </div>
      <div className="col-12 col-md-4 col-sm-12 blok">
        <h2>Quick Links</h2>
        <p> Navigate effortlessly through  <br />
       our association's resources, events, services, and more. Find what you need swiftly and dive into the world of academic excellence with ease. </p>
        <div className="bg"></div>
        <ul>
          <li><a href="index.html">consequat molestie</a></li>
          <li><a href="index.html">sem justo</a></li>
          <li><a href="index.html">semper</a></li>
          <li><a href="index.html">magna sed purus</a></li>
        </ul>
      </div>
      <div className="col-12 col-md-4 col-sm-12 blok">
        <h2> Latest Works</h2>
        <div className="bg"></div>
        <img src={img} alt="" className="normal" />
        <div className="clr"></div>
        <p>Dummy text of the printing</p>
        <p>Been the industry's standard dummy text ever since thes, when rinter.Simply dummy text of thorem Ipsum has bee the industry's standard dummy text.</p>
        <a href="index.html"><img src={view} alt="" width="109" height="24" className="link" /></a></div>
      <div className="clr"></div>
    </div>
  </div>
  <div className="col-12 footer">
    <div className="footer_resize">
      <p className="lf">Copyright &copy; {date.getFullYear()} <a href="/">Academic Alliance Association</a> - All Rights Reserved</p>
      <div className="clr"></div>
    </div>
    <div className="clr"></div>
  </div>

        </>

    )

}

export default Footer