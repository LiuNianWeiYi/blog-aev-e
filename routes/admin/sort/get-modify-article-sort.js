var express = require('express');
var router = express.Router();
var query = require('../../../model/query');

/* GET 获取要修改的文章分类数据 */
router.get('/', function(req, res, next) {
  var articleSortId = req.query.articleSortId;
  var sql = "SELECT * FROM `article_sort` WHERE `article_sort_id`=?";
  console.log(articleSortId);
  query(sql, [articleSortId]).then(function (data) {
    console.log(data);
    var resultData = {
      sortId: data[0].article_sort_id,
      sortName: data[0].article_sort_name,
      sortOrder: data[0].article_sort_order
    };

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
