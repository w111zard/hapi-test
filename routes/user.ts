import * as Hapi from "@hapi/hapi"
import {userController} from "../controllers/user";


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