const db = require('../config/db');// using the database

function findEmployeeByEmployeeID(employee_id,employee_name,employee_email){
      return new Promise((resolve,reject)=>{
        db.query(
            'select * from Employees where employee_id = ? and employee_name = ? and email = ?',
            [employee_id, employee_name,employee_email],
            (err,results)=>{
                if(err) reject(err);
                else resolve(results[0]);
            }
        );

      });

};

function saveEmployee(employee_id,employee_name,employee_email,repeat-password){
    return new Promise((resolve, reject)=>{
        
    }
}


