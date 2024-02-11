import React from "react";
import pic1 from "../components/images/img_1.gif"
import pic2 from "../components/images/img_2.gif"


const AboutUS = ()=>{
    return(
        <>
     <div className="body">
        <h2>About Us</h2>
        <img src={pic1} alt="" width="89" height="78" className="floated" />
        <p><span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. </span><br />
          Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra condimentum, lorem tellus eleifend magna, eget fringilla velit magna id neque. Curabitur vel urna. In tristique orci porttitor ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero.
        <img src={pic2} alt="" width="89" height="82" className="floated" />
        </p>
        <p><span>Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</span><br />
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. orem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
        </div>
      <div className="bg"></div>
      
        </>
    )

}

export default AboutUS