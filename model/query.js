var mysql = require('mysql');

// 创建 Mysql 连接池
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'blog_aev_e'
});

/**
 * 以 Promise 对象的方式获取查询结果
 * @param {String} sql - Sql语句
 * @param {Array}  args - Sql 语句的参数
 * @return {Object<Promise>} - Promise 实例对象
 */
var query = function (sql, args) {
  var sql = sql || '';
  var args = args || [];
  return new Promise(function (resolve, reject) {
    pool.getConnection(function (err, connection) {
      connection.query(sql, args, function (err, result) {
        if (err) {
          reject(err);
        } else if (result) {
          resolve(result);
        }
        connection.release();
      });
    });
  });
}

module.exports = query;
