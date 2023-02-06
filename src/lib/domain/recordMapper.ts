import { getMysqlConnFn } from "$lib/database/mysql";

export async function insertRecord(params:any) {
    let mysqlconn = await getMysqlConnFn()
    let result = await mysqlconn.query("select * from `trade_flow_record`")
        .then(function([rows,fields]) {
            console.log(rows);
            return rows;
        });
    
    return {
        result
    }
}