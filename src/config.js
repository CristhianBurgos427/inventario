import {config} from "dotenv"

config();

export default {
    //variables de entornos
    host : process.env.HOST,
    database : process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
}