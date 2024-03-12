import React,{useState,useContext} from 'react'
import { Link,Outlet } from 'react-router-dom'
import Input from './Inputs'
import { UseAppDispatch,UseAppSelector } from './app/hooks'
// import { RootState } from './app/store'
// import { increment } from './app/features/sideSlice'




interface entries{

    token:string,
    email:string,
    password:string,

}



function Signin(){
    // const value = UseAppSelector((state:RootState ) => state.counter.value)
    const dispatch = UseAppDispatch()
    const [token,setToken] = useState('')
    // const {isLoggedIn,setIsLoggedIn} = useContext(AuthenticationStatus)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    
    //Errors state
    const [tokeError,setTokenError] = useState('')
    const [emailError,setEmailError] = useState('')
    const [passwordError,setPasswordError] = useState('')

    function Verification(value:entries){
      
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

      
        //Token check
        if(value.token === ''){
            setTokenError('confirm you are not a robot')
        }else{
            setTokenError('')
        }
    
       setTimeout(()=>{

            setToken('')
            
        },10000)

    }



    const handleVerify =(e:any)=>{
        setToken(e)
      
       
    }
    
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        // dispatch(increment())
       
        console.log({
            token:token,
            email:email,
            password:password

        })

        Verification({
            token:token,
            email:email,
            password:password

        })
        // setIsLoggedIn({name:'emco',id:'ksdkjsksdks',status:true})
    }
    
   
      
       


    return (
        <div className='auth'>
        
        <h2>Hand Shake</h2>
        <p> Morbi tincidunt, orci ac convaltrs atrquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra condimentum, lorem tellus eleifend magna, eget fringilla vetrt magna id neque. Curabitur vel urna. In tristique orci porttitor ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing etrt. Donec trbero. </p>

        <form id="contactform" onSubmit={handleSubmit}>
        {/* <h3>Experience a World of Endless Possibilities at Our Ecommerce Hub</h3> */}
        <table>
        <Input label='Email' onChange={(e:any)=>setEmail(e.target.value)} type='text' error={emailError}/>
        
        <Input label='Password' onChange={(e:any)=>setPassword(e.target.value)} type='password' error={passwordError}/>
        <tr className="buttons">
         <label className='mt-2 w-100'> <Link to='/Forgot'><span>Forgot password</span></Link></label>
        </tr>
       
       
        <tr className="buttons">
        <td><input type="submit" name="imageField" id="imageField"  value="Send message" className="send"/></td>
        <td><label className='mt-2 w-100'>Don't have an account? <Link to='/Signup' ><span>Create one.</span></Link></label></td>
        </tr>
       
        
        

        </table>
        
       <Outlet/>
       </form>
       </div>

       
    )


        }

export default Signin