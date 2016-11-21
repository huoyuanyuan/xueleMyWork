-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-11-01 04:48:20
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `asserver`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL COMMENT '管理员ID',
  `admin_name` varchar(30) CHARACTER SET utf8mb4 NOT NULL COMMENT '管理员姓名',
  `password` varchar(30) CHARACTER SET utf8mb4 NOT NULL COMMENT '管理员密码',
  `admin_remarks` varchar(60) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '管理员备注',
  `admin_date` date NOT NULL COMMENT '管理员创建日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `password`, `admin_remarks`, `admin_date`) VALUES
(1, 'admin', 'admin', '最高管理员', '2016-10-21'),
(2, 'hyy', '123', '霍园园', '2016-10-21');

-- --------------------------------------------------------

--
-- 表的结构 `asclick`
--

CREATE TABLE `asclick` (
  `AS_click_id` int(11) NOT NULL COMMENT '广告点击表ID',
  `AS_id` int(11) NOT NULL COMMENT '广告ID',
  `AS_clicktime` int(11) NOT NULL COMMENT '广告被点击时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='广告点击表';

-- --------------------------------------------------------

--
-- 表的结构 `aspicture`
--

CREATE TABLE `aspicture` (
  `picture_id` int(11) NOT NULL COMMENT '图片表ID',
  `picture_name` varchar(60) CHARACTER SET utf8mb4 NOT NULL COMMENT '图片名称',
  `picture_url` varchar(80) CHARACTER SET utf8mb4 NOT NULL COMMENT '图片地址',
  `picture_date` date NOT NULL COMMENT '图片创建日期',
  `picture_in_AS_id` int(11) NOT NULL COMMENT '图片投放广告ID',
  `picture_admin_id` int(11) NOT NULL COMMENT '上传图片管理员ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='广告图片表';

-- --------------------------------------------------------

--
-- 表的结构 `asplace`
--

CREATE TABLE `asplace` (
  `place_id` int(11) NOT NULL COMMENT '广告位表ID',
  `place_name` varchar(60) CHARACTER SET utf8mb4 NOT NULL COMMENT '广告位名称',
  `plugIn_id` int(11) NOT NULL COMMENT '使用插件ID',
  `selector` varchar(20) CHARACTER SET utf8mb4 NOT NULL COMMENT '选择器类名',
  `place_state` tinyint(1) NOT NULL COMMENT '广告位状态',
  `place_remarks` varchar(60) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '广告位备注',
  `place_date` date NOT NULL COMMENT '广告位创建日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='广告位表';

--
-- 转存表中的数据 `asplace`
--

INSERT INTO `asplace` (`place_id`, `place_name`, `plugIn_id`, `selector`, `place_state`, `place_remarks`, `place_date`) VALUES
(1, 'xuele', 1, '_as_xl_p1_', 1, '学乐', '2016-10-26'),
(2, '教育之家', 1, '_as_xl_p2_', 1, '教育之家调研广告', '2016-10-26'),
(18, '测试', 1, '_as_xl_p3_', 1, '测试', '2016-10-29'),
(19, '学乐云教学', 1, '_as_xl_p19_', 1, '', '2016-10-31'),
(20, '测试JSON', 1, '_as_xl_p20_', 1, 'JSON', '2016-10-31');

-- --------------------------------------------------------

--
-- 表的结构 `asplaceas`
--

CREATE TABLE `asplaceas` (
  `ASplaceAS_id` int(11) NOT NULL COMMENT '广告位广告表ID',
  `place_id` int(11) NOT NULL COMMENT '广告位ID',
  `AS_id` int(11) NOT NULL COMMENT '广告ID',
  `AS_order` int(2) NOT NULL COMMENT '广告排列次序'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='广告位广告表';

--
-- 转存表中的数据 `asplaceas`
--

INSERT INTO `asplaceas` (`ASplaceAS_id`, `place_id`, `AS_id`, `AS_order`) VALUES
(22, 1, 22, 1),
(23, 2, 23, 1),
(31, 18, 31, 1),
(32, 18, 32, 2),
(33, 18, 33, 3),
(34, 18, 34, 4),
(35, 18, 35, 5),
(36, 18, 36, 6),
(37, 2, 37, 2),
(38, 19, 38, 1),
(39, 19, 39, 2),
(40, 19, 40, 3),
(41, 19, 41, 4),
(42, 20, 42, 1);

-- --------------------------------------------------------

--
-- 表的结构 `asplaceclick`
--

CREATE TABLE `asplaceclick` (
  `place_click_id` int(11) NOT NULL COMMENT '广告位点击表ID',
  `place_id` int(11) NOT NULL COMMENT '广告位ID',
  `place_clicktime` datetime NOT NULL COMMENT '广告位被点击时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='广告位点击表';

-- --------------------------------------------------------

--
-- 表的结构 `astable`
--

CREATE TABLE `astable` (
  `AS_id` int(11) NOT NULL COMMENT '广告表ID',
  `AS_name` varchar(60) CHARACTER SET utf8mb4 NOT NULL COMMENT '广告名称',
  `AS_link_url` varchar(80) CHARACTER SET utf8mb4 NOT NULL COMMENT '广告链接地址',
  `AS_open_place` tinyint(1) NOT NULL COMMENT '是否在原网页打开',
  `AS_to_ASplace_id` int(11) NOT NULL COMMENT '投放广告位ID',
  `AS_picture_src` varchar(80) CHARACTER SET utf8mb4 NOT NULL COMMENT '广告图片路径',
  `AS_backgroundcolor` varchar(60) CHARACTER SET utf8mb4 NOT NULL COMMENT '背景颜色',
  `AS_usetime` datetime NOT NULL COMMENT '广告生效时间',
  `AS_remarks` varchar(60) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '备注',
  `AS_state` tinyint(1) NOT NULL COMMENT '广告状态',
  `AS_date` datetime NOT NULL COMMENT '广告创建日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='广告表';

--
-- 转存表中的数据 `astable`
--

INSERT INTO `astable` (`AS_id`, `AS_name`, `AS_link_url`, `AS_open_place`, `AS_to_ASplace_id`, `AS_picture_src`, `AS_backgroundcolor`, `AS_usetime`, `AS_remarks`, `AS_state`, `AS_date`) VALUES
(22, '学乐', 'http://www.baidu.com', 1, 1, 'http://dl.xueleyun.com/images/5cf983fe4d22a6ec0ccb77da97438b17.jpg', '#ff0000', '2016-10-30 00:00:00', '图片上传', 0, '2016-10-29 09:35:32'),
(23, '教育宣传', 'http://www.youku.com', 1, 2, 'http://dl.xueleyun.com/images/78c969eb56492f26b4bc5edae134e0c8.jpg', '#000000', '2016-10-31 08:00:00', '教育宣传', 1, '2016-10-29 09:37:23'),
(31, '测试', '123', 1, 18, 'http://dl.xueleyun.com/images/5cf983fe4d22a6ec0ccb77da97438b17.jpg', '#000000', '2016-10-31 08:00:00', '12', 0, '2016-10-29 13:20:13'),
(32, '测试2', '23223', 1, 18, 'http://dl.xueleyun.com/images/81866d5c77b2e66c2e06635776b44779.jpg', '#000000', '2016-10-31 04:00:00', '13123', 1, '2016-10-29 13:21:22'),
(33, '测试3', '3333', 1, 18, 'http://dl.xueleyun.com/images/81866d5c77b2e66c2e06635776b44779.jpg', '#000000', '2016-10-31 18:00:00', '333333333', 1, '2016-10-29 13:22:55'),
(34, '2', '2', 1, 18, 'http://dl.xueleyun.com/images/ae74f43fbdafdd4d286a9e1f353bf4c8.jpg', '#000000', '2016-10-31 11:01:00', '2', 0, '2016-10-29 14:44:33'),
(35, '4', '4', 1, 18, 'http://dl.xueleyun.com/images/793f20c9af3c439576fb83f3f959c67b.jpg', '#000000', '2016-10-30 13:00:00', '444', 1, '2016-10-29 14:45:40'),
(36, '6', '666', 1, 18, 'http://dl.xueleyun.com/images/1dbf082bcf905a473d324affebe73682.jpg', '#000000', '2016-10-31 22:58:00', '66', 1, '2016-10-29 14:46:24'),
(37, '教学交流', '123456', 1, 2, 'http://dl.xueleyun.com/images/0c13e0897f6aa1bf8e993b42feec4928.jpg', '#000000', '2016-10-31 08:54:00', '2313', 0, '2016-10-29 15:55:45'),
(38, '学乐云教学1', '11111', 1, 19, 'http://dl.xueleyun.com/images/5cf983fe4d22a6ec0ccb77da97438b17.jpg', '#000000', '2016-11-01 21:00:00', '111', 1, '2016-10-31 09:04:26'),
(39, '学乐云教学2', '22222', 1, 19, 'http://dl.xueleyun.com/images/793f20c9af3c439576fb83f3f959c67b.jpg', '#000000', '2016-11-02 22:00:00', '22', 0, '2016-10-31 09:05:40'),
(40, '学乐云教学3', '333', 0, 19, 'http://dl.xueleyun.com/images/1dbf082bcf905a473d324affebe73682.jpg', '#ff0080', '2016-11-25 09:00:00', '333', 1, '2016-10-31 09:07:01'),
(41, '学乐教学4', '444', 1, 19, 'http://dl.xueleyun.com/images/3ecef45d60fe61d0a8e9746e44022cdc.jpg', '#000000', '2016-11-02 18:00:00', '444', 0, '2016-10-31 09:09:07'),
(42, 'JSON', 'JSON', 1, 20, 'http://dl.xueleyun.com/images/793f20c9af3c439576fb83f3f959c67b.jpg', '#000000', '2016-11-02 17:00:00', 'JSON', 1, '2016-10-31 14:57:52');

-- --------------------------------------------------------

--
-- 表的结构 `astarget`
--

CREATE TABLE `astarget` (
  `target_id` int(11) NOT NULL COMMENT '广告对象表ID',
  `AS_id` int(11) NOT NULL COMMENT '广告ID',
  `target_area_code` int(6) NOT NULL COMMENT '广告投放地区编码',
  `target_area_name` varchar(30) CHARACTER SET utf8mb4 NOT NULL COMMENT '广告投放地区名称',
  `target_role_id` int(11) NOT NULL COMMENT '广告投放对象ID',
  `target_role_name` varchar(30) CHARACTER SET utf8mb4 NOT NULL COMMENT '广告投放对象名称'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='广告对象表';

--
-- 转存表中的数据 `astarget`
--

INSERT INTO `astarget` (`target_id`, `AS_id`, `target_area_code`, `target_area_name`, `target_role_id`, `target_role_name`) VALUES
(82, 22, 110105, '朝阳区', 1, '教师'),
(83, 22, 110105, '朝阳区', 2, '学生'),
(84, 23, 520321, '遵义县', 1, '教师'),
(85, 23, 520321, '遵义县', 2, '学生'),
(86, 23, 520321, '遵义县', 3, '家长'),
(144, 31, 510411, '仁和区', 3, '家长'),
(145, 31, 510411, '仁和区', 4, '学校管理员'),
(146, 32, 460106, '龙华区', 2, '学生'),
(147, 32, 460106, '龙华区', 3, '家长'),
(148, 32, 460106, '龙华区', 4, '学校管理员'),
(149, 33, 532822, '勐海县', 4, '学校管理员'),
(150, 33, 532822, '勐海县', 5, '教育机构管理员'),
(151, 33, 532822, '勐海县', 6, '教育机构人员'),
(153, 35, 1101, '市辖区', 1, '教师'),
(154, 36, 430611, '君山区', 1, '教师'),
(155, 34, 11, '北京', 1, '教师'),
(156, 34, 11, '北京', 3, '家长'),
(157, 37, 620702, '甘州区', 1, '教师'),
(158, 37, 620702, '甘州区', 2, '学生'),
(159, 37, 620702, '甘州区', 3, '家长'),
(160, 38, 140521, '沁水县', 2, '学生'),
(161, 38, 140521, '沁水县', 3, '家长'),
(162, 39, 500225, '大足县', 1, '教师'),
(163, 39, 500225, '大足县', 3, '家长'),
(164, 40, 510403, '西区', 4, '学校管理员'),
(165, 40, 510403, '西区', 5, '教育机构管理员'),
(168, 41, 460201, '市辖区', 3, '家长'),
(169, 41, 460201, '市辖区', 4, '学校管理员'),
(170, 42, 130105, '新华区', 1, '教师'),
(171, 42, 130105, '新华区', 2, '学生');

-- --------------------------------------------------------

--
-- 表的结构 `plug_in`
--

CREATE TABLE `plug_in` (
  `plugIn_id` int(11) NOT NULL COMMENT '插件ID',
  `plugIn_name` varchar(30) CHARACTER SET utf8mb4 NOT NULL COMMENT '插件名称',
  `plugIn_remarks` varchar(60) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '插件备注',
  `plugIn_url` varchar(80) CHARACTER SET utf8mb4 NOT NULL COMMENT '插件地址'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `plug_in`
--

INSERT INTO `plug_in` (`plugIn_id`, `plugIn_name`, `plugIn_remarks`, `plugIn_url`) VALUES
(1, '轮播', NULL, '/static/plugIn/carousel');

-- --------------------------------------------------------

--
-- 表的结构 `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL COMMENT '角色ID',
  `role_name` varchar(30) CHARACTER SET utf8mb4 NOT NULL COMMENT '角色名称'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色表';

--
-- 转存表中的数据 `role`
--

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(1, '教师'),
(2, '学生'),
(3, '家长'),
(4, '学校管理员'),
(5, '教育机构管理员'),
(6, '管理机构人员');

-- --------------------------------------------------------

--
-- 表的结构 `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `asclick`
--
ALTER TABLE `asclick`
  ADD PRIMARY KEY (`AS_click_id`);

--
-- Indexes for table `aspicture`
--
ALTER TABLE `aspicture`
  ADD PRIMARY KEY (`picture_id`);

--
-- Indexes for table `asplace`
--
ALTER TABLE `asplace`
  ADD PRIMARY KEY (`place_id`);

--
-- Indexes for table `asplaceas`
--
ALTER TABLE `asplaceas`
  ADD PRIMARY KEY (`ASplaceAS_id`);

--
-- Indexes for table `asplaceclick`
--
ALTER TABLE `asplaceclick`
  ADD PRIMARY KEY (`place_click_id`);

--
-- Indexes for table `astable`
--
ALTER TABLE `astable`
  ADD PRIMARY KEY (`AS_id`);

--
-- Indexes for table `astarget`
--
ALTER TABLE `astarget`
  ADD PRIMARY KEY (`target_id`);

--
-- Indexes for table `plug_in`
--
ALTER TABLE `plug_in`
  ADD PRIMARY KEY (`plugIn_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理员ID', AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `asclick`
--
ALTER TABLE `asclick`
  MODIFY `AS_click_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '广告点击表ID';
--
-- 使用表AUTO_INCREMENT `aspicture`
--
ALTER TABLE `aspicture`
  MODIFY `picture_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '图片表ID';
--
-- 使用表AUTO_INCREMENT `asplace`
--
ALTER TABLE `asplace`
  MODIFY `place_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '广告位表ID', AUTO_INCREMENT=22;
--
-- 使用表AUTO_INCREMENT `asplaceas`
--
ALTER TABLE `asplaceas`
  MODIFY `ASplaceAS_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '广告位广告表ID', AUTO_INCREMENT=44;
--
-- 使用表AUTO_INCREMENT `asplaceclick`
--
ALTER TABLE `asplaceclick`
  MODIFY `place_click_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '广告位点击表ID';
--
-- 使用表AUTO_INCREMENT `astable`
--
ALTER TABLE `astable`
  MODIFY `AS_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '广告表ID', AUTO_INCREMENT=44;
--
-- 使用表AUTO_INCREMENT `astarget`
--
ALTER TABLE `astarget`
  MODIFY `target_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '广告对象表ID', AUTO_INCREMENT=174;
--
-- 使用表AUTO_INCREMENT `plug_in`
--
ALTER TABLE `plug_in`
  MODIFY `plugIn_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '插件ID', AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色ID', AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
