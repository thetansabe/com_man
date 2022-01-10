-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: mysql-server
-- Thời gian đã tạo: Th1 10, 2022 lúc 01:06 PM
-- Phiên bản máy phục vụ: 8.0.1-dmr
-- Phiên bản PHP: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `companymanagement`
--
CREATE DATABASE IF NOT EXISTS `companymanagement` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `companymanagement`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `absentmanagement`
--

CREATE TABLE IF NOT EXISTS `absentmanagement` (
  `AbsID` int(11) NOT NULL AUTO_INCREMENT,
  `FullName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `UserName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Department` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `AbsentDays` int(11) NOT NULL,
  `Reason` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `SubmitDate` date NOT NULL,
  `AbsentToDate` date NOT NULL DEFAULT '1970-01-02',
  `AttachedFile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Status` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Role` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`AbsID`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `absentmanagement`
--

INSERT INTO `absentmanagement` (`AbsID`, `FullName`, `UserName`, `Department`, `AbsentDays`, `Reason`, `SubmitDate`, `AbsentToDate`, `AttachedFile`, `Status`, `Role`) VALUES
(5, 'Nguyen Van A', 'nguyenvana', 'Dep A', 3, 'nghi om', '2021-12-22', '1970-01-02', 'abc', 'approved', 0),
(7, 'Nguyen Van A', 'nguyenvana', 'Dep A', 3, 'Nghi om 3 ngay', '2021-12-22', '1970-01-02', 'uploads/zalo_download.txt', 'approved', 0),
(15, 'Nguyen Van A', 'denvau', 'Dep A', 4, 'test api absent', '2021-12-23', '1970-01-02', 'uploads/phpinfo.php', NULL, 1),
(16, 'Nguyen Van A', '16typh', 'Dep A', 3, 'test lan 2', '2021-12-23', '1970-01-02', 'uploads/Lab4.pdf', NULL, 1),
(17, 'Nguyen Van A', 'nguyenvana', 'Dep A', 3, 'last employee absent test', '2021-12-23', '1970-01-02', 'uploads/dipu.jpg', 'approved', 1),
(20, 'Nguyen Chief B', 'nguyenchiefb', 'Dep B', 4, 'test from chief', '2021-11-23', '1970-01-02', 'uploads/1-5.jpg', 'rejected', 1),
(24, 'Nguyen Xuan Binh', 'nguyenxuanbinh', 'Dep B', 3, 'em xin nghi om 3 ngay - xuan binh', '2021-12-24', '1970-01-02', '', NULL, 0),
(27, 'Nguyen Chief B', 'nguyenchiefb1', 'Dep B', 3, 'absent submission from chief b', '2021-12-25', '1970-01-02', 'uploads/bfs.png', 'approved', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `departmentinfo`
--

CREATE TABLE IF NOT EXISTS `departmentinfo` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `empID` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `departmentinfo`
--

INSERT INTO `departmentinfo` (`ID`, `name`, `quantity`, `description`, `empID`, `username`) VALUES
(1, 'Department A', 100, 'Ngon ngu anh', 2, 'nguyenchiefa'),
(2, 'Department B', 13, 'Cong nghe thong tin', 3, 'nguyenchiefb'),
(3, 'Department C', 9996, 'Quan tri kinh doanh', 8, 'vothingocbich'),
(4, 'Department D', 3, 'Khoa hoc ung dung', 16, 'nguyenthidau');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `employeeinfo`
--

CREATE TABLE IF NOT EXISTS `employeeinfo` (
  `EmpID` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FullName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Department` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DateJoined` date DEFAULT NULL,
  `Age` int(11) DEFAULT NULL,
  `Gender` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Role` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DateBirth` date DEFAULT NULL,
  `ImgDir` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`EmpID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `employeeinfo`
--

INSERT INTO `employeeinfo` (`EmpID`, `UserName`, `Password`, `FullName`, `Email`, `Address`, `Department`, `DateJoined`, `Age`, `Gender`, `Phone`, `Role`, `DateBirth`, `ImgDir`) VALUES
(1, 'nguyenvana', '$2y$10$FNl4r6LYe0r.B9wpJxnnbul2qBYBorp28UA7/5C7YZ6T9hc7T9Imq', 'Nguyen Van Manh', 'nguyenvana@gmail.com', '11 ALoha Str.', 'Dep A', '2021-12-23', 19, 'Male', '0845632149', 'Employee', NULL, 'uploads/dipu.jpg'),
(2, 'nguyenchiefa', '$2y$10$CHQ82kWCt0MA4eTXnNY7COxt9UaTYXqV4PNRc/jCuUyOiQiwju/r.', 'Nguyen Huy Hoang', 'mehadi@gmail.com', 'Wall str.', 'Dep A', '2012-11-13', 32, 'Male', '0195515236', 'Chief', NULL, 'uploads/mehadi.png'),
(3, 'nguyenchiefb', '$2y$10$.KE0P/rzdX4ODmD/IghpxOoPzQ5kC7mXOSIKwneWx/rfje/pECZXG', 'Vo Tan Loi', 'nguyenbchief@gmail.com', '12 Aloha Str.', 'Dep B', '2002-12-12', 35, 'Male', '09635267', 'Chief', '1989-12-03', 'uploads/330px-Elon_Musk_Royal_Society.jpg'),
(4, 'nguyenhoanganh', '$2y$10$084B9UVYhcoiWXLEUEh8J.myYv8qxC/V6Ug63xS9lwkyFGjrMB6Ga', 'Nguyen Hoang Anh', 'nhanh@gmail.com', 'District 1', 'Dep A', '2019-01-03', 22, 'Male', '0917610235', 'Employee', NULL, 'uploads/1-5.jpg'),
(5, 'nguyenthinhatha', '$2y$10$/9/SYxtrt6Kmq9JUxcmLEePZWIPn3G9r.FYghTKCgegQ0M9.a71/e', 'Nguyen Thi Nhat Ha', 'nthha@gmail.com', 'District 2', 'Dep A', '2018-01-12', 23, 'Female', '0938834735', 'Employee', NULL, NULL),
(6, 'nguyenvietanh', '$2y$10$HQPsR1b8KKnx/49YnyAykuc8bX.dmMPMWpZ3jBS/qG6TKkmxIQNrS', 'Nguyen Viet Anh', 'nvanh@gmail.com', 'District 3', 'Dep A', '2018-01-24', 26, 'Male', '02513926635', 'Employee', NULL, 'uploads/hacker.png'),
(7, 'trandoanhngoc', '$2y$10$F0TrP54RrgVy3FcPy/A8cOfOiTs2eKXgK/ZUcrBQe2Bep39pp2UtW', 'Tran Do Anh Ngoc', 'tdngoc@gmail.com', 'District 3', 'Dep A', '2013-01-20', 21, 'Female', '0256314785', 'Employee', NULL, 'uploads/no.jpg'),
(8, 'vothingocbich', '$2y$10$kVSpSfPujY4lonB9Qbcua.HbPdZnTftonk0CO0xbryd3XU0YIxeKC', 'Vo Thi Ngoc Bich', 'vtnbich@gmail.com', 'District 5', 'Dep B', '2022-01-21', 27, 'Female', '0985246312', 'Chief', NULL, NULL),
(9, 'nguyenxuanbinh', '$2y$10$WBIqd6J1HsDQmBnyzSZHGePAwIBCOx2.6U06/tgxX3zKWL6Rb2KG2', 'Nguyen Xuan Binh', 'nguyenxuanbinh234@gmail.com', 'District 7', 'Dep B', '2016-01-13', 24, 'Male', '0933054212', 'Employee', NULL, 'uploads/jon-snow.jpg'),
(10, 'nguyengiabao', '$2y$10$fDcQKqjtnxV21obhdtACzeuPtvc6bZ686lg/pt2o8KRkdsqeC4gF6', 'Nguyen Gia Bao', 'giabao@gmail.com', 'District 10', 'Dep B', '2015-09-20', 25, 'Male', '0944156324', 'Employee', NULL, 'uploads/test.jpg'),
(12, 'nguyenhoangchien', '$2y$10$zBxkf4vu1lVWIUhTVc3sQenUSMXuALsKsRiNMzjOh2frw5y9b2uq2', 'Nguyen Hoang Chien', 'hoangchien@gmail.com', 'District 8', 'Dep C', '2021-10-06', 26, 'Male', '0536984125', 'Employee', NULL, 'uploads/shemonto.jpg'),
(13, 'nguyenchienthang', '$2y$10$MWU31q1VmmlolPb57ste9uWzluWeYLY.m1RScdUl.nqYKGd.1pbD.', 'Nguyen Chien Thang', 'victory@gmail.com', 'District 15', 'Dep C', '2022-01-07', 27, 'Male', '0963852741', 'Employee', NULL, NULL),
(14, 'tranvancuong', '$2y$10$AfRjXuEZoNUGo031WOr5AOzvZCPe5z4646Xv.jNqNq2SkBOPVCJ6y', 'Tran Van Cuong', 'strong@gmail.com', 'District 4', 'Dep C', '2022-01-08', 25, 'Male', '0147852369', 'Employee', NULL, NULL),
(15, 'tranthidanh', '$2y$10$EdIL.DpiUr.mXCrZvT.bPuq9Mfc23wpKBkYiWE8atUr5gLhdhRWU6', 'Tran Thi Danh', 'ttdanh@gmail.com', 'District 2', 'Dep D', '2022-01-07', 24, 'Female', '0123658947', 'Employee', NULL, NULL),
(16, 'nguyenthidau', '$2y$10$.V.J.OqY6NN41U24D8U15.0d7X4sZXG69XPFC9bdFWjwyQd1BMJ5u', 'Nguyen Thi Dau', 'ntdau@gmail.com', 'District 16', 'Dep D', '2022-01-02', 29, 'Female', '0233658774', 'Chief', NULL, NULL),
(17, 'nguyenthithuydung', '$2y$10$mtNiuU3WJcUE.VU0hvYHmeV7DFjiHFD4aDxeiiULsYVcqa8OKR0gu', 'Nguyen Thi Thuy Dung', 'thuydungnt@gmail.com', 'District 8', 'Dep D', '2022-01-04', 21, 'Female', '014588569', 'Employee', NULL, NULL),
(18, 'admin', '$2a$12$vycpJeSrWaBCCK6g14k7tOlGuS5z1rnPgHwGLEaTyTUKhKMemunf6', 'Do Quoc Dung', 'dungngu@gmail.com', 'District 9', 'cuibap', '2022-01-19', 30, 'Male', '0889653211', 'Admin', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taskmanagement`
--

CREATE TABLE IF NOT EXISTS `taskmanagement` (
  `TaskID` int(11) NOT NULL AUTO_INCREMENT,
  `TaskTitle` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TaskDesc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Deadline` datetime DEFAULT NULL,
  `Status` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `AssignTo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CompleteLevel` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Department` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Content` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `AttachedFile` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SubmitDate` datetime DEFAULT '1970-01-02 00:00:00',
  `Note` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`TaskID`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `taskmanagement`
--

INSERT INTO `taskmanagement` (`TaskID`, `TaskTitle`, `TaskDesc`, `Deadline`, `Status`, `AssignTo`, `CompleteLevel`, `Department`, `Content`, `AttachedFile`, `SubmitDate`, `Note`) VALUES
(35, 'add task test', '#4', '2021-12-24 23:37:00', 'Rejected', 'nguyenvana', NULL, 'Dep A', NULL, NULL, '1970-01-02 00:00:00', NULL),
(36, 'add task test', '#5', '2021-12-24 23:41:00', 'Completed', 'nguyenvana', NULL, 'Dep A', NULL, NULL, '1970-01-02 00:00:00', NULL),
(41, 'load task', '#11', '2021-12-23 21:07:00', 'Waiting', 'nguyenvana', NULL, 'Dep A', NULL, NULL, '1970-01-02 00:00:00', NULL),
(42, 'Task for Bich', 'for bich', '2021-12-30 19:34:00', 'New', 'vothingocbich', NULL, 'Dep B', NULL, NULL, '1970-01-02 00:00:00', NULL),
(43, 'task for binh', 'for binh', '2021-12-30 19:34:00', 'Completed', 'nguyenxuanbinh', 'OK', 'Dep B', 'submit task from binh #1', 'uploads/bfs.png', '2021-12-24 01:07:45', NULL),
(44, 'task for bao', 'for bao', '2021-12-29 19:35:00', 'New', 'nguyengiabao', NULL, 'Dep B', NULL, NULL, '1970-01-02 00:00:00', NULL),
(45, 'task for binh', '#2', '2022-01-01 08:03:00', 'Completed', 'nguyenxuanbinh', 'OK', 'Dep B', 'hello chief', 'uploads/Huong dan Docker.txt', '2021-12-24 01:07:45', NULL),
(46, 'task for binh', '#3', '2022-01-04 08:04:00', 'New', 'nguyenxuanbinh', NULL, 'Dep B', NULL, NULL, '1970-01-02 00:00:00', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
