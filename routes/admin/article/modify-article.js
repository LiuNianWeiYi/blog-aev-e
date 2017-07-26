var express = require('express');
var router = express.Router();
var query = require('../../../model/query');

/* POST 修改文章 */
router.post('/', function(req, res, next) {
  console.log(req.body)
  var articleId = parseInt(req.body.articleId);
  var articleTitle = req.body.articleTitle;
  var articleOutline = req.body.articleOutline;
  var articleContent = req.body.articleContent;
  var articleSortId = parseInt(req.body.articleSortId);
  var sql = "UPDATE `article` SET `article_title`=?, `article_summary`=?, `article_content`=?, `article_sort_id`=? WHERE `article_id`=?";

  query(sql, [articleTitle, articleOutline, articleContent, articleSortId, articleId]).then(function (data) {
    res.status(200).json({
      message: '修改文章成功',
      status: 200
    });
  }).catch(function (err) {
    res.status(200).json({
      message: '添加文章失败',
      status: 400
    });
  })
});

module.exports = router;
