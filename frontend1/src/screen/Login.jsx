import React, { useState } from 'react';
import './LoginPage.css'; 
import img from '../img/img.svg';
import{AiOutlineEyeInvisible} from 'react-icons/ai';
import Footer from '../components/Footer';
import{useNavigate} from 'react-router-dom'
import { ClipLoader } from 'react-spinners';
import { BsEye, BsEyeSlash } from 'react-icons/bs';


const LoginPage = () => {

  

  const [credentials, setcredentials] = useState({ email: "", password: ""});
  const [isLoading, setIsLoading] = useState(false);
  let  navigate=useNavigate();
  const handlesubmit = async (e) => {
    setIsLoading(true);
    await setTimeout(() => {
      setIsLoading(false);
    }, 2000);
      e.preventDefault();
      const response = await fetch('http://localhost:5000/loginuser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email:credentials.email,password:credentials.password})
      })
       
      const json=await response.json();
      console.log(json)
      if(!json.success){
          alert("invalid credetials")
      }
      if(json.success){
        localStorage.setItem("authtoken",json.authtoken);
        localStorage.setItem("name",json.name);
        console.log(localStorage.getItem("authtoken"))
        console.log(localStorage.getItem("name"))
        navigate('/home');
    }
   

  }
  const onchange = (event) => {
      setcredentials({ ...credentials, [event.target.name]:event.target.value })
      console.log(event.target.name)
  }


//show password
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);

const handleInputChange = (event) => {
  setPassword(event.target.value);
}

const handleTogglePassword = () => {
  setShowPassword(!showPassword);
}


  return (
    <div className="login-container">
      <div className="user-image-container">
        {/* Add circular user image here */}
        <img
          src={img}
          alt="User"
          className="user-image"
        />
      </div>
      <h1 className="login-header">Welcome!</h1>
      <p className="login-paragraph">Let's connect to your workspace.<br/> Please enter your email to continue.</p>
      <form className="login-form" onSubmit={handlesubmit}>
        <input
          type="email"
          name='email'
          placeholder="Email Address"
          className="login-input"
          value={credentials.email}
          onChange={onchange}
          
          
        />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          name='password'
          className="login-input"
          value={credentials.password} 
          onChange={onchange}
          
          
        />
    <i
        id="togglePassword"
        onClick={handleTogglePassword}
        style={{ cursor: 'pointer' }}
      >
        {showPassword ? (
          <BsEyeSlash size={20} />
        ) : (
          <BsEye size={20} />
        )}
      </i>
  <a
          href="#"
          className="login-link"
         
        >
          Forgot Password?
        </a>
        <button  type="button" className="login-button" type="submit"  disabled={isLoading} >
        {isLoading ? (
        <ClipLoader color="#ffffff"  size={10} /> // Render the spinner while loading
      ) : (
        'Login'
      )}
        </button>
      
      </form>
      
      <Footer/>

      
    </div>
  );
  };
export default LoginPage;
