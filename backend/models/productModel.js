const db = require('../config/db'); // 引入数据库连接模块（假设你已经创建了数据库连接）

// 根据用户筛选信息查找产品列表
const findProducts = async (statusFilter,search) => {
  try {
    let sql = 'SELECT * FROM Products WHERE 1=1';
    const params = [];

    if (statusFilter !== undefined && statusFilter !== '') {
      sql += ' AND product_status = ?';
      params.push(statusFilter);
    }
    if (search && search.trim() !== '') {
      sql += ' AND product_id LIKE ?';
      params.push(`%${search}%`); // 使用 LIKE 模糊查询
    }
    console.log('SQL Query:', sql);
    const [products] = await db.query(sql, params);
    console.log('Products found:', products);
    return products;
  } catch (err) {
    console.error('DB query error:', err);
    throw err;
  }
};

module.exports = { findProducts}; // 导出 findProducts 函数