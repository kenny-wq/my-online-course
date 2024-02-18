import React, { useContext, useState } from 'react'
import AuthService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit() {
      AuthService.login(email,password).then(
        (response) => {
          setCurrentUser(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          window.alert("登入成功，您即將被導向到主頁面");
          navigate("/");
        }
      ).catch((e) => {
        console.log(e);
        setErr(e.response.data);
      })
  }
  return (
    <div className='p-5'>
      {err && <div className='alert alert-danger'>{err}</div>}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">電子信箱:</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleEmailChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">密碼:</label>
        <input type="password" className="form-control" id="password" placeholder='長度至少超過6個英文或數字' onChange={handlePasswordChange}/>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>登入會員</button>
    </div>
  )
}

export default Login