-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2023 at 08:09 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bus_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbus`
--

CREATE TABLE `tbus` (
  `BusID` varchar(6) NOT NULL,
  `Firm` varchar(50) NOT NULL,
  `VehicleNumber` varchar(10) NOT NULL,
  `PassengerSeats` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbustime`
--

CREATE TABLE `tbustime` (
  `TimeID` int(11) NOT NULL,
  `Stop` varchar(50) NOT NULL,
  `StopTime` time NOT NULL,
  `ReisID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tdriver`
--

CREATE TABLE `tdriver` (
  `DriverNameID` varchar(50) NOT NULL,
  `BusID` varchar(6) NOT NULL,
  `Phone` int(11) DEFAULT NULL,
  `DriverYears` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `treis`
--

CREATE TABLE `treis` (
  `ReisID` int(11) NOT NULL,
  `Route` varchar(101) NOT NULL,
  `Time` time NOT NULL,
  `DriverName` varchar(50) NOT NULL,
  `Bus` varchar(6) NOT NULL,
  `dDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `troute`
--

CREATE TABLE `troute` (
  `RouteID` varchar(101) NOT NULL,
  `tTo` varchar(50) NOT NULL,
  `fFrom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbus`
--
ALTER TABLE `tbus`
  ADD PRIMARY KEY (`BusID`);

--
-- Indexes for table `tbustime`
--
ALTER TABLE `tbustime`
  ADD PRIMARY KEY (`TimeID`),
  ADD KEY `fk_ReisID` (`ReisID`) USING BTREE;

--
-- Indexes for table `tdriver`
--
ALTER TABLE `tdriver`
  ADD PRIMARY KEY (`DriverNameID`),
  ADD KEY `fk_BusID` (`BusID`) USING BTREE;

--
-- Indexes for table `treis`
--
ALTER TABLE `treis`
  ADD PRIMARY KEY (`ReisID`),
  ADD KEY `fk_Route` (`Route`) USING BTREE,
  ADD KEY `fk_Bus` (`Bus`) USING BTREE,
  ADD KEY `fk_DriverName` (`DriverName`) USING BTREE;

--
-- Indexes for table `troute`
--
ALTER TABLE `troute`
  ADD PRIMARY KEY (`RouteID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbustime`
--
ALTER TABLE `tbustime`
  ADD CONSTRAINT `tbustime_ibfk_1` FOREIGN KEY (`ReisID`) REFERENCES `treis` (`ReisID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `tdriver`
--
ALTER TABLE `tdriver`
  ADD CONSTRAINT `tdriver_ibfk_1` FOREIGN KEY (`BusID`) REFERENCES `tbus` (`BusID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `treis`
--
ALTER TABLE `treis`
  ADD CONSTRAINT `treis_ibfk_1` FOREIGN KEY (`Route`) REFERENCES `troute` (`RouteID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `treis_ibfk_2` FOREIGN KEY (`DriverName`) REFERENCES `tdriver` (`DriverNameID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `treis_ibfk_3` FOREIGN KEY (`Bus`) REFERENCES `tbus` (`BusID`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
