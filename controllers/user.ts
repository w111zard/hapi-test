import * as Hapi from "@hapi/hapi"
import {UserService} from "../services/user";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async create(req: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject> {
        try {
            const newUser = await this.userService.create(req.payload);
            return h.response(newUser);
        } catch (err) {
            console.log(err);
            return h.response({"err": err})
        }
    }
}