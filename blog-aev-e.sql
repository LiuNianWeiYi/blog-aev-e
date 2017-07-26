CREATE DATABASE `blog_aev_e`;

USE `blog_aev_e`;
-----------
-- blog_admin 博客管理员表
-----------
CREATE TABLE `admin` (
 `admin_id` tinyint(3) NOT NULL AUTO_INCREMENT COMMENT '管理员用户ID',
 `admin_name` varchar(32) NOT NULL COMMENT '管理员用户名',
 `admin_nickname` varchar(32) NOT NULL COMMENT '管理员昵称',
 `admin_pwd` varchar(32) NOT NULL COMMENT '管理员用户密码',
 `admin_last_login_ip` varchar(16) NOT NULL COMMENT '管理员用户上一次登录IP地址',
 `admin_image_url` varchar(256) NOT NULL COMMENT '管理员用户头像存储路径',
 PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


---------------------------
--article_sort 文章分类表
---------------------------
CREATE TABLE `article_sort` (
 `article_sort_id` tinyint(3) NOT NULL AUTO_INCREMENT COMMENT '文章分类自增ID',
 `article_sort_name` varchar(64) NOT NULL COMMENT '分类名称',
 `article_sort_order` tinyint(3) NOT NULL COMMENT '分类在页面显示的顺序',
 PRIMARY KEY (`article_sort_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



----------------------------
--article 文章表
----------------------------
CREATE TABLE `article` (
 `article_id` smallint(5) NOT NULL AUTO_INCREMENT COMMENT '文章自增ID号',
 `article_title` varchar(200) NOT NULL COMMENT '文章标题',
 `article_summary` varchar(400) NOT NULL COMMENT '文章概要',
 `article_content` text NOT NULL COMMENT '文章内容',
 `article_sort_id` tinyint(3) NOT NULL COMMENT '所属分类',
 `article_time` varchar(64) NOT NULL COMMENT '发布时间',
 `user_id` mediumint(8) NOT NULL COMMENT '所属用户(发布者)ID',
 `article_editor_type` tinyint(1) NOT NULL COMMENT '编辑类型:0为MarkDown，1为富文本',
 PRIMARY KEY (`article_id`),
 CONSTRAINT `article_ibfk_1` FOREIGN KEY (`article_sort_id`) REFERENCES `article_sort` (`article_sort_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


----------------------
--about_blog 博客网站信息表
----------------------
CREATE TABLE `blog_info` (
 `blog_id` tinyint(3) NOT NULL AUTO_INCREMENT COMMENT '博客网站ID',
 `blog_name` varchar(36) NOT NULL COMMENT '博客网站名称',
 `blog_title` varchar(128) NOT NULL COMMENT '博客网站标题',
 `blog_logo` varchar(256) NOT NULL COMMENT '博客网站LOGO',
 `blog_keyword` varchar(256) NOT NULL COMMENT '博客网站关键字',
 `blog_description` varchar(256) NOT NULL COMMENT '博客网站描述',
 `blog_author` varchar(36) NOT NULL COMMENT '博客网站作者',
 `blog_create_time` varchar(36) NOT NULL COMMENT '博客网站完成时间',
 PRIMARY KEY (`blog_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--------------------------
--friendly_link 友情链接
--------------------------
CREATE TABLE `friendly_link` (
 `link_id` smallint(5) NOT NULL AUTO_INCREMENT COMMENT '友情链接自增ID',
 `link_name` varchar(60) NOT NULL COMMENT '友情链接名称',
 `link_url` varchar(255) NOT NULL COMMENT '链接地址',
 `link_show_order` tinyint(3) NOT NULL COMMENT '在页面显示的顺序',
 PRIMARY KEY (`link_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
