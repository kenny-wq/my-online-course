import React, { useState } from 'react'
import AuthService from '../services/Auth.service';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleRoleChange(e) {
    setRole(e.target.value);
  }

  function handleSubmit() {
      AuthService.register(username, email, password, role).then(
        () => {
          window.alert("註冊成功，您現在將被導向登入頁面");
          navigate("/login");
        }
      ).catch((e) => {
        // console.log(e.response);
        setErr(e.response.data);
      })
     
  }

  return (
    <div className='p-5'>
      {err && <div className='alert alert-danger'>{err}</div>}
      <div className="mb-3">
        <label htmlFor="username" className="form-label">用戶名稱:</label>
        <input type="text" className="form-control" id="username" onChange={handleUsernameChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">電子信箱:</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleEmailChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">密碼:</label>
        <input type="password" className="form-control" id="password" placeholder='長度至少超過6個英文或數字' onChange={handlePasswordChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">身份</label>
        <input type="text" className="form-control" id="role" placeholder='只能填入student或是instructor這兩個選象其一' onChange={handleRoleChange}/>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>註冊會員</button>
    </div>
  )
}

export default Register