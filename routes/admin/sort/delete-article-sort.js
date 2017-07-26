var express = require('express');
var router = express.Router();
var query = require('../../../model/query');

/* GET 删除文章分类 */
router.get('/', function(req, res, next) {
  var sortId = parseInt(req.query.articleSortId);
  var sql = "DELETE FROM `article_sort` WHERE `article_sort_id`=?";

  query(sql, [sortId]).then(function (data) {
    res.status(200).json({
      message: '删除分类成功',
      status: 200
    });
  }).catch(function (err) {
    res.status(200).json({
      message: '删除分类失败',
      status: 400
    });
    console.log(err);
  });
});

module.exports = router;
