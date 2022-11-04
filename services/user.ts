import {databaseWrapper} from "../db/database-wrapper";
import {User} from "../db/entities/user.entity";
import {DataSource} from "typeorm";

export class UserService {

    constructor() {
    }


    async create(userData) {
        const con = databaseWrapper.getConnection();
        console.log(con)
        return "hi";
    }
}