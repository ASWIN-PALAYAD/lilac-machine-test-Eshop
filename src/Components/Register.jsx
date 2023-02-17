import React,{useState} from 'react'
import Wrapper from '../Wrappers/RegisterWrapper'
import { useNavigate,Link } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name:'',
    email:'',
    password:''
  })

const handleSubmit = (e) => {
  e.preventDefault();
  if(user.email === '' || user.password === '' || user.name === ''){
    alert('Please Enter your details')
  }
  localStorage.setItem('user',JSON.stringify(user))
  navigate('/login')
}
const handleChange = (e)=> {
  e.preventDefault();
  setUser({...user,[e.target.name]:e.target.value})
}

  return (
    <Wrapper>
        <div className="Container">
        <div className="Heading">
          <h1>REGISTER</h1>
        </div>
            <form onSubmit={handleSubmit}>
              <div className="name Form_Row">
                <label htmlFor="name">Name</label><br />
                <input className='Input_Field' value={user.name} onChange={handleChange} type="text" name='name' placeholder='Enter your name'  />
              </div>
              <div className="email Form_Row">
                <label htmlFor="email">Email</label><br />
                <input className='Input_Field' value={user.email} onChange={handleChange} type="email" name='email' placeholder='Enter your email' />
              </div>
              <div className="password Form_Row">
                <label htmlFor="pasword">password</label> <br />
                <input className='Input_Field' value={user.password} onChange={handleChange} type="password" name='password' placeholder='**************' autoComplete="off"  />
              </div>
              <div className="Submit Form_Row">
                <button className='SubmitButton' type='submit' >Register</button>
              </div>
              
            </form> 
            <div>
                already have account? please <Link  to='/login'>Login</Link> 
              </div>
        </div>



    </Wrapper>
  )
}

export default Register