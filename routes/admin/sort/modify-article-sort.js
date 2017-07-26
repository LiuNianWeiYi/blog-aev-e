var express = require('express');
var router = express.Router();
var query = require('../../../model/query');

/* POST 修改文章分类 */
router.post('/', function(req, res, next) {

  var sortId = parseInt(req.body.sortId);
  var sortName = req.body.sortName;
  var sortOrder = parseInt(req.body.sortOrder);
  var sql = "UPDATE `article_sort` SET `article_sort_name`=?, `article_sort_order`=? WHERE `article_sort_id`=?";

  query(sql, [sortName, sortOrder, sortId]).then(function (data) {
    res.status(200).json({
      message: '修改分类成功',
      status: 200
    });
  }).catch(function (err) {
    res.status(200).json({
      message: '添加分类失败',
      status: 400
    });
  })
});

module.exports = router;
