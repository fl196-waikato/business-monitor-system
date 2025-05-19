const db = require('../config/db');// using the database
const {v4:uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 5;

async function findEmployeeByEmployeeID(employee_id,employee_name,employee_email){
    console.log('find employee in progress',employee_id,employee_name,employee_email );
    try{
        const [rows] = await db.execute(
            'select * from Employees where employee_id = ? and employee_name = ? and email = ?',
            [employee_id, employee_name,employee_email]
        );
        if (rows.length ===0){
            console.warn('no emplyee matches');
            return null;
        }
        return rows[0];

    }catch(err){
        console.error('DB search failed', error.message);
        throw err;
    }

};

async function insertUser(employee_email,plainPassword){
    const hashPassword = await bcrypt.hash(plainPassword,saltRounds);// 密码存储到数据库之前进行hash加密,保障密码安全;
    console.log('🔐 加密后密码：', hashPassword);
    console.log('🔐 加密后密码长度：', hashPassword.length);
    const user_token = uuidv4(); // 随机生成user_token;

    return new Promise((resolve, reject)=>{
        db.query(
            'insert into Users_PCMS (user_name, password,user_token) values (?,?,?) ',
            [employee_email,hashPassword,user_token],
            (err,result)=>{
                if(err){
                    console.error('❌ insertUser DB Error:', err.code, err.message);
                    reject(err);
                }else {
                    console.log('✅ 插入成功:', result);
                    resolve({user_token,result});//返回user_token到前端调用;
                }
            }
        );
    });
};

module.exports = {
    findEmployeeByEmployeeID,
    insertUser
};






