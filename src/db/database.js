import mysql from "promise-mysql";
import config from "../config.js";

const getConnection = async () => {
    const connection = await mysql.createConnection({
        host: config.host,
        database: config.database,
        user: config.user,
        password: config.password
    });
    return connection;
};

export default getConnection;

