import React,{useState} from 'react'
import Wrapper from '../Wrappers/LoginWrapper'
import { useNavigate,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {
 
  const {total} = useSelector((state)=> state.cart)
  console.log(total);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email:'',
    password:''
  });

  const loggedUser = JSON.parse(localStorage.getItem('user'))
  

  const handleChange = (e)=> {
    setUser({...user,[e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(user.email === '' || user.password === ''){
      alert('Please Enter your details')
    }

    if(user.email === loggedUser?.email && user.password === loggedUser?.password){
      localStorage.setItem('userLogged',true)
      navigate('/')
    }else{
      alert('Invalid credentials')
    }
  }

  return (
    <Wrapper>
      <div className="Container">
        
        <div className='Heading'>
          <h1>LOGIN</h1>
        </div >
        <form onSubmit={handleSubmit} >
          <div className="email Form_Row">
            <label htmlFor="email">Email</label><br />
            <input  className='Input_Field' value={user.email} type="email" 
                    placeholder='Please enter your email' 
                    id='email' 
                    name='email'
                    onChange={handleChange}
             />
          </div>
          <div className="password Form_Row">
            <label className='Input_Field' htmlFor="password">Password</label><br />
            <input className='Input_Field' value={user.password} type="password" 
                    placeholder='Please enter your password' 
                    id='password' 
                    name='password' 
                    onChange={handleChange}
                    autoComplete='off'
              />
          </div>
          <div className="Submit Form_Row">
                <button type='submit' >Login</button>
              </div>

        </form>
        <div>Don't have an account? <Link to='/register'>Register</Link></div>
      </div>

    </Wrapper>
  )
}

export default Login