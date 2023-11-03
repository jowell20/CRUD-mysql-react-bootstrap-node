-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-11-2023 a las 03:31:45
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empleados_crud`
--
CREATE DATABASE IF NOT EXISTS `empleados_crud` DEFAULT CHARACTER SET utf16 COLLATE utf16_general_ci;
USE `empleados_crud`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--
-- Creación: 26-09-2023 a las 00:34:29
-- Última actualización: 03-11-2023 a las 02:07:42
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf16 COLLATE utf16_general_ci DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `pais` varchar(45) CHARACTER SET utf16 COLLATE utf16_general_ci DEFAULT NULL,
  `cargo` varchar(45) CHARACTER SET utf16 COLLATE utf16_general_ci DEFAULT NULL,
  `experiencia` int(11) DEFAULT NULL,
  `ciudad` varchar(45) CHARACTER SET utf16 COLLATE utf16_general_ci DEFAULT NULL,
  `email` varchar(45) CHARACTER SET utf16 COLLATE utf16_general_ci DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `edad`, `pais`, `cargo`, `experiencia`, `ciudad`, `email`, `telefono`) VALUES
(40, 'joel', 30, 'colombia', 'desarrollo', 1, 'santa marta', 'joel@gmail.com', '3005478551'),
(41, 'teresa', 55, 'españa', 'administradora', 4, 'barcelona', 'teresa@yahoo.com', '3225478521'),
(42, 'jorge', 63, 'españa', 'asesor', 6, 'madrid', 'jorge@gmail.com', '3214566632'),
(43, 'jhon ', 42, 'colombia', 'diseñador', 5, 'medellin', 'vargas@outlook.com', '3145874552'),
(44, 'felipe', 32, 'colombia', 'consultor', 11, 'bogota', 'felipe@hotmail.com', '3165478445'),
(47, 'laura', 25, 'EEUU', 'ingeniera', 2, 'new york', 'laura@gmail.com', '21155215');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
