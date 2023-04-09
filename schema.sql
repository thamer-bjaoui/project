-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema reactmysql
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema reactmysql
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `reactmysql` DEFAULT CHARACTER SET utf8 ;
USE `reactmysql` ;

-- -----------------------------------------------------
-- Table `reactmysql`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reactmysql`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(205) NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `imageUrl` VARCHAR(20005) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
