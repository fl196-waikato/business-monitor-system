import '../css/Pages.css';
import React, {useRef,useState} from 'react';


function ResetPasswordPage(){
    const usernameRef=useRef();
    const [info,setInfo]=useState('');
    
    const handleSendCode = async () => {
        // 获取用户名
        const username = usernameRef.current.value;
        if (!username) {
            setInfo('Username cannot be empty');
            return;
        }
        // 发送请求到后端
        fetch('/api/send-verify-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        })
        .then(async res => {
            if (res.status === 200) {
                alert('Verification code sent to your email.');
                setInfo('');
            } 
            else {
                const data = await res.json();
                setInfo(data.message || 'An error occurred. Please try again.');
            }
        })
        .catch(err => {
            console.error('Error:', err);
            setInfo('Network error. Please try again later.');
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // 阻止默认表单提交行为
        const formData = new FormData(e.target);
        const data = {
            username: formData.get('username'),
            verifyCode: formData.get('verifyCode'),
            newPassword: formData.get('new-password')
        };
        // 提交重置密码请求
        fetch('/api/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(async res => {
            if (res.status === 200) {
                alert('Password reset successfully. You can now log in with your new password.');
                window.location.href = '/'; // 重定向到登录页面
            }
            else {
                const data = await res.json();
                setInfo(data.message || 'An error occurred. Please try again.');
            }
        })
        .catch(err => {
            console.error('Error:', err);
            setInfo('Network error. Please try again later.');
        });
    };      

    return (
        <div className="reset-password-container">
            <form action="/reset-password" method="post" onSubmit={handleSubmit}>
                <table id="reset-password" name="reset-password">
                    <tbody>
                         <tr>
                            <td><label htmlFor="usename" className="label">Username</label></td>
                            <td colSpan="2" style={{textAlign: "center"}}><input type="text" id="username" name="username" ref={usernameRef} /></td>
                            <td style={{textAlign: "center", fontSize: "15px", color: "#007bff", cursor: "pointer"}} onClick={handleSendCode}> Send verification code to your email</td>
                        </tr>
                        <tr>
                            <td><label htmlFor="verifyCode" className="label">Verify Code</label></td>
                            <td colSpan="2" style={{textAlign: "center"}}><input type="text" id="verifyCode" name="verifyCode" /></td>
                            <td colSpan="4" style={{ textAlign: "center", color: "red" }}>{info}</td>
                        </tr>
                        <tr>
                            <td><label htmlFor="new-password" className="label">New Password</label></td>
                            <td colSpan="2" style={{textAlign: "center"}}><input type="password" id="new-password" name="new-password" /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2" style={{textAlign: "center"}}>
                                <button type="submit">Submit</button>
                                <button type="button" onClick={()=> {window.location.href='/'}}>Cancel</button>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default ResetPasswordPage;
