const bcrypt = require('bcrypt');
console.log('⚠️ 这是一段新加的测试信息，证明加载了最新的 test.js');
const test = async(req,res) =>{
    console.log('✅ /api/test hit with:', req.body);
    

    // 直接返回，不调用数据库
    const hash = await bcrypt.hash(req.body.password, 5);
    res.status(201).json({ message: 'Test successful about bcrypt', echo: hash });
};

module.exports={test};