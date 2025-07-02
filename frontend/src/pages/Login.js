import '../css/Pages.css';
import react, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
    const[formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // 只在组件顶层调用一次
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]:value
        }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        //提交表单
        fetch('/api/login',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(async res => {
              const data = await res.json();
              if(res.status === 200) {
                alert('Login successful!');
                //window.location.href = '/home'; // 登录成功后跳转到主页
                //登录成功后
                localStorage.setItem('username', data.username);
                localStorage.setItem('userId', data.userId);
                navigate('/home',{state:{username: data.username, userId: data.userId}});
              }
              else if(res.status === 404) {
                alert('User not found!');
                setErrorMessage('User not found. Please check your username.');
              }
              else if(res.status === 401) {
                alert('Incorrect password!');
                setErrorMessage('Incorrect password. Please check your username and password.');
              }
              else {
                alert('Login failed. Please try again.');
                setErrorMessage(data.message ||'Login failed. Please try again.');
              }
            })
            .catch(err =>{
                alert('Network error. Please try again.');
                setErrorMessage('Network error. Please try again.');
            });
    };
  return (
    <div className="login-container">
      <form className="login-form" method="post" onSubmit={handleSubmit}>
          <table id="login" name="login">
            <tbody>
              <tr>
                  <td><label htmlFor="username" className="label">Username</label></td>
                  <td colSpan="2">
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>
                  </td>
              </tr>
              <tr>
                  <td>
                    <label htmlFor="password" className="label">Password</label>
                  </td>
                  <td>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                  </td>
                  <td>
                    <a href="/resetPassword" style={{fontSize: "15px", textDecoration: "none", color:" #007bff"}} onClick={()=>{window.location.href='/resetPassword'}}>Forgot password?</a>
                  </td>
              </tr>
              <tr>
                  <td></td>
                  <td colSpan="2" style={{textAlign: "cente"}}>
                      <button type="submit">Log in</button>
                      <button type="button" onClick={()=>{window.location.href='/register'}}>Register</button>
                  </td>
              </tr>
              
            </tbody>
          </table>
      </form>
      {errorMessage && (
      <div className="text-red-500 mt-4 text-center">{errorMessage}</div>
    )}
    </div>
  );
}

export default LoginPage;