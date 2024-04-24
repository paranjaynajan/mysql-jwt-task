import { Sequelize } from 'sequelize';
import dotenv from "dotenv"

const dbName = process.env.DB_NAME || 'practice';
const dbUsername = process.env.DB_USERNAME || 'root';
const dbPassword = process.env.DB_PASSWORD || 'Paranjay@123';
const dbHost = process.env.DB_HOST || '127.0.0.1';
const dbPort = process.env.DB_PORT || '3306';
const dbDialect = process.env.DB_DIALECT || 'mysql';

const sequelize = new Sequelize(
    dbName,
    dbUsername,
    dbPassword,
    {
        host: dbHost,
        port: parseInt(dbPort), 
        dialect: 'mysql'
    }
);
sequelize.authenticate().then(()=>{console.log("database connected")}).catch(()=>{console.log("database caoont be connected")})
