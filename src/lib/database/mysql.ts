import mysql from 'mysql2/promise';

let mysqlconn:mysql.Connection|null = null;

export async function getMysqlConnFn():Promise<mysql.Connection>{
    if(!mysqlconn){
        mysqlconn = await mysql.createConnection({ 
            host: "localhost",
            port: 13306,
            user: "root",
            password: "maoge",
            database: "maoge",
            dateStrings:true
        }); 
    }
    return mysqlconn
} 
