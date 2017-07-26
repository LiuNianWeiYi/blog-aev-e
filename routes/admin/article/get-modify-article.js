var express = require('express');
var router = express.Router();
var query = require('../../../model/query');

/* GET 修改文章获取数据 */
router.get('/', function(req, res, next) {
  var articleId = parseInt(req.query.articleId);
  var sql = "SELECT * FROM `article` WHERE `article_id`=?";

  query(sql, [articleId]).then(function (data) {
    var resultData = {
      articleId: data[0].article_id,
      articleTitle: data[0].article_title,
      articleOutline: data[0].article_summary,
      articleSortId: data[0].article_sort_id,
      articleContent: data[0].article_content,
    };
    res.status(200).json({
      result: resultData,
      message: '查询文章成功',
      status: 200
    });
  }).catch(function (err) {
    res.status(200).json({
      result: '',
      message: '查询文章失败',
      status: 400
    });
  });
});

module.exports = router;
