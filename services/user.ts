import {databaseWrapper} from "../db/database-wrapper";
import {User} from "../db/entities/user.entity";
import {DataSource, Repository} from "typeorm";

class UserService {
    userRepository: Repository<User>;

    constructor() {
        this.userRepository = databaseWrapper.getConnection().getRepository(User);
    }

    async create(userData) {
        return await this.userRepository.save(userData);
    }
}

export const userService = new UserService();