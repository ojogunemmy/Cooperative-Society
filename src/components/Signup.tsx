import React,{useState,useContext} from 'react'
import Input from './Inputs'
import { Link,Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'
// import { AuthenticationStatus } from './App'
// import {
//     GoogleReCaptchaProvider,
//     GoogleReCaptcha
//   } from 'react-google-recaptcha-v3';


interface entries{

    token:string,
    name:string,
    email:string,
    password:string,
    confirmPassword:string

}




function Signup(){

    const [token,setToken] = useState('')
    // const {isLoggedIn,setIsLoggedIn} = useContext(AuthenticationStatus)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setComfirmPassword] = useState('')

    //Errors state
    const [tokeError,setTokenError] = useState('')
    const [nameError,setNameError] = useState('')
    const [emailError,setEmailError] = useState('')
    const [passwordError,setPasswordError] = useState('')
    const [confirmPasswordError,setConfirmPasswordError] = useState('')
    function Verification(value:entries){
         // Name check
        if(value.name === ''){
            setNameError('Enter a name')

        }else{
            setNameError('')
        }
        
        // Email Check
        if(value.email === ''){
            setEmailError('No Email Entered')

        }else{
            setEmailError('')
        }

        // PassWord check
        if(value.password === ''){
            setPasswordError('Enter your Password ')

        }else{
            setPasswordError('')
        }

         // Comfirm Passwod check
         if(value.confirmPassword !== value.password){
            setConfirmPasswordError('Confirm password does not match ')

        }else{
            setConfirmPasswordError('')
        }

        //Token check
        if(value.token === ''){
            setTokenError('confirm you are not a robot')
        }else{
            setTokenError('')
        }
    

    }

    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault()
        console.log({
        token:token,
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword

       })

       Verification({
        token:token,
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword

       })
       
       setTimeout(()=>{

        setToken('')
        
       },10000)
    
    }

    const handleVerify =(e:any)=>{
        setToken(e)
    
    }

    return (
        <div className='auth'>
       
        <h2>Start Here</h2>
        
        <p>Unlock a World of Endless Possibilities at Our Ecommerce Hub</p>
        <form id="contactform" onSubmit={handleSubmit} action='create'>
         <table>
         <Input label='Name' type='text'  onChange={(e:any)=>setName(e.target.value)}  error={nameError}/>
         <Input label='Email' onChange={(e:any)=>setEmail(e.target.value)} star={true} type='text' error={emailError}/>
         <Input label='Password'   onChange={(e:any)=>setPassword(e.target.value)} type='password' error={passwordError}/>
         <Input label='Comfirm Password'  onChange={(e:any)=>setComfirmPassword(e.target.value)} type='password' error={confirmPasswordError}/>
         <tr className="buttons">
         <label className='mt-2 w-100'>By clicking create account you agree to platform. <Link to='/terms'> <span>Terms and conditions</span></Link></label>
        </tr>
         <tr className="buttons">
            <td><input type='submit' value='CREATE ACCOUNT' /></td>
            <label className='mt-2 w-100'>Already on Member?<Link to='/signin'> <span>Sign in</span> </Link></label>
         </tr>
          <Outlet/>
         </table>
        </form>
        </div>
    )

}

export default Signup