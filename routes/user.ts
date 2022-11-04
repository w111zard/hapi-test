import * as Hapi from "@hapi/hapi"
import {UserController} from "../controllers/user";

const userController = new UserController();

export const userRoutes: Hapi.ServerRoute[] = [
    {
        method: 'POST',
        path: '/user',
        options: {
            handler: async (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
                return await userController.create(req, res);
            }
        }
    },
]