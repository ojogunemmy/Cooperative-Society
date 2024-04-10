import React,{useState} from 'react'
import Input from './Inputs'
import { Link,Outlet, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { UseAppDispatch, UseAppSelector } from './app/hooks'
import { getItem, setItem } from './app/features/localstorageSlice'
import { verify } from 'crypto'
// import { AuthenticationStatus } from './App'
// import {
//     GoogleReCaptchaProvider,
//     GoogleReCaptcha
//   } from 'react-google-recaptcha-v3';


export interface entries{

    token:string,
    name:string,
    email:string,
    password:string,
    confirmPassword:string

}




function Signup(){
    const dispatch = UseAppDispatch()
    const item = UseAppSelector((state) => state.storage.getItem)

    const [token,setToken] = useState('')
    const navigate = useNavigate()

     //Errors state
     const [tokeError,setTokenError] = useState('')
     const [nameError,setNameError] = useState('')
     const [emailError,setEmailError] = useState('')
     const [passwordError,setPasswordError] = useState('')
     const [confirmPasswordError,setConfirmPasswordError] = useState('')
    // const {isLoggedIn,setIsLoggedIn} = useContext(AuthenticationStatus)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setComfirmPassword] = useState('')

   

    const verify = (value:entries) =>{
         // Name check
        if(value.name !== ''){
            setNameError('')

        }else{
            setNameError('Enter a name')

        }
        
        // Email Check
        if(value.email !== ''){
            setEmailError('')

        }else{

            setEmailError('No Email Entered')

            
        }

        // PassWord check
        if(value.password !== ''){

            setPasswordError('')
           

        }else{
            setPasswordError('Enter your Password ')
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
       

       const signupdata:entries = {
        token:token,
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword

       }
       
       verify(signupdata)

        console.log(signupdata)


       if(email !== '' && name !== '' && password !== '' &&  confirmPassword === password){
        const data = JSON.stringify(signupdata)
        dispatch(getItem("signup"))
        // console.log(item?.toString())
 
        dispatch(setItem({key:"signup",value:data}))
        navigate("/signin")
        
       }else{
        verify(signupdata)
       }
       

       
    //    setTimeout(()=>{

    //     setToken('')
        
    //    },10000)
    
    }

    const handleVerify =(e:any)=>{
        setToken(e)
    
    }


    return (
        <div className='auth'>
       
        <h2>Start Here</h2>
        
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