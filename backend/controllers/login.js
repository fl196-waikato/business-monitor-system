// This is for the details about the page
const bcrypt = require('bcrypt'); // 引入 bcrypt 用于密码的加密和验证
const saltRounds = 5;
const userModel = require('../models/userModel'); // 引入用户模型，访问数据库中的用户信息

// 处理用户登录
const login = async (req, res) => {
  const { username, password } = req.body; // 获取请求体中的用户名和密码

  try {
    // 查询用户信息
    const user = await userModel.findUserByUsername(username);
    if (!user) {
      return res.status(404).json({ message: 'User not found' }); // 如果没有找到用户，返回 404
    }

    // 比较密码（假设数据库中的密码已被加密存储）
    const password = await bcrypt.hash(password, saltRounds);
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Incorrect password' }); // 如果密码不正确，返回 401
    }

    // 登录成功，返回用户 ID
    res.status(200).json({ message: 'Login successful', userId: user.id });
  } catch (error) {
    // 捕获服务器错误
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { login }; // 导出 login 函数
