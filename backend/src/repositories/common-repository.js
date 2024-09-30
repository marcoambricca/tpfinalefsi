import PgHelper from "../helpers/dbhelper.js";

export default class CommonRepository{
    getAllAsync = async (table_name) => {
        const dbhelper = new PgHelper();
        const returnObject = await dbhelper.sqlQuery(`SELECT * FROM ${table_name}`);
        return returnObject;
    }

    getByIdAsync = async (table_name, id) => {
        const dbhelper = new PgHelper();
        const returnObject = await dbhelper.sqlQuery(`SELECT * FROM ${table_name} WHERE id = ${id}`);
        return returnObject;
    }
}