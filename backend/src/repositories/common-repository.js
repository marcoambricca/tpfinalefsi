import PgHelper from "../helpers/dbhelper.js";

export default class CommonRepository{
    getAllAsync = async (table_name) => {
        const dbhelper = new PgHelper();
        const returnObject = await PgHelper.sqlQuery(`SELECT * FROM ${table_name}`);
    }

    getByIdAsync = async (table_name, id) => {
        const dbhelper = new PgHelper();
        const returnObject = await PgHelper.sqlQuery(`SELECT * FROM ${table_name} WHERE id = ${id}`);
    }
}