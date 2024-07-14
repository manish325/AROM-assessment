import { registerAs } from "@nestjs/config";
import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import mysql2 from "mysql2";
export default registerAs(
    'databaseConfigs', 
    () : TypeOrmModuleOptions=> {
        return {
            type : 'mysql',
            database : process.env.DATABASE,
            username : process.env.DATABASE_USERNAME,
            port : Number(process.env.DATABASE_PORT),
            password : process.env.DATABASE_PASSWORD,
            host : process.env.DATABASE_HOST,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize : true,
            driver : require('mysql2')
        }
    }
)