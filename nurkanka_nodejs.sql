-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost:3306
-- Üretim Zamanı: 06 Haz 2020, 16:49:11
-- Sunucu sürümü: 10.3.23-MariaDB
-- PHP Sürümü: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `nurkanka_nodejs`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `album`
--

CREATE TABLE `album` (
  `AlbumId` int(11) NOT NULL,
  `AlbumAdi` varchar(100) NOT NULL,
  `SanatciId` int(11) NOT NULL,
  `MuzikTurId` int(11) NOT NULL,
  `CikisTarihi` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `muziktur`
--

CREATE TABLE `muziktur` (
  `MuzikTurId` int(11) NOT NULL,
  `MuzikTur` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `sanatci`
--

CREATE TABLE `sanatci` (
  `SanatciId` int(11) NOT NULL,
  `SanatciAdi` varchar(100) NOT NULL,
  `SanatciYasiyormu` int(11) NOT NULL,
  `SanatciDogumTarihi` date NOT NULL,
  `EklenmeTarihi` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`AlbumId`);

--
-- Tablo için indeksler `muziktur`
--
ALTER TABLE `muziktur`
  ADD PRIMARY KEY (`MuzikTurId`);

--
-- Tablo için indeksler `sanatci`
--
ALTER TABLE `sanatci`
  ADD PRIMARY KEY (`SanatciId`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `album`
--
ALTER TABLE `album`
  MODIFY `AlbumId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `muziktur`
--
ALTER TABLE `muziktur`
  MODIFY `MuzikTurId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `sanatci`
--
ALTER TABLE `sanatci`
  MODIFY `SanatciId` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
