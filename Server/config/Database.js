import { Sequelize } from "sequelize";

const db = new Sequelize('jane_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;