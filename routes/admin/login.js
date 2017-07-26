var express = require('express');
var router = express.Router();
var query = require('../../model/query');

/* POST 登录 */
router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(password);
  var sql = 'SELECT * FROM `admin` WHERE `admin_name`=? AND `admin_pwd`=?';

  query(sql, [username, password]).then(function (data) {
    if (data.length > 0) {
      // 查询的结果大于 0, 则用户名/密码正确
      res.status(200).json({
        username: data[0].admin_nickname,
        token: '',
        message: '登录成功',
        status: 200
      });
    } else {
      // 返回登录失败信息
      res.status(200).json({
        username: '',
        token: '',
        message: '用户名或密码错误',
        status: 400
      });
    }
  }).catch(function (err) {
    // 返回登录失败信息
    res.status(200).json({
      username: '',
      token: '',
      message: '用户名或密码错误',
      status: 400
    });
  });
});

/* POST 登录 */
router.get('/', function(req, res, next) {
  res.status(200).json({
    username: 'admin',
    token: '',
    message: '登录成功',
    status: 200
  });
});

module.exports = router;
