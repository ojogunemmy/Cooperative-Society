import React from "react";
import search from "../components/images/search.gif"
import { UseAppSelector } from "./app/hooks";
import { RootState } from "./app/store";

function Sidenav(){
  const value = UseAppSelector((state:RootState ) => state.sidebar.side)

    return(
        <div className={'col-12 col-md-4 col-sm-4 body mt-3 sidenav '}>
        
        <h2>Suggestions</h2>
            <ul>
              <li><a href="i">Home</a></li>
              <li><a href="i">TemplateInfo</a></li>
              <li><a href="i">Style Demo</a></li>
              <li><a href="i">Blog</a></li>
              <li><a href="i">Archives</a></li>
            </ul>
            <div className="bg"></div>
            {/* <h2>Sponsors</h2>
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
            <div className="bg"></div> */}
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
    )
}

export default Sidenav