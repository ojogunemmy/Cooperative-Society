import React from "react";
import SVGShape01 from '../components/SvgShape';
import { UseAppSelector } from '../components/app/hooks';
import { RootState } from '../components/app/store';


function HomeIntro(){
    const value = UseAppSelector((state:RootState ) => state.page.page)

    return(
        <div className="container-fluid main" style={value==="Home"?{visibility:"visible"}:{display:"none"}}>
        <div className="row header">
         <h2 className="col-12 col-md-12 col-lg-6 col-xl-6 bigtext"><span>Discover the boundless possibilities of academia through</span><br />
         Academic Alliance Association<br />
         </h2>
         <SVGShape01/>
        </div>
        </div>
 
    )
}

export default HomeIntro