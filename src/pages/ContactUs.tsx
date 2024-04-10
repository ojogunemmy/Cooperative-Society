import React from "react";
import Input from "../components/Inputs";

const ContactUs = ()=>{
    return(
        <div className="body">
   
        <h2>Contact</h2>
        <p> Cultivating Connections: Reach out to us today to join our academic community, collaborate on initiatives, or inquire about our services. Let's embark on a journey of knowledge together! </p>
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