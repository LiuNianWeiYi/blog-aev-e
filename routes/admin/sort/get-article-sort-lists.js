var express = require('express');
var router = express.Router();
var query = require('../../../model/query');

/* GET 获取文章分类列表 */
router.get('/', function(req, res, next) {
  var sql = "SELECT * FROM `article_sort`";

  query(sql, []).then(function (data) {
    var resultData = [];
    for (var i = 0; i < data.length; i++) {
      resultData[i] = {
        sortId: data[i].article_sort_id,
        sortName: data[i].article_sort_name,
        sortOrder: data[i].article_sort_order
      };
    }
    res.status(200).json({
      result: resultData,
      message: '查询分类成功',
      status: 200
    });
  }).catch(function (err) {
    res.status(200).json({
      result: [],
      message: '查询分类失败',
      status: 400
    });
  });
});

module.exports = router;
