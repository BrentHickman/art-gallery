-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: localhost    Database: gallery_api
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `__EFMigrationsHistory`
--

DROP TABLE IF EXISTS `__EFMigrationsHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `__EFMigrationsHistory` (
  `MigrationId` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ProductVersion` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`MigrationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `__EFMigrationsHistory`
--

LOCK TABLES `__EFMigrationsHistory` WRITE;
/*!40000 ALTER TABLE `__EFMigrationsHistory` DISABLE KEYS */;
INSERT INTO `__EFMigrationsHistory` VALUES ('20230515225237_Initial','6.0.0'),('20230517222152_Update','6.0.0'),('20230517233235_UpdatedQuerys','6.0.0'),('20230518013156_TestImg','6.0.0'),('20230518014015_TestImage2','6.0.0');
/*!40000 ALTER TABLE `__EFMigrationsHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Images`
--

DROP TABLE IF EXISTS `Images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Images` (
  `ImageId` int NOT NULL AUTO_INCREMENT,
  `Title` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Size` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Color1` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Color2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Color3` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Subject` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Medium` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Date` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Available` tinyint(1) NOT NULL,
  `ImageUrl` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ImageId`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Images`
--

LOCK TABLES `Images` WRITE;
/*!40000 ALTER TABLE `Images` DISABLE KEYS */;
INSERT INTO `Images` VALUES (1,'Zeros','Relief and Screen Print','4in x 6in','Black','Blue','White','Portrait','Print','2015',1,'https://i.ibb.co/2v3VbfY/Zeros.jpg'),(2,'Your Friends and Mine','Relief and Intaglio Print','4in x 6in','Green','Cream','Black','Portrait','Print','2015',1,'https://i.ibb.co/ZMkK1P6/Your-Friends-And-Mine.jpg'),(3,'Yellow-Horizon','Digital Monoprint','8in x 10in','White','Yellow','Black','Abstract','Print','2018',1,'https://i.ibb.co/q183VxD/Yellow-Horizon.jpg'),(4,'Where Is Bobby','Relief Print','4in x 6in','Purple','Black','Orange','Portrait','Print','2016',1,'https://i.ibb.co/12m9HhB/Where-Is-Bobby.jpg'),(5,'The Mist Catches Up','Acrylic on Canvas','24in x 36in','Gray','Red','White','Abstract','Paint','2018',1,'https://i.ibb.co/tB3xqdS/When-The-Mist-Catches-Up.jpg'),(6,'What\'s that Ringing Sound','Acrylic on Canvas','18in x 24in','Black','Brown','White','Portrait','Paint','2019',1,'https://i.ibb.co/dtZsVLh/Whats-That-Ringing-Sound.jpg'),(7,'What Fish See at the End','Acrylic and Mixed Media on Canvas','24in x 24in','Blue','White','Black','Abstract','Paint','2019',1,'https://i.ibb.co/S0JBDsQ/What-Fish-See-At-The-End.jpg'),(8,'Vibrant Sky','Acrylic on Canvas','24in x 24in','Blue','Black','White','Abstract','Paint','2019',1,'https://i.ibb.co/qRZ4x6m/Vibrant-Sky.jpg'),(9,'We Can\'t Stop Here','Acrylic on Canvas','36in x 48in','Pink','Orange','Black','Abstract','Paint','2018',1,'https://i.ibb.co/mHTfc9S/We-Cant-Stop-Here.jpg'),(10,'Platen Composition','Photograph','5in x 7in ','Black','White','Yellow','Abstract','Photo','2019',1,'https://i.ibb.co/GJKsXXB/Vacuum-Platen-Composition.jpg'),(11,'Urban Forestry Diptych','Acrylic and Mixed Media on Board','48in x 36in','White','Orange','Yellow','Abstract','Paint','2019',1,'https://i.ibb.co/F7JmQb6/Urban-Forestry-Diptych.jpg'),(12,'Turning Inside Out','Acrylic on Canvas','38in x 48in ','Red','Black','Pink','Abstract','Paint','2019',1,'https://i.ibb.co/fY2nhfd/Turning-Inside-Out.jpg'),(13,'Toxic Spore Print','Acrylic and Screen Print on Wood Panel','8in x 10in','Black','Yellow','Natural','Abstract','Paint','2019',1,'https://i.ibb.co/VvtT1B7/Toxic-Spore-Print.jpg'),(14,'Thermal Glow','Acrylic on Translucent Panel','24in x 8in','Orange','White','Black','Abstract','Paint','2019',1,'https://i.ibb.co/17s1KXd/Thermal-Glow.jpg'),(15,'Torn Sand','Acrylic and Mixed Media on Paper','18in x 24in','White','Red','Black','Abstract','Paint','2019',1,'https://i.ibb.co/wsxLsMg/TornSand.jpg'),(16,'The God, Not the Brand','Acrylic and Mixed Media on Board','36in x 48in','Black','Pink','Blue','Abstract','Paint','2018',1,'https://i.ibb.co/DGkr0QC/The-Goddes-Not-The-Brand.jpg'),(17,'The Future of Trash','Mixed Media','n/a','Chrome','Black','Orange','Abstract','Sculpture','2017',1,'https://i.ibb.co/Fm9mXMk/The-Future-Of-Trash.jpg'),(18,'Swirls of Hair','Acrylic on Translucent Panel','8in x 12in','Black','White','n/a','Abstract','Paint','2020',1,'https://i.ibb.co/7nVk4fb/Swirls-Of-Hair.jpg'),(19,'Surface Tension','Ink on Paper','8in x 11in','Blue','Black','White','Abstract','Print','2020',1,'https://i.ibb.co/rQrjwbS/Surface-Tension.jpg'),(20,'Swirl','Digital Monoprint','10in x 13in','Blue','Pink','White','Abstract','Print','2020',1,'https://i.ibb.co/yftQ19Y/Swirl.jpg'),(21,'Sunken','Acrylic on Canvas','18in x 24in','Black','Blue','Pink','Portait','Paint','2020',1,'https://i.ibb.co/nwNtHGG/Sunken.jpg');
/*!40000 ALTER TABLE `Images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18 10:07:49