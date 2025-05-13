const express = require('express'); // 引入 Express 模块
const router = express.Router(); // 创建一个路由实例
const { login } = require('../controllers/login'); // 引入控制器中的登录方法

// 定义 POST 请求的路由，处理用户登录
router.post('/login', login);

module.exports = router; // 导出路由，供 server.js 使用