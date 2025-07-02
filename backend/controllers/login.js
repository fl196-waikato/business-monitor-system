// This is for the details about the page
const bcrypt = require('bcrypt'); // 引入 bcrypt 用于密码的加密和验证
const saltRounds = 5;
const userModel = require('../models/userModel'); // 引入用户模型，访问数据库中的用户信息

// 处理用户登录
const login = async (req, res) => {
  const { username, password } = req.body; // 获取请求体中的用户名和密码
  console.log('Login attempt:', username);

  try {
    // 查询用户信息
    const user = await userModel.findUserByUsername(username);
    console.log('User found:', user);
    if (!user) {
      return res.status(404).json({ success:false, message: 'User not found' }); // 如果没有找到用户，返回 404
    }

    // 比较密码（假设数据库中的密码已被加密存储）
    //const password = await bcrypt.hash(password, saltRounds);
    const match = await bcrypt.compare(password, user.password);
    console.log('Password match:', match);
    if (!match) {
      return res.status(401).json({ success:false, message: 'Incorrect password' }); // 如果密码不正确，返回 401
    }

    // 登录成功，返回用户 ID
    res.status(200).json({ success:true, message: 'Login successful', userId: user.user_id, username: user.user_name }); // 返回成功状态和用户 ID
  } catch (error) {
    // 捕获服务器错误
    console.error('Login error:', error);
    res.status(500).json({ success:false, message: 'Server error', error });
  }
};

module.exports = { login }; // 导出 login 函数
