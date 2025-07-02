const {v4:uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 5;
const db = require('../config/db'); // 引入数据库连接模块（假设你已经创建了数据库连接）

// 根据用户名查找用户
const findUserByUsername = async (username) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM Users_PCMS WHERE user_name = ?',
      [username]
    );
    return rows[0];
  } catch (err) {
    console.error('DB query error:', err);
    throw err;
  }
};

// 根据用户名更新用户密码
const updatePassword = async (username, newPassword) => {
  const hashPassword = await bcrypt.hash(newPassword,saltRounds);// 密码存储到数据库之前进行hash加密,保障密码安全;
  const user_token = uuidv4(); // 随机生成user_token;
  try {
    const [result] = await db.query(
      'UPDATE Users_PCMS SET password = ?, user_token=? WHERE user_name = ?',
      [hashPassword,user_token, username]
    );
    return result.affectedRows > 0; // 返回是否更新成功
  } catch (err) {
    console.error('DB update error:', err);
    throw err;
  }   
};    

module.exports = { 
    findUserByUsername,
    updatePassword 
  }; // 导出函数