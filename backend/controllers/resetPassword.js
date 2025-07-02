const userModel = require('../models/userModel'); // 引入用户模型，访问数据库中的用户信息
const redis = require('redis');

// 创建 Redis 客户端
const redisClient = redis.createClient();
redisClient.connect().catch(console.error);

// 处理用户重制密码存储
const resetPassword = async (req, res) => {
  const { username,verifyCode, newPassword } = req.body; // 获取请求体中的参数
  console.log('🔔 /api/reset-password hit with:', req.body);
  // 验证邮箱是否通过

  try {
    // 1. 从 Redis 获取验证码
    const cacheKey = `verifyCode:${username}`;
    const cachedCode = await redisClient.get(cacheKey);

    if (!cachedCode) {
      return res.status(400).json({ message: 'Verification code expired or not found.' });
    }
    if (cachedCode !== verifyCode) {
      return res.status(400).json({ message: 'Verification code incorrect.' });
    }
    // 2. 验证码正确，更新密码
    const result = await userModel.updatePassword(username, newPassword );
    res.status(200).json({message: 'Password reset successful.',result});
  } catch (error) {
    console.error('❌ DB Error:', error.code, error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { resetPassword }; // 导出函数