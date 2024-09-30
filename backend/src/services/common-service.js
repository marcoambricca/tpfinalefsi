import CommonRepository from "../repositories/common-repository.js";

export default class CommonService{
    getAllAsync = async (table_name) => {
        const repo = new CommonRepository();
        let returnArray = await repo.getAllAsync(table_name);
        return returnArray;
    }
    
    getByIdSync = async (table_name, id) => {
        const repo = new CommonRepository();
        let returnObject = await repo.getByIdSync(table_name, id);
        return returnObject;
    }
}