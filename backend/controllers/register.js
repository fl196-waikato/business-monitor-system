// This is for the details about the page


const employeeModel = require('../models/employeeModel'); // 引入用户模型，访问数据库中的用户信息

// 处理新用户注册
const register = async (req, res) => {
  const { employee_id,employee_name,employee_email, password } = req.body; // 获取请求体中的员工ID, 姓名,邮箱, 密码
  console.log('🔔 /api/register hit with:', req.body);
  try {
    // 查询员工信息
    const employee = await employeeModel.findEmployeeByEmployeeID(employee_id,employee_name,employee_email);
    console.log("the employee has been checked in the table Employees");
    if(!employee){
        return res.status(404).json({message: 'Employee not found'}); // 如果员工信息不存在,返回404
    }         
     
    // 将用户注册信息存入用户信息表
    const newUser = await employeeModel.insertUser(employee_email,password);
    // 注册成功,返回用户ID,用户token
    res.status(200).json({ message: 'Register successful', userId: newUser.result.insertId ,userToken: newUser.user_token});
  } catch (error) {
    console.error('❌ DB Error:', error.code, error.message);

    if (
      error.code === 'PROTOCOL_CONNECTION_LOST' ||
      error.message.includes('Broken pipe') ||
      error.message.includes('not found for browse view') // 特殊情况
    ) {
      return res.status(503).json({ message: 'Database connection failed. Please try again later.' });
    }
    // 捕获服务器错误
    return res.status(500).json({ message: 'Server error', error:error.message });
  }
};

module.exports = { register }; // 导出 register 函数