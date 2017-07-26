var express = require('express');
var router = express.Router();

var query = require('../../../model/query');

/* POST 添加文章分类 */
router.post('/', function(req, res, next) {
  var sortName = req.body.sortName;
  var sortOrder = parseInt(req.body.sortOrder);
  var sql = "INSERT INTO `article_sort`(`article_sort_name`, `article_sort_order`) VALUES (?, ?)";

  query(sql, [sortName, sortOrder]).then(function (data) {
    res.status(200).json({
      message: '添加分类成功',
      status: 200
    });

  }).catch(function (err) {
    res.status(200).json({
      message: '添加分类失败',
      status: 400
    });
    console.log(err);
  });
});

module.exports = router;
