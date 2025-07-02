console.log('✅ server.js 已启动');

const express=require('express');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth'); // 引入认证相关的路由

const app =express();

//Middleware
app.use(cors());
app.use(express.json());

// Simple route
app.get('/',(req,res)=>{
    res.send('Server is running');
});

app.use((req, res, next) => {
  console.log('收到请求:', req.method, req.url);
  next();
});
// 配置路由
app.use('/api', authRoutes); // 所有以 /api 开头的请求都会被 authRoutes 处理

//Start server
const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});