import mysql from 'mysql2/promise';

let mysqlconn:mysql.Connection|null = null;

export async function getMysqlConnFn():Promise<mysql.Connection>{
    console.log(
        import.meta.env.VITE_MYSQL_HOST,
        import.meta.env.VITE_MYSQL_PORT,
        import.meta.env.VITE_MYSQL_USER,
        import.meta.env.VITE_MYSQL_PASSWORD,
        import.meta.env.VITE_MYSQL_DATABASE,
    );
    
    if(!mysqlconn){
        mysqlconn = await mysql.createConnection({ 
            host: import.meta.env.VITE_MYSQL_HOST,
            port: import.meta.env.VITE_MYSQL_PORT,
            user: import.meta.env.VITE_MYSQL_USER,
            password: import.meta.env.VITE_MYSQL_PASSWORD,
            database: import.meta.env.VITE_MYSQL_DATABASE,
            dateStrings:true
        }); 
    }
    return mysqlconn
} 
