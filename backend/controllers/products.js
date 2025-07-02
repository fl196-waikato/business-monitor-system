
const productModel = require('../models/productModel'); // 引入产品模型，访问数据库中的产品信息

// 处理产品展示
const products = async (req, res) => {
  const { statusFilter,search } = req.body; // 获取请求体中的status,search等参数
  console.log('🔔 /api/productManagement hit with:', req.body);
  try {
    // 查询产品信息，参数为空时查全部
    const products = await productModel.findProducts(statusFilter, search );
    res.status(200).json(products);
  } catch (error) {
    console.error('❌ DB Error:', error.code, error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { products }; // 导出 products 函数