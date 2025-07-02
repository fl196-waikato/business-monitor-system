const redis = require('redis');
const nodemailer = require('nodemailer');


// 创建 Redis 客户端
const redisClient = redis.createClient();
redisClient.connect().catch(console.error);


// nodemailer 邮箱配置（以qq邮箱为例，实际请用你自己的邮箱和授权码）
const transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: '346591733@qq.com',
    pass: 'oxfldspcvquqbhjb' // 授权码，不是邮箱密码
  }
});

// 生成四位随机验证码
function generateCode() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

// 发送验证码控制器
const sendVerifyCode = async (req, res) => {
  const { username} = req.body; // username 就是用户email, 建议从数据库查

  const code = generateCode();

  try {
    // 缓存到 Redis，设置10分钟过期
    await redisClient.set(`verifyCode:${username}`, code, { EX: 600 });

    // 发送邮件
    await transporter.sendMail({
      from: '346591733@qq.com',
      to: username,
      subject: 'Your Verification Code',
      text: `Your verification code is: ${code} (valid for 10 minutes)`
    });

    res.json({ message: 'Verification code sent!' });
  } catch (err) {
    console.error('Send code error:', err);
    res.status(500).json({ message: 'Failed to send code.' });
  }
};

module.exports = { sendVerifyCode };