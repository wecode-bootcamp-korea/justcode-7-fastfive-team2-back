-- migrate:up
CREATE TABLE IF NOT EXISTS `grades` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `grade_name` varchar(100) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS `users` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `grade_id` int NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT (now()),
  `updated_at` DATETIME default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL COMMENT 'update time'
);

CREATE TABLE IF NOT EXISTS `category_details` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `detail_name` varchar(200) NOT NULL,
  `category_id` int NOT NULL

);

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `category_name` varchar(200) NOT NULL,
  `category_image` varchar(500) NOT NULL,
  `category_description` varchar(1000) NULL
);


CREATE TABLE IF NOT EXISTS `places` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `place_name` varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS `corporation` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `category_detail_id` int NULL, 
  `corporation_name` varchar(300) NOT NULL,
  `image` varchar(500) NOT NULL,
  `introduction` varchar(250) NOT NULL,
  `url` varchar(500) NOT NULL,
  `field` varchar(300) NOT NULL,
  `detail_introduction` varchar(2500) NOT NULL,
  `members_benefits` varchar(250) NOT NULL,
  `corporation_number` varchar(500) NOT NULL,
  `introduction_file` varchar(500) NOT NULL,
  `place_id` int NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT (now()),
  `updated_at` DATETIME default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL COMMENT 'update time'
);

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `content` varchar(2500) NOT NULL,
  `secret` int NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT (now()),
  `updated_at` DATETIME default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL COMMENT 'update time'
);

CREATE TABLE IF NOT EXISTS `replies` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `content` varchar(2500) NOT NULL,
  `secret` int NOT NULL DEFAULT 0,
  `comment_id` int NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT (now()),
  `updated_at` DATETIME default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL COMMENT 'update time'
);

CREATE UNIQUE INDEX `users` ON `users` (`email`);

ALTER TABLE `users` ADD FOREIGN KEY (`grade_id`) REFERENCES `grades` (`id`);

ALTER TABLE `corporation` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `corporation` ADD FOREIGN KEY (`category_detail_id`) REFERENCES `category_details` (`id`);

ALTER TABLE `corporation` ADD FOREIGN KEY (`place_id`) REFERENCES `places` (`id`);

ALTER TABLE `category_details` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

ALTER TABLE `replies` ADD FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

ALTER TABLE `replies` ADD FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`);

-- migrate:down

SET foreign_key_checks = 0;

DROP TABLE grades;
DROP TABLE users;
DROP TABLE category_details;
DROP TABLE categories;
DROP TABLE places;
DROP TABLE corporation;
DROP TABLE comments;
DROP TABLE replies;

SET foreign_key_checks = 1;
