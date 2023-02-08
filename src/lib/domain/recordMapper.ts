import { getMysqlConnFn } from "$lib/database/mysql";
import _ from "lodash";

export interface ITradeFlowRecordPageRequest{
    page:number
    pageSize:number
}
export interface ITradeFlowRecord{
    trade_no: string
    trade_date: string
    trade_amount: number
    trade_cat: string
    trade_desc: string
}

export interface ITradeFlowRecordPage{


}
export async function queryTradeFlowPage(params:ITradeFlowRecordPageRequest) {
    let start = params.page*params.pageSize;
    let offset = params.pageSize;

    let querySql = `SELECT * FROM trade_flow_record limit ${start},${offset}`;
        
    let mysqlconn = await getMysqlConnFn()
    let records:ITradeFlowRecord[] = await mysqlconn
        .query(querySql)
        .then(function([rows,fields]) {
            return _.map(rows,row=>{        
                return {
                    trade_no: row['trade_no']||"",
                    trade_date: row['trade_date']||"",
                    trade_amount: row['trade_amount']||0,
                    trade_cat: row['trade_cat']||"",
                    trade_desc: row['trade_desc']||"",
                    user_name: row['user_name']||"", 
                }
            })
        });
    return {
        records
    }
}