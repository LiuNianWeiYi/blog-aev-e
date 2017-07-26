var express = require('express');
var router = express.Router();
var query = require('../../../model/query');

/* GET 删除文章 */
router.get('/', function(req, res, next) {
  var articleId = parseInt(req.query.articleId);
  var sql = "DELETE FROM `article` WHERE `article_id`=?";

  query(sql, [articleId]).then(function (data) {
    res.status(200).json({
      message: '删除文章成功',
      status: 200
    });
  }).catch(function (err) {
    res.status(200).json({
      message: '删除文章失败',
      status: 400
    });
    console.log(err);
  });
});

module.exports = router;
