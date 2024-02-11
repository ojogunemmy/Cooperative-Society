import React from "react";
import img from "../components/images/more.gif"
import pic from "../components/images/img_1.gif"


function Post(props:any){

    return(
        <>
            
            <h2>Template License </h2>
            <img src={pic} alt="" width="89" height="78" className="floated" />
            <p><span>Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</span></p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam eveniet consequatur porro repellendus maiores harum quae delectus, pariatur qui et, ex aspernatur iusto dolorum exercitationem eius placeat, ipsum molestias debitis. Debitis, quaerat dicta! Adipisci quasi excepturi pariatur numquam quam esse hic repudiandae nemo quaerat nihil eligendi, fugit ipsum aliquam.</p>
            <a href="i"> <img src={img} alt="" width="67" height="24"  /></a>
            <div className="bg"></div>
        </>
    )

}



export default Post