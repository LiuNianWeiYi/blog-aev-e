var express = require('express');
var router = express.Router();
var query = require('../../../model/query');

/* GET 获取文章列表 */
router.get('/', function(req, res, next) {
  var startRow = parseInt(req.query.startRow);
  var listsLength = parseInt(req.query.articleListsLength);
  console.log(startRow);
  var sql = "SELECT `article_id`, `article_title`, `article_summary`, `article_sort_id` FROM `article` ORDER BY `article_id` ASC LIMIT ?,?";

  query(sql, [startRow, listsLength]).then(function (data) {
    var resultData = [];
    for (var i = 0; i < data.length; i++) {
      resultData[i] = {
        articleId: data[i].article_id,
        articleTitle: data[i].article_title,
        articleOutline: data[i].article_summary,
        articleSortName: data[i].article_sort_id
      };
    }
    res.status(200).json({
      result: resultData,
      message: '查询文章列表成功',
      status: 200
    });
  }).catch(function (err) {
    res.status(200).json({
      result: [],
      message: '查询文章列表失败',
      status: 400
    });
  });
});

module.exports = router;
