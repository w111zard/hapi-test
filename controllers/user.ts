import * as Hapi from "@hapi/hapi"
import {userService} from "../services/user";

class UserController {
    async create(req: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject> {
        try {
            const newUser = await userService.create(req.payload);
            return h.response(newUser);
        } catch (err) {
            console.log(err);
            return h.response({"err": err})
        }
    }
}

export const userController = new UserController();