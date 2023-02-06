import { getMysqlConnFn } from "$lib/database/mysql"

export interface TradeFlowRecordDO{
    /**
     * 交易流水ID
     */
    trade_no:string
    /**
     * 交易流水时间
     */
    trade_date:Date|null
    /**
     * 交易流水花销(分)
     */
    trade_amount:number
    /**
     * 交易流水分类
     */
    trade_cat:string
    /**
     * 交易流水描述
     */
    trade_desc:string
    /**
     * 交易消费者
     */
    user_name:string
}

export async function insertTradeFlowRecord(){
    let mysqlconn = await getMysqlConnFn()
    let sql = "INSERT INTO `trade_flow_record`"
        + "(`trade_no`,`trade_date`,`trade_amount`,`trade_cat`,`trade_desc`,`user_name`)"
        + "VALUES (?, ?, ?, ?, ?, ?)";
    
        await mysqlconn.query(
            sql,
            ["1","2023-02-01 08:00:00",11,"测试","测试","测试"]
        )
}