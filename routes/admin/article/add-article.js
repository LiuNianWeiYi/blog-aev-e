var express = require('express');
var router = express.Router();
var query = require('../../../model/query');

/* POST 添加文章 */
router.post('/', function(req, res, next) {
  console.log(req.body);
  var articleTitle = req.body.articleTitle;
  var articleOutline = req.body.articleOutline;
  var articleSortId = parseInt(req.body.articleSort);
  var articleContent = req.body.articleContent;
  var userId = parseInt(req.body.userId);
  var articleEditorType = parseInt(req.body.articleEditorType);

  var sql = "INSERT INTO `article` (`article_title`, `article_summary`, `article_content`, `article_sort_id`, `article_time`, `user_id`, `article_editor_type`) VALUES (?, ?, ?, ?, NOW(), ?, ?)";

  query(sql, [articleTitle, articleOutline, articleContent, articleSortId, userId, articleEditorType]).then(function (data) {
    res.status(200).json({
      message: '添加文章成功',
      status: 200
    });
  }).catch(function (err) {
    res.status(200).json({
      message: '添加文章失败',
      status: 400
    });
    console.log(err);
  });
});

module.exports = router;
