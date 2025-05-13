

const db = require('../config/db'); // 引入数据库连接模块（假设你已经创建了数据库连接）

// 根据用户名查找用户
const findUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    // 查询数据库，查找指定用户名的用户
    db.query(
      'SELECT * FROM Users_PCMS WHERE username = ?',
      [username],
      (err, results) => {
        if (err) reject(err); // 查询失败，返回错误
        else resolve(results[0]); // 返回查询到的用户数据
      }
    );
  });
};

module.exports = { findUserByUsername }; // 导出 findUserByUsername 函数