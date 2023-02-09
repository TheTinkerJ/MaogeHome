CREATE DATABASE IF NOT EXISTS `maoge`;

USE `maoge`;

-- 交易流水记录表

CREATE TABLE IF NOT EXISTS `trade_flow_record`(
  -- 通用行
  `id` 						bigint(20) unsigned NOT NULL AUTO_INCREMENT 																				COMMENT '主键',
  `create_time` 	datetime 						NOT NULL DEFAULT CURRENT_TIMESTAMP 															COMMENT '创建时间',
  `modified_time` datetime 						NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 	COMMENT '更新时间',
  -- 交易流水本身
  `trade_no` 			varchar(32) 				NOT NULL DEFAULT ''									COMMENT '交易流水ID',
  `trade_date`		datetime 						NOT NULL DEFAULT CURRENT_TIMESTAMP 	COMMENT '交易流水时间',
  `trade_amount`	bigint 							NOT NULL DEFAULT '0'								COMMENT '交易流水花销(分)',
  `trade_cat` 		varchar(32) 				NOT NULL DEFAULT ''									COMMENT '交易流水分类',
  `trade_desc`		varchar(255) 				NOT NULL DEFAULT ''									COMMENT '交易流水描述',
	-- 交易方信息
  `user_name` 		varchar(32) 				NOT NULL DEFAULT ''								  COMMENT '交易消费者',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='trade_flow_record';