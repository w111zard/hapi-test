import {Repository} from "typeorm";
import {User} from "../db/entities/user.entity";
import {databaseWrapper} from "../db/database-wrapper";
import * as Hapi from "@hapi/hapi";

class AuthController {
    userRepository: Repository<User>

    constructor() {
        console.log("auth constructor()")
        this.userRepository = databaseWrapper.getConnection().getRepository(User);
        console.log(this.userRepository);
    }

    async validate (req, username, password, h) {
        console.log("auth validate()")
        console.log("in validate")
        const user = await this.userRepository.findOne({
            where: {
                name: username
            }
        });
        if (!user) {
            return { isValid: false };
        }

        if (user.password !== password) {
            return { isValid: false };
        }

        return {
            isValid: true,
            credentials: {
                name: user.name
            }
        };
    }

    async login(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        console.log("auth login()")
        return res.response({"message": "Welcome back!"})
    }
}

export const authController = new AuthController();