import '../css/Pages.css';
import react, {useState} from 'react';

function RegisterAccountPage(){

    const[formData, setFormData] = useState({
        employee_id: '',
        employee_name: '',
        employee_email: '',
        password: '',
        repeat_password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]:value
        }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        // 比较两次输入的密码是否一致
        if(formData.password !== formData.repeat_password){
            setErrorMessage('Password Not Match, Please Try Again');// 如果两次输入密码不一致,显示错误提示信息
            return ;
        }
        setErrorMessage('');//清空错误提示信息
        //提交表单
        fetch('/api/register',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                alert('Registration successful!');
                window.location.href = '/';
            })
            .catch(err =>{
                setErrorMessage('Registration failed. Please try again.');
            });
    };
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <table id="register-account" name="register-account">
                    <tbody>
                        <tr>
                            <td><label htmlFor="employee_id" className="label">Employee ID</label></td>
                            <td colSpan="2" style={{textAlign: "center"}}>
                                <input type="text" id="employee_id" name="employee_id" value={formData.employee_id} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="employee_name" className="label">Employee Name</label></td>
                            <td colSpan="2" style={{textAlign: "center"}}>
                                <input type="text" id="employee_name" name="employee_name" value={formData.employee_name} onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="employee_email" className="label">Employee Email</label></td>
                            <td colSpan="2" style={{textAlign: "center"}}>
                                <input type="text" id="employee_email" name="employee_email" value={formData.employee_email} onChange={handleChange}/>
                        </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password" className="label">Password</label></td>
                            <td colSpan="2" style={{textAlign: "center"}}>
                                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                        </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="repeat_password" className="label">Repeat Password</label></td>
                            <td colSpan="2" style={{textAlign: "center"}}>
                                <input type="password" id="repeat_password" name="repeat_password" value={formData.repeat_password} onChange={handleChange}/>
                        </td>
                        </tr>
                        {errorMessage && (
                            <tr>
                                <td colSpan="3" style={{ color: 'red', textAlign: 'center' }}>
                                {errorMessage}
                                </td>
                            </tr>
                        )}
                        <tr>
                            <td></td>
                            <td colSpan="2" style={{textAlign: "center"}}>
                                <button type="submit">Submit</button>
                                <button type="button" onClick={()=> {window.location.href='/'}}>Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default RegisterAccountPage;
