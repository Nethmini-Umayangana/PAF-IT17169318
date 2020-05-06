-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2020 at 02:19 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `paf`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_details`
--

CREATE TABLE `admin_details` (
  `Admin_id` int(5) NOT NULL,
  `Admin_name` varchar(30) NOT NULL,
  `Admin_username` varchar(30) NOT NULL,
  `Admin_password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_details`
--

INSERT INTO `admin_details` (`Admin_id`, `Admin_name`, `Admin_username`, `Admin_password`) VALUES
(1, 'Amasha Daphnie', 'Amasha', 'Amasha123'),
(2, 'Maleesha Gunathilake', 'Maleesha', 'Mal123'),
(3, 'Anolie Kumarasinghe', 'Anolie', 'Oshi123'),
(4, 'Minoli Isurika', 'Minoli', 'Minoli123'),
(5, 'Nethmini Umayangana', 'Sanju', 'Sanju123');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `doctorID` int(5) NOT NULL,
  `doctorName` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phoneNum` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `age` int(4) NOT NULL,
  `status` varchar(10) NOT NULL,
  `specialization` varchar(20) NOT NULL,
  `hospitalWork` varchar(100) NOT NULL,
  `details` varchar(200) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`doctorID`, `doctorName`, `address`, `phoneNum`, `email`, `gender`, `age`, `status`, `specialization`, `hospitalWork`, `details`, `username`, `password`) VALUES
(17, 'Camelia Susen', '14, New road, Matara', '0773310600', 'camelia@gmail.com', 'Female', 28, 'Unmarried', 'Heart specialization', 'Asiri hospital, Nawaloka hospital', '25th May 2020 at 4.00p.m-5.00p.m 25th May 2020 at 6.00p.m-7.00p.m', 'camelia', 'camelia'),
(30, 'Viduranga Thabrew', 'No-12, Galle ', '0769832477', 'viduranga@gmail.com', 'Male', 48, 'Married', 'Eye specialist', 'Asiri hospital', '15th May 2020 at 8.00a.m-10.00a.m', 'viduranga', 'viduranga'),
(31, 'Dumith Wasantha', 'No-18, Gampaha', '0714589632', 'dumith@gmail.com', 'Male', 36, 'Married', 'VOG', 'Nawaloka hospital', '10th May 2020 at 8.00a.m-10.00a.m', 'dumith', 'ssssss');

-- --------------------------------------------------------

--
-- Table structure for table `specialization`
--

CREATE TABLE `specialization` (
  `special_ID` int(5) NOT NULL,
  `special_Name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `timetable`
--

CREATE TABLE `timetable` (
  `t_ID` int(5) NOT NULL,
  `doc_ID` int(5) NOT NULL,
  `doc-Name` varchar(50) NOT NULL,
  `spe_Name` varchar(50) NOT NULL,
  `hospital` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `time` time(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_details`
--
ALTER TABLE `admin_details`
  ADD PRIMARY KEY (`Admin_id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`doctorID`);

--
-- Indexes for table `specialization`
--
ALTER TABLE `specialization`
  ADD PRIMARY KEY (`special_ID`);

--
-- Indexes for table `timetable`
--
ALTER TABLE `timetable`
  ADD PRIMARY KEY (`t_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_details`
--
ALTER TABLE `admin_details`
  MODIFY `Admin_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `doctorID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `specialization`
--
ALTER TABLE `specialization`
  MODIFY `special_ID` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `timetable`
--
ALTER TABLE `timetable`
  MODIFY `t_ID` int(5) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
