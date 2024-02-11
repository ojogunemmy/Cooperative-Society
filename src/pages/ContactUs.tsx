import React from "react";
import Input from "../components/Inputs";

const ContactUs = ()=>{
    return(
        <div className="body">
   
        <h2>Contact</h2>
        <p> Morbi tincidunt, orci ac convaltrs atrquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra condimentum, lorem tellus eleifend magna, eget fringilla vetrt magna id neque. Curabitur vel urna. In tristique orci porttitor ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing etrt. Donec trbero. </p>
        <form action="#" method="post" id="contactform">
          <table >
           
            <Input label='name'  type='text' />
            <Input label='Email' type='email'/>
            <tr>
              <td><label htmlFor="message">Your Message<span>*</span></label></td>
              <td><textarea id="message" name="message" rows={6} > </textarea></td>
            </tr>
            <br />
            <tr className="buttons">
              <td ><input type="submit" name="imageField" id="imageField"  value="Send message" className="send" /></td>
            </tr>
          </table>
        </form>
      </div>
     
    )
}

export default ContactUs