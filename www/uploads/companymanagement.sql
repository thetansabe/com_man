-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 27, 2021 lúc 02:05 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.12

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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `briefemployeeinfo`
--

CREATE TABLE `briefemployeeinfo` (
  `EmpID` int(11) NOT NULL,
  `FullName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `UserName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Department` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Role` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `briefemployeeinfo`
--

INSERT INTO `briefemployeeinfo` (`EmpID`, `FullName`, `UserName`, `Password`, `Department`, `Role`) VALUES
(1, 'Nguyen Van A', 'nguyenvanA', 'nguyenvanA', 'Dep A', 'Employee'),
(2, 'Nguyen Van B', 'nguyenvanb', 'nguyenvanb', 'Dep B', 'Employee'),
(3, 'Nguyen Chief A', 'nguyenchiefa', 'nguyenchiefa', 'Dep A', 'Chief'),
(4, 'Nguyen Chief B', 'nguyenchiefb', 'nguyenchiefb', 'Dep B', 'Chief'),
(5, 'Test Ham Add', 'testhamadd', 'testhamadd', 'Dep A', 'Employee'),
(6, 'Test Ham Add', 'testhamadd', '$2y$10$ju8QfTtws/uQ32.uCZkj9.lDE8Qzc1A7jzqkslgxaLgPcHMAsaZEO', 'Dep A', 'Employee'),
(7, 'Test Ham Add 1 lan nua', 'testhamadd', 'testhamadd', 'Dep A', 'Employee'),
(8, 'Test API add\n', 'testapiadd', 'testapiadd', 'Dep B', 'Employee'),
(9, 'Test Ham Add 1 lan nua', 'testhamadd', 'testhamadd', 'Dep A', 'Employee'),
(10, 'Test hashed pass\n', 'testhashpass', '$2y$10$eUulLu2UYOVyA4WfxX1KPuC92t1Xx9XlKZEAsifiDZuHD1SudhkV2', 'Dep B', 'Employee'),
(11, 'test main login', 'testmainlogin', '$2a$10$cEW.NUFWdJVWFiMvRSDDcOkxKj5n6F1XpFIbl/5eot8/w/meUljr6', 'Dep B', 'Employee'),
(12, 'Test Ham Add 1 lan nua', 'testhamadd', '$2y$10$NzTdbS9aE4tAfgOQcSKPXOnfjGd4EZAuMTnh1YXOCikRhDIgZVQEG', 'Dep A', 'Employee'),
(13, 'test redirect', 'testredirect', '$2y$10$tTfVTgEUZSchAdL9P8vg7eWB5Hy95lwrhxjrPtn98.SYsYzAU4MTO', 'Dep A', 'Employee'),
(14, 'Nguyen Van C', 'nguyenvanc', '$2y$10$uBDZbpIDkoaOSCmJqKfVlOkegDIBgT/Ku1r41dnv4ahgorVwz9qru', 'Dep C', 'Employee');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `fullemployeeinfo`
--

CREATE TABLE `fullemployeeinfo` (
  `OrdinalID` int(11) NOT NULL,
  `EmpID` int(11) DEFAULT NULL,
  `FullName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Department` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DateJoined` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Age` int(11) DEFAULT NULL,
  `Gender` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Role` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DateBirth` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ImgDir` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `briefemployeeinfo`
--
ALTER TABLE `briefemployeeinfo`
  ADD PRIMARY KEY (`EmpID`);

--
-- Chỉ mục cho bảng `fullemployeeinfo`
--
ALTER TABLE `fullemployeeinfo`
  ADD PRIMARY KEY (`OrdinalID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `briefemployeeinfo`
--
ALTER TABLE `briefemployeeinfo`
  MODIFY `EmpID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `fullemployeeinfo`
--
ALTER TABLE `fullemployeeinfo`
  MODIFY `OrdinalID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
