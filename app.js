var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
// admin router
var login = require('./routes/admin/login');
var getArticleLists = require('./routes/admin/article/get-article-lists');
var addArticle = require('./routes/admin/article/add-article');
var getModifyArticle = require('./routes/admin/article/get-modify-article');
var modifyArticle = require('./routes/admin/article/modify-article');
var deleteArticle = require('./routes/admin/article/delete-article');

var getArticleSortLists = require('./routes/admin/sort/get-article-sort-lists');
var addArticleSort = require('./routes/admin/sort/add-article-sort');
var getModifyArticleSort = require('./routes/admin/sort/get-modify-article-sort');
var modifyArticleSort = require('./routes/admin/sort/modify-article-sort');
var deleteArticleSort = require('./routes/admin/sort/delete-article-sort');


var app = express();

// 允许跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  // res.header('Access-Control-Allow-Headers', 'application/json;charset=utf-8');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// admin router
app.use('/admin/login', login);
app.use('/admin/getArticleLists', getArticleLists);
app.use('/admin/addArticle', addArticle);
app.use('/admin/getModifyArticle', getModifyArticle);
app.use('/admin/modifyArticle', modifyArticle);
app.use('/admin/deleteArticle', deleteArticle);
// 文章分类
app.use('/admin/getArticleSortLists', getArticleSortLists);
app.use('/admin/addArticleSort', addArticleSort);
app.use('/admin/getModifyArticleSort', getModifyArticleSort);
app.use('/admin/modifyArticleSort', modifyArticleSort);
app.use('/admin/deleteArticleSort', deleteArticleSort);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
