-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th10 18, 2021 lúc 11:43 AM
-- Phiên bản máy phục vụ: 8.0.13-4
-- Phiên bản PHP: 7.2.24-0ubuntu0.18.04.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `arcade_game_website`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Admins`
--

CREATE TABLE `Admins` (
  `id` int(11) NOT NULL,
  `Email` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `Password` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `Full_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `DayOfBirth` date DEFAULT NULL,
  `Avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci ROW_FORMAT=COMPACT;

--
-- Đang đổ dữ liệu cho bảng `Admins`
--

INSERT INTO `Admins` (`id`, `Email`, `Password`, `Full_name`, `Gender`, `DayOfBirth`, `Avatar`, `createdAt`, `updatedAt`) VALUES
(1, 'tuankietnk2001@gmail.com', '$2a$10$RMdCi6u/kBoz1YoYuT3JXeL.5VkrH.syMRud8xLW1FmrVmKUgkmFm', 'Nguyễn Đặng Tuấn Kiệt', 1, '2001-04-09', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'oppahd96@gmail.com', '$2a$10$n4JbLZpeR9ZHdwX6XZMItus5eOpT9wVkgr1z9cbtFMUJyC/XqVGMm', 'Hunter', 0, '2001-12-03', NULL, '0000-00-00 00:00:00', '2021-11-18 10:16:16'),
(3, 'bduyphuong12@gmail.com', '$2a$10$Bx6yP.jeub3UXIIrzVOyvOThD2NDc13ktleqWFjrx6NIOkypU8i5m', 'Bùi Duy Phương', 1, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'nghia567123@gmail.com', '$2a$10$wCsZpR/3GjYoYtc4PdIOhO/Caumg/OnCagjmiWjtRJOIFrcAqsLVG', 'Lê Trung Nghĩa', 1, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, '19521953@gm.uit.edu.vn', '$2a$10$4cfN/tekJXvAsmzK1U1ncOA0IUTXRq1rl85mhpc2OG5ZIhELqYijW', 'Mã Hải Nhật', 1, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Categories`
--

CREATE TABLE `Categories` (
  `id` int(11) NOT NULL,
  `CategoryName` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci ROW_FORMAT=COMPACT;

--
-- Đang đổ dữ liệu cho bảng `Categories`
--

INSERT INTO `Categories` (`id`, `CategoryName`, `createdAt`, `updatedAt`) VALUES
(1, 'Arcade', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Shooting', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Racing', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Fighting', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Puzzle', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Sport', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Chess', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Obstacle', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Role-playing', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, '2-players', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Block', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Ball', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'Bounce', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Snake', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Building', '2021-11-10 09:38:53', '2021-11-10 09:38:53'),
(16, 'Reflex', '2021-11-11 17:20:47', '2021-11-11 17:20:47');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Comments`
--

CREATE TABLE `Comments` (
  `id` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `GameID` int(11) DEFAULT NULL,
  `Content` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci ROW_FORMAT=COMPACT;

--
-- Đang đổ dữ liệu cho bảng `Comments`
--

INSERT INTO `Comments` (`id`, `UserID`, `GameID`, `Content`, `createdAt`, `updatedAt`) VALUES
(1, 4, 1, 'ấdas', '2021-11-16 05:34:09', '2021-11-16 05:34:09'),
(2, 4, 1, 'àas', '2021-11-16 05:34:11', '2021-11-16 05:34:11'),
(3, 4, 1, 'fasfasada', '2021-11-16 05:34:12', '2021-11-16 05:34:12'),
(4, 4, 1, 'ấd', '2021-11-16 05:34:23', '2021-11-16 05:34:23'),
(5, 4, 1, 'hú', '2021-11-16 05:34:27', '2021-11-16 05:34:27'),
(6, 4, 2, '1', '2021-11-16 05:35:40', '2021-11-16 05:35:40'),
(7, 4, 2, '2', '2021-11-16 05:35:41', '2021-11-16 05:35:41'),
(8, 4, 2, '3', '2021-11-16 05:35:43', '2021-11-16 05:35:43'),
(9, 4, 2, '4', '2021-11-16 05:35:46', '2021-11-16 05:35:46'),
(10, 4, 3, '1', '2021-11-16 05:36:38', '2021-11-16 05:36:38'),
(11, 4, 3, '2', '2021-11-16 05:36:40', '2021-11-16 05:36:40'),
(12, 4, 3, '3', '2021-11-16 05:36:42', '2021-11-16 05:36:42'),
(13, 4, 2, '5', '2021-11-16 05:37:03', '2021-11-16 05:37:03'),
(14, 4, 1, 'asfsad', '2021-11-16 05:43:50', '2021-11-16 05:43:50'),
(15, 4, 1, 'asfsad1', '2021-11-16 05:43:52', '2021-11-16 05:43:52'),
(16, 4, 20, '1', '2021-11-16 05:43:59', '2021-11-16 05:43:59'),
(17, 4, 20, '12134', '2021-11-16 05:44:05', '2021-11-16 05:44:05'),
(18, 4, 20, '121341242', '2021-11-16 05:44:07', '2021-11-16 05:44:07'),
(19, 4, 20, 'asd', '2021-11-16 05:44:17', '2021-11-16 05:44:17'),
(20, 4, 19, '1', '2021-11-16 05:44:41', '2021-11-16 05:44:41'),
(21, 4, 19, '2', '2021-11-16 05:44:42', '2021-11-16 05:44:42'),
(22, 4, 19, '3', '2021-11-16 05:44:45', '2021-11-16 05:44:45'),
(23, 4, 19, '4', '2021-11-16 05:44:50', '2021-11-16 05:44:50'),
(24, 4, 19, '5', '2021-11-16 05:45:09', '2021-11-16 05:45:09'),
(25, 4, 18, '1', '2021-11-16 05:46:41', '2021-11-16 05:46:41'),
(26, 4, 18, '2', '2021-11-16 05:47:11', '2021-11-16 05:47:11'),
(27, 4, 18, '3', '2021-11-16 05:47:12', '2021-11-16 05:47:12'),
(28, 4, 17, '1', '2021-11-16 05:47:26', '2021-11-16 05:47:26'),
(29, 4, 17, '2', '2021-11-16 05:47:27', '2021-11-16 05:47:27'),
(30, 4, 17, '3', '2021-11-16 05:47:28', '2021-11-16 05:47:28'),
(31, 4, 16, '1', '2021-11-16 05:47:56', '2021-11-16 05:47:56'),
(32, 4, 16, '2', '2021-11-16 05:48:03', '2021-11-16 05:48:03'),
(33, 4, 16, '3', '2021-11-16 05:48:28', '2021-11-16 05:48:28'),
(34, 4, 15, '1', '2021-11-16 05:48:41', '2021-11-16 05:48:41'),
(35, 4, 15, '2', '2021-11-16 05:48:42', '2021-11-16 05:48:42'),
(36, 4, 15, '3', '2021-11-16 05:48:43', '2021-11-16 05:48:43'),
(37, 4, 14, '1', '2021-11-16 05:48:49', '2021-11-16 05:48:49'),
(38, 4, 14, '2', '2021-11-16 05:48:50', '2021-11-16 05:48:50'),
(39, 4, 14, '3', '2021-11-16 05:48:51', '2021-11-16 05:48:51'),
(40, 4, 15, '5', '2021-11-16 05:49:13', '2021-11-16 05:49:13'),
(41, 4, 15, '6', '2021-11-16 05:49:14', '2021-11-16 05:49:14'),
(42, 4, 15, '4', '2021-11-16 05:49:14', '2021-11-16 05:49:14'),
(43, 4, 15, '7', '2021-11-16 05:49:21', '2021-11-16 05:49:21'),
(44, 4, 13, '1', '2021-11-16 05:50:13', '2021-11-16 05:50:13'),
(45, 4, 13, '2', '2021-11-16 05:50:14', '2021-11-16 05:50:14'),
(46, 4, 13, '3', '2021-11-16 05:50:15', '2021-11-16 05:50:15'),
(47, 4, 13, '4', '2021-11-16 05:50:26', '2021-11-16 05:50:26'),
(48, 4, 13, '5', '2021-11-16 05:50:40', '2021-11-16 05:50:40'),
(49, 4, 12, '1', '2021-11-16 05:50:49', '2021-11-16 05:50:49'),
(50, 4, 12, '2', '2021-11-16 05:50:50', '2021-11-16 05:50:50'),
(51, 4, 12, '3', '2021-11-16 05:50:51', '2021-11-16 05:50:51'),
(52, 4, 12, '4', '2021-11-16 05:51:14', '2021-11-16 05:51:14'),
(53, 4, 11, '1', '2021-11-16 05:51:25', '2021-11-16 05:51:25'),
(54, 4, 11, '2', '2021-11-16 05:51:25', '2021-11-16 05:51:25'),
(55, 4, 11, '3', '2021-11-16 05:51:26', '2021-11-16 05:51:26'),
(56, 4, 11, '4', '2021-11-16 05:51:43', '2021-11-16 05:51:43'),
(57, 4, 11, '5', '2021-11-16 05:51:49', '2021-11-16 05:51:49'),
(58, 4, 10, '1', '2021-11-16 05:51:59', '2021-11-16 05:51:59'),
(59, 4, 10, '2', '2021-11-16 05:52:00', '2021-11-16 05:52:00'),
(60, 4, 10, '3', '2021-11-16 05:52:01', '2021-11-16 05:52:01'),
(61, 4, 10, '4', '2021-11-16 05:52:23', '2021-11-16 05:52:23'),
(62, 4, 9, '1', '2021-11-16 05:52:41', '2021-11-16 05:52:41'),
(63, 4, 9, '2', '2021-11-16 05:52:42', '2021-11-16 05:52:42'),
(64, 4, 9, '3', '2021-11-16 05:52:43', '2021-11-16 05:52:43'),
(65, 4, 9, '4', '2021-11-16 05:53:06', '2021-11-16 05:53:06'),
(66, 4, 8, '1', '2021-11-16 05:53:16', '2021-11-16 05:53:16'),
(67, 4, 8, '2', '2021-11-16 05:53:16', '2021-11-16 05:53:16'),
(68, 4, 8, '3', '2021-11-16 05:53:17', '2021-11-16 05:53:17'),
(69, 4, 8, '4', '2021-11-16 05:53:47', '2021-11-16 05:53:47'),
(70, 4, 7, '1', '2021-11-16 05:53:59', '2021-11-16 05:53:59'),
(71, 4, 7, '2', '2021-11-16 05:54:00', '2021-11-16 05:54:00'),
(72, 4, 7, '3', '2021-11-16 05:54:00', '2021-11-16 05:54:00'),
(73, 4, 7, '4', '2021-11-16 05:54:23', '2021-11-16 05:54:23'),
(74, 4, 7, '5', '2021-11-16 05:54:36', '2021-11-16 05:54:36'),
(75, 4, 6, '1', '2021-11-16 05:54:45', '2021-11-16 05:54:45'),
(76, 4, 6, '2', '2021-11-16 05:54:45', '2021-11-16 05:54:45'),
(77, 4, 6, '3', '2021-11-16 05:54:46', '2021-11-16 05:54:46'),
(78, 4, 6, '4', '2021-11-16 05:55:13', '2021-11-16 05:55:13'),
(79, 4, 5, '1', '2021-11-16 05:55:21', '2021-11-16 05:55:21'),
(80, 4, 5, '2', '2021-11-16 05:55:22', '2021-11-16 05:55:22'),
(81, 4, 5, '3', '2021-11-16 05:55:23', '2021-11-16 05:55:23'),
(82, 4, 5, '4', '2021-11-16 05:55:45', '2021-11-16 05:55:45'),
(83, 4, 5, '5', '2021-11-16 05:55:52', '2021-11-16 05:55:52'),
(84, 4, 4, '1', '2021-11-16 05:55:59', '2021-11-16 05:55:59'),
(85, 4, 4, '2', '2021-11-16 05:56:00', '2021-11-16 05:56:00'),
(86, 4, 4, '3', '2021-11-16 05:56:01', '2021-11-16 05:56:01'),
(87, 4, 4, '4', '2021-11-16 05:56:25', '2021-11-16 05:56:25'),
(88, 4, 3, '213', '2021-11-16 05:56:35', '2021-11-16 05:56:35'),
(89, 4, 3, 'hus', '2021-11-16 05:56:39', '2021-11-16 05:56:39'),
(90, 4, 2, 'alooo', '2021-11-16 05:56:47', '2021-11-16 05:56:47'),
(91, 4, 1, 'chào mn', '2021-11-16 05:56:57', '2021-11-16 05:56:57'),
(92, 4, 1, 'welcome', '2021-11-16 05:57:02', '2021-11-16 05:57:02'),
(93, 2, 2, 'nice game', '2021-11-16 06:50:36', '2021-11-16 06:50:36'),
(94, 2, 14, 'boomm', '2021-11-16 06:51:42', '2021-11-16 06:51:42'),
(95, 2, 20, 'my favor game', '2021-11-16 06:53:50', '2021-11-16 06:53:50'),
(96, 2, 16, 'i love it', '2021-11-16 06:55:23', '2021-11-16 06:55:23'),
(97, 4, 21, '1', '2021-11-16 08:35:12', '2021-11-16 08:35:12'),
(98, 4, 21, '2', '2021-11-16 08:35:12', '2021-11-16 08:35:12'),
(99, 4, 21, '3', '2021-11-16 08:35:14', '2021-11-16 08:35:14'),
(100, 4, 21, '4', '2021-11-16 08:35:59', '2021-11-16 08:35:59'),
(101, 4, 21, '5', '2021-11-16 08:36:05', '2021-11-16 08:36:05'),
(102, 4, 21, '5', '2021-11-16 08:36:19', '2021-11-16 08:36:19'),
(103, 4, 1, 'as', '2021-11-16 11:21:00', '2021-11-16 11:21:00'),
(104, 4, 1, 'fasd', '2021-11-16 11:21:02', '2021-11-16 11:21:02'),
(105, 4, 1, 'asfsa', '2021-11-16 11:21:03', '2021-11-16 11:21:03'),
(106, 4, 1, 'asfa', '2021-11-16 11:21:09', '2021-11-16 11:21:09'),
(107, 4, 1, '1', '2021-11-16 11:21:19', '2021-11-16 11:21:19'),
(108, 4, 1, '2', '2021-11-16 11:21:20', '2021-11-16 11:21:20'),
(109, 4, 1, '3', '2021-11-16 11:21:21', '2021-11-16 11:21:21'),
(110, 1, 12, 'This game is nice, simple but fun!', '2021-11-16 15:58:21', '2021-11-16 15:58:21'),
(111, 3, 12, 'Its so hard to get a high score :(', '2021-11-12 07:07:11', '2021-11-12 07:07:11'),
(112, 2, 12, 'Any one want to play? Its much fun playing  together ^^', '2021-11-12 07:07:11', '2021-11-12 07:07:11'),
(113, 1, 17, 'Game is ezi ^^', '2021-11-17 10:21:50', '2021-11-17 10:21:50'),
(114, 2, 15, 'nice', '2021-11-17 13:39:21', '2021-11-17 13:39:21'),
(115, 10, 10, 'nice', '2021-11-17 14:17:38', '2021-11-17 14:17:38'),
(116, 13, 2, ' khá hay :)))', '2021-11-17 14:29:53', '2021-11-17 14:29:53'),
(117, 23, 16, 'こんにちはみんなさん', '2021-11-18 09:56:42', '2021-11-18 09:56:42'),
(118, 23, 16, 'お元気ですか', '2021-11-18 09:56:47', '2021-11-18 09:56:47'),
(119, 23, 16, 'おめでとうございます', '2021-11-18 09:57:05', '2021-11-18 09:57:05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Error_feedbacks`
--

CREATE TABLE `Error_feedbacks` (
  `id` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `GameID` int(11) DEFAULT NULL,
  `ErrorType` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `ErrorInfo` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `AdminID` int(11) DEFAULT NULL,
  `ProcessStatus` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Friends`
--

CREATE TABLE `Friends` (
  `id` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `FriendID` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci ROW_FORMAT=COMPACT;

--
-- Đang đổ dữ liệu cho bảng `Friends`
--

INSERT INTO `Friends` (`id`, `UserID`, `FriendID`, `createdAt`, `updatedAt`) VALUES
(1, 2, 3, '2021-11-16 01:42:01', '2021-11-16 01:42:01'),
(2, 3, 2, '2021-11-16 01:42:01', '2021-11-16 01:42:01'),
(3, 4, 1, '2021-11-16 08:25:40', '2021-11-16 08:25:40'),
(4, 1, 4, '2021-11-16 08:25:41', '2021-11-16 08:25:41'),
(5, 4, 2, '2021-11-16 08:27:13', '2021-11-16 08:27:13'),
(6, 2, 4, '2021-11-16 08:27:13', '2021-11-16 08:27:13'),
(7, 4, 3, '2021-11-16 08:27:26', '2021-11-16 08:27:26'),
(8, 3, 4, '2021-11-16 08:27:26', '2021-11-16 08:27:26'),
(9, 1, 5, '2021-11-17 10:24:33', '2021-11-17 10:24:33'),
(10, 5, 1, '2021-11-17 10:24:34', '2021-11-17 10:24:34'),
(11, 6, 2, '2021-11-17 11:59:30', '2021-11-17 11:59:30'),
(12, 2, 6, '2021-11-17 11:59:30', '2021-11-17 11:59:30'),
(13, 4, 7, '2021-11-17 13:34:18', '2021-11-17 13:34:18'),
(14, 7, 4, '2021-11-17 13:34:18', '2021-11-17 13:34:18'),
(15, 8, 7, '2021-11-17 13:35:26', '2021-11-17 13:35:26'),
(16, 7, 8, '2021-11-17 13:35:26', '2021-11-17 13:35:26'),
(17, 4, 8, '2021-11-17 13:42:48', '2021-11-17 13:42:48'),
(18, 8, 4, '2021-11-17 13:42:48', '2021-11-17 13:42:48'),
(19, 9, 7, '2021-11-17 13:49:46', '2021-11-17 13:49:46'),
(20, 7, 9, '2021-11-17 13:49:46', '2021-11-17 13:49:46'),
(21, 9, 4, '2021-11-17 13:51:26', '2021-11-17 13:51:26'),
(22, 4, 9, '2021-11-17 13:51:26', '2021-11-17 13:51:26'),
(23, 11, 2, '2021-11-17 14:03:59', '2021-11-17 14:03:59'),
(24, 2, 11, '2021-11-17 14:03:59', '2021-11-17 14:03:59'),
(25, 2, 17, '2021-11-17 15:21:53', '2021-11-17 15:21:53'),
(26, 17, 2, '2021-11-17 15:21:53', '2021-11-17 15:21:53'),
(27, 1, 2, '2021-11-18 07:58:16', '2021-11-18 07:58:16'),
(28, 2, 1, '2021-11-18 07:58:16', '2021-11-18 07:58:16'),
(29, 1, 22, '2021-11-18 08:18:46', '2021-11-18 08:18:46'),
(30, 22, 1, '2021-11-18 08:18:46', '2021-11-18 08:18:46'),
(31, 1, 23, '2021-11-18 10:12:09', '2021-11-18 10:12:09'),
(32, 23, 1, '2021-11-18 10:12:10', '2021-11-18 10:12:10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Games`
--

CREATE TABLE `Games` (
  `id` int(11) NOT NULL,
  `DevID` int(11) DEFAULT NULL,
  `Url` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `DemoUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Category` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `GamePlayImage` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Description` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci,
  `Played` int(11) DEFAULT NULL,
  `Rate` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci ROW_FORMAT=COMPACT;

--
-- Đang đổ dữ liệu cho bảng `Games`
--

INSERT INTO `Games` (`id`, `DevID`, `Url`, `DemoUrl`, `Title`, `Avatar`, `Category`, `GamePlayImage`, `Description`, `Played`, `Rate`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2048.html', 'https://www.youtube.com/embed/kQhkkqjGkFA', '2048', '1.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', '2048 is a popular single-player game for Web and mobile. It\'s a type of “sliding block puzzle” — think Threes!, on which 2048 is based, or the old-timey game klotski — that\'s played on an almost Sudoku-like grid. The object of the game is to combine the numbers displayed on the tiles until you reach 2048.', 32, 0, '0000-00-00 00:00:00', '2021-11-18 10:38:36'),
(2, 1, 'FlappyBird.html', 'https://www.youtube.com/embed/fQoJZuBwrkU', 'FlappyBird', '2.png', 'Obstacle', 'img1.png img2.png img3.png img4.png', 'Flappy Bird is an arcade-style game in which the player controls the bird Faby, which moves persistently to the right. The player is tasked with navigating Faby through pairs of pipes that have equally sized gaps placed at random heights.', 76, 0, '0000-00-00 00:00:00', '2021-11-18 10:43:44'),
(3, 1, 'Memory.html', 'https://www.youtube.com/embed/Um1EXbwmYYs', 'Memory', '3.png', 'Puzzle', 'img1.png img2.png img3.png img4.png', 'The memory game, or concentration, as it is sometimes called, is a popular card game played by children and adults around the world. Good memory is one of the qualities required in order to succeed in it. ... When it is assumed that the players have perfect memory, the memory game can be seen as a game of strategy.', 16, 0, '0000-00-00 00:00:00', '2021-11-18 10:10:10'),
(4, 1, 'Pong.html', 'https://www.youtube.com/embed/nqoiNLa-dNI', 'Pong', '4.png', 'Ball 2-players', 'img1.png img2.png img3.png img4.png', 'Pong is a two-dimensional sports game that simulates table tennis. The player controls an in-game paddle by moving it vertically across the left or right side of the screen. They can compete against another player controlling a second paddle on the opposing side. Players use the paddles to hit a ball back and forth.', 14, 0, '0000-00-00 00:00:00', '2021-11-18 10:16:57'),
(5, 1, 'RedRect.html', 'https://www.youtube.com/embed/vGVoF_CbKmk', 'RedRect', '5.png', 'Obstacle', 'img1.png img2.png img3.png img4.png', 'Move your rectangular block to dodge other blocks moving to and collect similar blocks to increase personal score. Use the quickness of your hands to earn the highest score', 6, 0, '0000-00-00 00:00:00', '2021-11-18 10:14:43'),
(6, 1, 'Snake.html', 'https://www.youtube.com/embed/=DekS8Pgb1qc', 'Snake', '6.png', 'Snake', 'img1.png img2.png img3.png img4.png', 'Snake is a video game that originated during the late 1970s in arcades becoming something of a classic. ... The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the edges of the playing area. Especially, in this game, you can compete with an AI player!', 4, 0, '0000-00-00 00:00:00', '2021-11-18 06:08:50'),
(7, 1, 'Sudoku.html', 'https://www.youtube.com/embed/8zRXDsGydeQ', 'Sudoku', '7.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', 'In its simplest and most common configuration, sudoku consists of a 9 × 9 grid with numbers appearing in some of the squares. The object of the puzzle is to fill the remaining squares, using all the numbers 1–9 exactly once in each row, column, and the nine 3 × 3 subgrids.', 7, 0, '0000-00-00 00:00:00', '2021-11-18 10:27:12'),
(8, 1, 'Tetris.html', 'https://www.youtube.com/embed/AP9FAF0gGZs', 'Tetris', '8.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', 'Tetris, video game created by Russian designer Alexey Pajitnov in 1985 that allows players to rotate falling blocks strategically to clear levels. ... The goal of the game is to prevent the blocks from stacking up to the top of the screen for as long as possible.', 9, 0, '0000-00-00 00:00:00', '2021-11-18 10:08:07'),
(9, 1, 'TicTacToe.html', 'https://www.youtube.com/embed/5n2aQ3UQu9Y', 'TicTacToe', '9.png', '2-players', 'img1.png img2.png img3.png img4.png', 'Tic-tac-toe is a game in which two players take turns in drawing either an \' O\' or an \' X\' in one square of a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a row.', 14, 0, '0000-00-00 00:00:00', '2021-11-18 10:17:13'),
(10, 1, 'Pacman.html', 'https://www.youtube.com/embed/npOpr7juN1Y', 'Pacman', '10.png', 'Arcade Obstacle', 'img1.png img2.png img3.png img4.png', 'Pac-Man (パックマン) is an arcade game developed by Namco and first released in Japan on May 22, 1980. Gained popularity and popularity as soon as it was released. Released to this day, Pac-Man is considered a classic game and became an icon of 80s pop culture.', 18, 0, '2021-11-09 15:53:26', '2021-11-18 10:07:57'),
(11, 1, 'Ohh1.html', 'https://www.youtube.com/embed/r86OISLwXNI', 'Ohh1', '11.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', 'With a strange name, the player cannot guess the content of 0h H1 until actually enters the game\'s desktop. So let\'s keep the game content a hidden number and step into discovering the table of 0h H1 immediately.\\nIn the game the player\'s mission is to fill the table with the squares according to a certain rule. The game\'s playback desk will have colored boxes and players must continue to fill in the game\'s rules.', 2, 0, '2021-11-10 07:37:59', '2021-11-15 15:09:16'),
(12, 1, '3D-Chess.html', 'https://www.youtube.com/embed/cfXQybuelz0', '3D Chess', '12.png', 'Chess 2-players', 'img1.png img2.png img3.png img4.png', 'Chess is a board game played between two players. The current form of the game emerged in Southern Europe during the second half of the 15th century after evolving from similar, much older games of Indian and Persian origin. Today, chess is one of the world\'s most popular games, played by millions of people worldwide.', 13, 0, '2021-11-10 07:56:07', '2021-11-18 10:15:15'),
(13, 1, '2048.html', 'https://www.youtube.com/embed/kQhkkqjGkFA', '2048', '13.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', '2048 is a popular single-player game for Web and mobile. It\'s a type of “sliding block puzzle” — think Threes!, on which 2048 is based, or the old-timey game klotski — that\'s played on an almost Sudoku-like grid. The object of the game is to combine the numbers displayed on the tiles until you reach 2048.', 7, 0, '2021-11-10 08:28:46', '2021-11-17 14:32:04'),
(14, 1, 'MineSweeper.html', 'https://www.youtube.com/embed/GrZCWx0fnfc?start=7', 'Mine Sweeper', '14.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', 'Playing minesweeper is our passion. That\'s why we strive to make it the greatest game in the world! Select a difficulty level to challenge yourself, and enjoy the game!', 11, 0, '2021-11-10 08:51:06', '2021-11-18 10:10:05'),
(15, 1, 'Racer.html', 'https://www.youtube.com/embed/eKRTZTayIyA?start=199', '3D Racer', '15.png', 'Racing Obstacle Reflex', 'img1.png img2.png img3.png img4.png', 'Javascript Pseudo 3D Racer is similar in concept to the OutRun video game. As the name suggests it is developed using HTML5 and JavaScript. The game evolves incrementally in 4 versions and you can even check its step by step progress through the Github repository.', 20, 0, '2021-11-10 09:05:56', '2021-11-18 10:31:30'),
(16, 1, 'RadiusRaid.html', 'https://www.youtube.com/embed/TdHI_qJYTwE?start=75', 'Radius Raid', '16.png', 'Arcade Shooting Reflex', 'img1.png img2.png img3.png img4.png', 'Radius Raid is a space themed shoot \'em up where you must blast away unrelenting enemies before they destroy you. The game features 13 enemy types, 5 powerups, parallax backgrounds, retro sound effects, and locally stored stats.', 74, 0, '2021-11-10 09:20:47', '2021-11-18 10:41:06'),
(17, 1, 'TowerBuilt.html', 'https://www.youtube.com/embed/HsrmkqH61B8?start=22', 'Tower Built', '17.png', 'Reflex Block Building', 'img1.png img2.png img3.png img4.png', 'Stack blocks and build the tallest tower!', 20, 0, '2021-11-10 09:34:46', '2021-11-18 10:14:01'),
(18, 1, 'Hextris.html', 'https://www.youtube.com/embed/QoGonHQgCq8', 'Hextris', '18.png', 'Reflex Puzzle', 'img1.png img2.png img3.png img4.png', 'Hextris is a simple reincarnation of Tetris in hexagon form. Meaning that colored lines will fall from six sides towards a central hexagon, and you need to rotate the hexagon to get the colors to match. When you eventually can’t keep up, and the hexagon fills with colored lines, the game is over.', 8, 0, '2021-11-11 17:10:18', '2021-11-18 10:26:29'),
(19, 1, 'TypeMaster.html', 'https://www.youtube.com/embed/cJjN-3wEiC0', 'Type Master', '19.png', 'Reflex Obstacle', 'img1.png img2.png img3.png img4.png', 'Typer Master is a game that challenge your typing skill and your reflex! Type any character that you see on the screen before it hits you. Just one mistake and boom... Game over! Be careful with those that caps lock! Good luck!', 12, 0, '2021-11-11 17:37:57', '2021-11-18 10:31:57'),
(20, 1, 'Breakout.html', 'https://www.youtube.com/embed/AMUv8KvVt08?start=13', 'Breakout', '20.png', 'Shooting Block', 'img1.png img2.png img3.png img4.png', 'You start with 3 lives and can progress through levels by destroying all bricks in each one. The number of bricks and the game’s difficulty will increase as you progress. The game ends whenever you ran out of lives. But you can get extra lives by destroying the blue bricks and catching the heart that falls from it!', 18, 0, '2021-11-11 18:03:39', '2021-11-17 14:31:20'),
(21, 1, 'Menja.html', 'https://www.youtube.com/embed/eMtbtS5SSBc', 'Menja', '21.png', 'Reflex Block', 'img1.png img2.png img3.png img4.png', 'A game about smashing cubes!', 8, 0, '2021-11-12 07:07:11', '2021-11-18 10:28:58'),
(22, 1, 'ColorBlast.html', 'https://www.youtube.com/embed/eMtbtS5SSBc', 'Color Blast', '22.png', 'Shooting Reflex Block', 'img1.png img2.png img3.png img4.png', 'Select a group of sizes to blast them away. Try and clear as many boards that you can to overcome the high score!', 7, 0, '2021-11-12 08:23:31', '2021-11-18 04:57:27'),
(23, 1, 'Snake.html', 'https://www.youtube.com/embed/_VLmMgMnkZ4?start=54', 'Snake', '23.png', 'Snake', 'img1.png img2.png img3.png img4.png', 'Snake is a video game that originated during the late 1970s in arcades becoming something of a classic. The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the edges of the playing area. Especially, in this game, you can compete with an AI player!', 8, 0, '2021-11-12 08:21:27', '2021-11-18 10:09:02'),
(24, 1, 'ShootingGame.html', 'https://www.youtube.com/embed/KSNJQJz_n8E?start=19', 'Shooting Game', '24.png', 'Shooting Reflex', 'img1.png img2.png img3.png img4.png', 'A simple game in which the player has to shoot all the moving balls. The player has to shoot the balls using the Right-click, shot score points increase as the player starts shooting. It is a simple action game with the objective of destroying pokeballs and gaining accuracy points. The player has to aim the moving balls by moving the mouse cursor. All the balls move rapidly so its a bit hard to destroy all at the same time. There’s no time limit in this simple game, and it is an endless action game.', 1, 0, '2021-11-18 08:21:27', '2021-11-18 11:31:24'),
(25, 1, 'AimTrainer.html', 'https://www.youtube.com/embed/fTUVe2c7uRg', 'Aim Trainer', '25.png', 'Shooting Reflex', 'img1.png img2.png img3.png img4.png', 'Aim Trainer is a game that is specifically designed to improve the player’s aim in various First-Person Shooter games such as Fortnite, Counter-Strike: GO, and Call of Duty.', 0, 0, '2021-11-18 08:21:27', '2021-11-18 08:21:27');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Pending_users`
--

CREATE TABLE `Pending_users` (
  `id` int(11) NOT NULL,
  `Email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Full_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `Pending_users`
--

INSERT INTO `Pending_users` (`id`, `Email`, `Password`, `Full_name`, `Gender`, `createdAt`, `updatedAt`) VALUES
(26, 'demoreplace@gmail.com', '$2a$10$8yELRJa/QZXrtRnswfee.eJwO3ecZt9fyj7DizvH7lkR8Kb8taYNC', 'Huy Lee', 1, '2021-11-17 11:52:30', '2021-11-17 11:52:30'),
(27, 'maris@gmail.com', '$2a$10$apRYIInvTySWORvL9eDSuun3xy4LbJ6QkvC7L39FjAfH9KQQF39Nq', 'simp', 1, '2021-11-17 13:14:46', '2021-11-17 13:14:46'),
(28, 'ht@gmail.com', '$2a$10$MIJCCCGL100UsmOB21oLOeGM83YBIahavL1tZgjv8Qu.y9w5eR8yq', 'ht2', 1, '2021-11-17 13:16:14', '2021-11-17 13:16:14'),
(29, '123@gmail.com', '$2a$10$t5YEsMTYC4KdR5XsM0snh.zAOEdIY.cpeNC8zTYdUpVq/4J5wGcVe', '123', 1, '2021-11-17 13:16:44', '2021-11-17 13:16:44'),
(30, 'khang@gmail.com', '$2a$10$Z/xidUTfGmGz51aKF8Kq1ugsaxeaNjHtGAqFSO98d/HSY5w0zChZO', 'khang', 1, '2021-11-17 13:22:13', '2021-11-17 13:22:13'),
(31, 'nghiasim@gmail.com', '$2a$10$AYIw4soSCx1By6ovksH/mO/hoJyXkwRjyjGlAxKs62jh/1Dlm6P1O', 'Nghiasim', 1, '2021-11-17 13:22:17', '2021-11-17 13:22:17'),
(32, '1@gmail.com', '$2a$10$D.gVRWPGCnxzUpCYa7HDYOOAZ2b2XwXMDfjEO7X98leWg2qCiKTte', '1', 0, '2021-11-17 13:23:02', '2021-11-17 13:23:02'),
(34, 'letrannguyenkhang@gmail.com', '$2a$10$LYQ9nEOl5GCgVupgBpWhC.SURpEVefGG1mY7.QfipL.92OxiLDMLu', 'khang', 1, '2021-11-17 13:30:29', '2021-11-17 13:30:29'),
(37, 'jojoandjotaro@gmail.com', '$2a$10$kHFwtSLxh990Frl6tcbYhO7ZJ6wjuHa4ca8c0ZyxbyNYAZVjuaTde', 'sugoi', 1, '2021-11-17 13:50:31', '2021-11-17 13:50:31'),
(48, 'thaivantho10b4@gmail.com', '$2a$10$0QHxBqS0bqj/osc0UVUEP.byYJ7zKZYJjLijAhwdEQl8IIDMVOEHW', 'ThoDepTrai', 1, '2021-11-18 01:46:33', '2021-11-18 01:46:33'),
(50, 'nghia@gmail.com', '$2a$10$0hRHGZtZ3kqH.wkSCyCx1.DMvJ.bGE4WHCRG1.iqavsVeebVhXnuq', 'nghia', 1, '2021-11-18 08:14:19', '2021-11-18 08:14:19'),
(53, 'thanhcute@gmail.com', '$2a$10$9JqoMGQQbKswlhVXVS5dU.9uWf/MsALlvId16ZVwhwt.MhwDOqB26', 'Thanh cute', 0, '2021-11-18 10:16:29', '2021-11-18 10:16:29');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20211026184342-create-category.js'),
('20211026184455-create-comment.js'),
('20211027185541-create-game.js'),
('20211030112244-create-admin.js'),
('20211030211416-create-user-record.js'),
('20211030211503-create-error-feedback.js'),
('20211030212945-create-upload-game-request.js'),
('20211105085509-create-user.js'),
('20211105085853-create-friends.js'),
('20211115175347-create-pending-user.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Upload_game_requests`
--

CREATE TABLE `Upload_game_requests` (
  `id` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `Url` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `GameTitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `Category` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `GameAvatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `GamePlayImage` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Description` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `AdminID` int(11) DEFAULT NULL,
  `RequestStatus` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `Email` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Password` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Role` tinyint(1) DEFAULT NULL,
  `Full_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `DayOfBirth` datetime DEFAULT NULL,
  `Avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci ROW_FORMAT=COMPACT;

--
-- Đang đổ dữ liệu cho bảng `Users`
--

INSERT INTO `Users` (`id`, `Email`, `Password`, `Role`, `Full_name`, `Gender`, `DayOfBirth`, `Avatar`, `createdAt`, `updatedAt`) VALUES
(1, 'tuankietnk2001@gmail.com', '$2a$10$XX1ZtI5J8CcpwxidilgDb.MQr39rUQINJCEY5UxQgiW8jdjZrIeCy', 0, 'Tuấn Kiệt', 1, '2001-01-01 00:00:00', '1.jpg', '2021-11-15 20:13:04', '2021-11-18 08:19:30'),
(2, 'oppahd96@gmail.com', '$2a$10$W2xmvlul3z/q4yBxYXMxj.qYPXmbRphvJWu9a1yKrEM/Y5YMET.C6', 0, 'Hồ Minh Hiếu', 1, '2001-12-03 00:00:00', '2.jpg', '2021-11-16 01:38:47', '2021-11-18 08:55:17'),
(3, 'nhattruong230801@gmail.com', '$2a$10$thIzDDQW4NFkx/u7qiM9cuqlJ9k9EHY2nUEyPpzkRNyLF3JRNpBuO', 0, 'Nhật Trường', 1, '2001-01-01 00:00:00', 'male.jpg', '2021-11-16 01:39:52', '2021-11-16 01:39:52'),
(4, 'nghia567123@gmail.com', '$2a$10$9m6fT6QRn94EOAy4aHIanuHUlFIzNPcntcqpcOx5xeNJRmfhINMlO', 0, 'Trung Nghĩa', 1, '2001-01-01 00:00:00', '4.png', '2021-11-16 02:02:30', '2021-11-18 07:57:46'),
(5, 'ducchinhbg01@gmail.com', '$2a$10$uwS0pTHgxg06hyBAhHU5Nus56ETVkj5x2Y7wmvvAoyuWa2BWviZy2', 0, 'Đức Chinh', 1, '2001-01-01 00:00:00', 'male.jpg', '2021-11-17 10:07:32', '2021-11-17 10:07:32'),
(6, 'tanjirou11111@gmail.com', '$2a$10$Yiz18fOKwX9slfhxU7Hh8u02A0F8mjrUETS/jjmHg5nt/wUBqRfiq', 0, 'Tanjirou1', 1, '2001-01-01 00:00:00', 'male.jpg', '2021-11-17 10:14:21', '2021-11-17 13:48:25'),
(7, 'khunglong2001@gmail.com', '$2a$10$kz/9zwrkjTrFFCVbXHJkPuaD6E26FWUn8IifEplrXfqTAKgIvcAs.', 0, 'Sagiri', 1, '2001-01-01 00:00:00', 'male.jpg', '2021-11-17 13:30:29', '2021-11-17 13:52:46'),
(8, 'letrannguyenkhang2001@gmail.com', '$2a$10$LUfZMesU.kOI/cLNcfBjHe4ZeposHQe4aBtxLUpdL3kV7M646hAQO', 0, 'khang', 1, '2001-01-01 00:00:00', 'male.jpg', '2021-11-17 13:32:15', '2021-11-17 13:34:58'),
(9, 'mrnst21@gmail.com', '$2a$10$n36iP7EXejvKWxj6fbISSu3j1Wa0abw85Zuqne7RJfEmfRV3zsaPK', 0, 'Trần Trung Nghĩa', 1, '2001-01-01 00:00:00', 'male.jpg', '2021-11-17 13:47:26', '2021-11-17 13:48:24'),
(10, 'thanhhoi92xn@gmail.com', '$2a$10$mcsVzTuzTTKkRfppvddDFelDe.HBJL.1TKN8oeXha5CMCalFqaINe', 0, 'Phạm Thanh Hội', 1, '2001-03-11 00:00:00', 'male.jpg', '2021-11-17 13:52:50', '2021-11-17 13:54:17'),
(11, 'minhquanhbt@gmail.com', '$2a$10$bp2M20NDXcPP8Hz9mk121e5GFLaovdjfCHjj9d4n8jSYccGF3hnIO', 0, 'NMQuan', 1, '2001-01-01 00:00:00', 'male.jpg', '2021-11-17 13:53:07', '2021-11-17 13:53:07'),
(12, 'fkinmcpro@gmail.com', '$2a$10$uIofQ3BoduKqFrpae2.EyeJtEL9wMdALU.zn4690JcGr3SRU2CMg6', 0, 'Lê Công Phúc', 1, '2001-01-01 00:00:00', 'male.jpg', '2021-11-17 14:14:51', '2021-11-17 14:14:51'),
(13, 'nguyenthitantue2001@gmail.com', '$2a$10$e.NfsWn3PFMlbu7bG3DyWOk.WbvHXxjxfLavJ80l0xx8HTM5uHeBS', 0, 'tue', 0, '2001-01-01 00:00:00', 'female.jpg', '2021-11-17 14:27:54', '2021-11-17 14:27:54'),
(14, 'phanthikimthoa532001@gmail.com', '$2a$10$Y.V/tlH0tf5gcmWzIS0.YutqHhjJk6q57V7rLL3o7GvUuUssI7VJW', 0, 'kthoaya', 0, '2001-01-01 00:00:00', 'female.jpg', '2021-11-17 14:28:01', '2021-11-17 14:28:01'),
(15, 'Suongnguyen.31191027090@st.ueh.edu.vn', '$2a$10$07PyxAg0FDGOTGX7dlgNf.3Ahz/1QmgruOknSNPrzfdsgmkCXjOY6', 0, 'Sướng', 0, '2001-01-01 00:00:00', 'female.jpg', '2021-11-17 14:30:55', '2021-11-17 14:30:55'),
(16, 'vyhoang.31191026240@st.ueh.edu.vn', '$2a$10$KThQ6xpXJEvGbQOmIKXgmezDaidH9WROSSTa0.s7BUHFgLkwZiydq', 0, 'Vee Vee', 0, '2001-01-01 00:00:00', 'female.jpg', '2021-11-17 14:35:21', '2021-11-17 14:35:21'),
(17, 'harryvan.84@gmail.com', '$2a$10$jvCbcWK0RrC6iB8Bh1UL8.7Dg7pA44DmiK1wZt/9ghSp0.YSd4Z/O', 0, 'Chí Trung Hồ', 1, '1999-09-09 00:00:00', 'male.jpg', '2021-11-17 14:44:49', '2021-11-17 14:47:48'),
(18, 'haiphong.huynh01@gmail.com', '$2a$10$1BL7NnV.wZZp/XjPpOC8N.lvapNS3QE..RHWTtRjEPBE5aolRpUbe', 0, 'Kaze Huynh', 1, '2001-01-25 00:00:00', 'female.jpg', '2021-11-17 15:37:22', '2021-11-17 15:38:07'),
(21, 'tanjirou00000@gmail.com', '$2a$10$pEuYDbaTdd77Hza1BieeoOyZJTZ1RzoQFAGRG5m1icuzk.P1xc5wy', 0, 'Le Thi Le', 1, '2001-03-21 00:00:00', 'female.jpg', '2021-11-18 01:49:09', '2021-11-18 01:50:33'),
(22, 'bduyphuong12@gmail.com', '$2a$10$w/NqCJiOrpykeRKRIWJLNu8tE8SY6krk2Yc0DWpSiM09z0LV199vu', 0, 'Bùi Duy Phương', 1, '2001-01-01 00:00:00', 'male.jpg', '2021-11-18 08:14:58', '2021-11-18 08:14:58'),
(23, 'vipken100@gmail.com', '$2a$10$zsRK4fuS54RyqXFm.GlU.uVePT/MXu1N7cTRmmFGW8sW7wJqqTUdC', 0, 'nghia', 1, '2001-01-01 00:00:00', '23.png', '2021-11-18 08:15:05', '2021-11-18 09:22:48'),
(24, 'nguyenvanvuive2008@gmail.com', '$2a$10$RfRKwGmP4DuNJ/jjPSeRceOmH65BdN4uxCe8bjSX/bqPmPT59jCR6', 0, 'PS4', 1, '2001-01-01 00:00:00', 'male.jpg', '2021-11-18 11:43:22', '2021-11-18 11:43:22'),
(25, 'nguyenvanvuive2008@gmail.com', '$2a$10$RfRKwGmP4DuNJ/jjPSeRceOmH65BdN4uxCe8bjSX/bqPmPT59jCR6', 0, 'PS4', 1, '2001-01-01 00:00:00', 'male.jpg', '2021-11-18 11:43:22', '2021-11-18 11:43:22'),
(26, 'nguyenvanvuive2008@gmail.com', '$2a$10$RfRKwGmP4DuNJ/jjPSeRceOmH65BdN4uxCe8bjSX/bqPmPT59jCR6', 0, 'PS4', 1, '2001-01-01 00:00:00', 'male.jpg', '2021-11-18 11:43:22', '2021-11-18 11:43:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `User_records`
--

CREATE TABLE `User_records` (
  `id` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `GameID` int(11) NOT NULL,
  `HighScore` double NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci ROW_FORMAT=COMPACT;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `Admins`
--
ALTER TABLE `Admins`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Comments`
--
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GameID` (`GameID`),
  ADD KEY `UserID` (`UserID`);

--
-- Chỉ mục cho bảng `Error_feedbacks`
--
ALTER TABLE `Error_feedbacks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `GameID` (`GameID`),
  ADD KEY `AdminID` (`AdminID`);

--
-- Chỉ mục cho bảng `Friends`
--
ALTER TABLE `Friends`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `FriendID` (`FriendID`);

--
-- Chỉ mục cho bảng `Games`
--
ALTER TABLE `Games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `DevID` (`DevID`);

--
-- Chỉ mục cho bảng `Pending_users`
--
ALTER TABLE `Pending_users`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `Upload_game_requests`
--
ALTER TABLE `Upload_game_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `AdminID` (`AdminID`);

--
-- Chỉ mục cho bảng `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `User_records`
--
ALTER TABLE `User_records`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `GameID` (`GameID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `Admins`
--
ALTER TABLE `Admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `Comments`
--
ALTER TABLE `Comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT cho bảng `Error_feedbacks`
--
ALTER TABLE `Error_feedbacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Friends`
--
ALTER TABLE `Friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `Games`
--
ALTER TABLE `Games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `Pending_users`
--
ALTER TABLE `Pending_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT cho bảng `Upload_game_requests`
--
ALTER TABLE `Upload_game_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `User_records`
--
ALTER TABLE `User_records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `Comments`
--
ALTER TABLE `Comments`
  ADD CONSTRAINT `Comments_ibfk_1` FOREIGN KEY (`GameID`) REFERENCES `Games` (`id`),
  ADD CONSTRAINT `Comments_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `Users` (`id`);

--
-- Các ràng buộc cho bảng `Error_feedbacks`
--
ALTER TABLE `Error_feedbacks`
  ADD CONSTRAINT `Error_feedbacks_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `Users` (`id`),
  ADD CONSTRAINT `Error_feedbacks_ibfk_2` FOREIGN KEY (`GameID`) REFERENCES `Games` (`id`),
  ADD CONSTRAINT `Error_feedbacks_ibfk_3` FOREIGN KEY (`AdminID`) REFERENCES `Admins` (`id`);

--
-- Các ràng buộc cho bảng `Friends`
--
ALTER TABLE `Friends`
  ADD CONSTRAINT `Friends_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `Users` (`id`),
  ADD CONSTRAINT `Friends_ibfk_2` FOREIGN KEY (`FriendID`) REFERENCES `Users` (`id`);

--
-- Các ràng buộc cho bảng `Games`
--
ALTER TABLE `Games`
  ADD CONSTRAINT `Games_ibfk_1` FOREIGN KEY (`DevID`) REFERENCES `Admins` (`id`),
  ADD CONSTRAINT `Games_ibfk_2` FOREIGN KEY (`DevID`) REFERENCES `Users` (`id`);

--
-- Các ràng buộc cho bảng `Upload_game_requests`
--
ALTER TABLE `Upload_game_requests`
  ADD CONSTRAINT `Upload_game_requests_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `Users` (`id`),
  ADD CONSTRAINT `Upload_game_requests_ibfk_2` FOREIGN KEY (`AdminID`) REFERENCES `Admins` (`id`);

--
-- Các ràng buộc cho bảng `User_records`
--
ALTER TABLE `User_records`
  ADD CONSTRAINT `User_records_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `Users` (`id`),
  ADD CONSTRAINT `User_records_ibfk_2` FOREIGN KEY (`GameID`) REFERENCES `Games` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
