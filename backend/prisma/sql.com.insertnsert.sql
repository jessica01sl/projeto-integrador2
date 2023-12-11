
create database philypedatabase;
use philypedatabase;
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) DEFAULT NULL,
  `nome` varchar(255) NOT NULL,
  `saldo` decimal(10,2) DEFAULT NULL,
  `cpf` varchar(11) NOT NULL,
  `cartao` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarioId` (`usuarioId`),
  CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuario` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9452792 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (13,NULL,'jessica santos martins',0.00,'5474574575','4'),(16,NULL,'marcos antonio',2.50,'464565465','4'),(3344440,NULL,'anderson deizepe ( teste de idoso)',0.00,'8096548968','4'),(9452789,NULL,'Philype Jorge Lellis Sena(teste comum)',10.00,'508.191.928','1'),(9452791,NULL,'Silda mello de  oliveira',0.00,'6753435664','2');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `embarque`
--

DROP TABLE IF EXISTS `embarque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `embarque` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clienteId` int(11) NOT NULL,
  `viagemId` int(11) DEFAULT NULL,
  `tarifa` decimal(10,2) NOT NULL,
  `horario` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `clienteId` (`clienteId`),
  KEY `embarque_ibfk_2` (`viagemId`),
  CONSTRAINT `embarque_ibfk_1` FOREIGN KEY (`clienteId`) REFERENCES `cliente` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `embarque_ibfk_2` FOREIGN KEY (`viagemId`) REFERENCES `viagem` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `embarque`
--

LOCK TABLES `embarque` WRITE;
/*!40000 ALTER TABLE `embarque` DISABLE KEYS */;
INSERT INTO `embarque` VALUES (1,13,NULL,5.00,'2023-12-04 19:39:01'),(2,16,NULL,2.50,'2023-12-04 19:41:58'),(3,3344440,NULL,0.00,'2023-12-04 19:42:50'),(4,16,NULL,2.50,'2023-12-04 19:42:59'),(5,3344440,NULL,0.00,'2023-12-04 19:45:22'),(6,3344440,NULL,0.00,'2023-12-04 19:48:40'),(7,3344440,NULL,0.00,'2023-12-04 19:49:27'),(8,13,NULL,5.00,'2023-12-04 19:49:57'),(9,3344440,NULL,0.00,'2023-12-04 19:50:29'),(10,9452789,NULL,5.00,'2023-12-05 17:17:45'),(11,9452789,NULL,5.00,'2023-12-05 17:17:52'),(12,9452789,NULL,5.00,'2023-12-05 17:18:54'),(13,9452789,NULL,5.00,'2023-12-07 05:02:13'),(14,9452791,NULL,2.50,'2023-12-07 05:10:17'),(15,9452789,NULL,5.00,'2023-12-08 18:54:56'),(16,9452789,NULL,5.00,'2023-12-08 18:55:12'),(17,9452789,NULL,5.00,'2023-12-08 18:55:29'),(18,9452789,NULL,5.00,'2023-12-08 18:55:38'),(19,9452789,NULL,5.00,'2023-12-08 18:55:50'),(20,9452791,NULL,2.50,'2023-12-08 18:56:35'),(21,9452789,NULL,5.00,'2023-12-08 18:58:08'),(22,9452789,NULL,5.00,'2023-12-08 18:58:20'),(23,9452789,NULL,5.00,'2023-12-11 20:46:01'),(24,9452789,NULL,5.00,'2023-12-11 20:46:09'),(25,9452789,NULL,5.00,'2023-12-11 20:46:31'),(26,9452789,NULL,5.00,'2023-12-11 20:46:43'),(27,3344440,NULL,0.00,'2023-12-11 21:07:11'),(28,3344440,NULL,0.00,'2023-12-11 21:07:15'),(29,9452789,NULL,5.00,'2023-12-11 21:09:14'),(30,9452789,NULL,5.00,'2023-12-11 21:09:18'),(31,9452789,NULL,5.00,'2023-12-11 21:11:24'),(32,9452789,NULL,5.00,'2023-12-11 21:11:29');
/*!40000 ALTER TABLE `embarque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linha`
--

DROP TABLE IF EXISTS `linha`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `linha` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `origem` varchar(255) NOT NULL,
  `destino` varchar(255) NOT NULL,
  `horarioPartida` time NOT NULL,
  `duracao` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linha`
--

LOCK TABLES `linha` WRITE;
/*!40000 ALTER TABLE `linha` DISABLE KEYS */;
INSERT INTO `linha` VALUES (6,'Linha 001','Rio de janeiro','São paulo','12:23:00',22),(9,'linha 0002','São Paolu','sao caretano','12:23:00',34),(10,'linha 003','Rio de janeiro','sao caretano','12:00:00',22),(11,'linha 004','Bahia ','São fernando','14:30:00',30),(12,'linha 005','Nordeste ','São fernando','14:30:00',30);
/*!40000 ALTER TABLE `linha` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `motorista`
--

DROP TABLE IF EXISTS `motorista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `motorista` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `motorista`
--

LOCK TABLES `motorista` WRITE;
/*!40000 ALTER TABLE `motorista` DISABLE KEYS */;
INSERT INTO `motorista` VALUES (1,'Ronaldo mauricio Reren',NULL),(2,'flavio Deimi leite',NULL),(3,'anderson deizepe dos santos',NULL),(4,'Luiz robeto lellis de oliverira fernandes',NULL),(5,'Luiz Rodrigues lacerda de milton',NULL);
/*!40000 ALTER TABLE `motorista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `onibus`
--

DROP TABLE IF EXISTS `onibus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `onibus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `placa` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `onibus`
--

LOCK TABLES `onibus` WRITE;
/*!40000 ALTER TABLE `onibus` DISABLE KEYS */;
INSERT INTO `onibus` VALUES (2,'FBR2B23'),(3,'9452789'),(4,'HPQ-3209'),(5,'HON-4363');
/*!40000 ALTER TABLE `onibus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'andersn','deizepe@gmail','$2b$10$ZIQFe1Iyd0y7jvkX52RZFeXPpij5MM14iNoYrNp8RPdzI3fHWJ6G.'),(2,'thaigo','thiago@negro','$2b$10$yFn1j9w8cGrwMZsnzuol9.7QL6LCz/JZnEHX5F/gOBzz0Ui6yfChm');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viagem`
--

DROP TABLE IF EXISTS `viagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `viagem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `linhaId` int(11) NOT NULL,
  `motoristaId` int(11) NOT NULL,
  `onibusId` int(11) NOT NULL,
  `dataPartida` datetime NOT NULL,
  `dataChegada` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `linhaId` (`linhaId`),
  KEY `motoristaId` (`motoristaId`),
  KEY `onibusId` (`onibusId`),
  CONSTRAINT `viagem_ibfk_1` FOREIGN KEY (`linhaId`) REFERENCES `linha` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `viagem_ibfk_2` FOREIGN KEY (`motoristaId`) REFERENCES `motorista` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `viagem_ibfk_3` FOREIGN KEY (`onibusId`) REFERENCES `onibus` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viagem`
--

LOCK TABLES `viagem` WRITE;
/*!40000 ALTER TABLE `viagem` DISABLE KEYS */;
/*!40000 ALTER TABLE `viagem` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-11 18:38:39