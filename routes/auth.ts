import * as Hapi from "@hapi/hapi"
import {authController} from "../controllers/auth";


export const authRoutes: Hapi.ServerRoute[] = [
    {
        method: 'GET',
        path: '/login',
        options: {
            handler: async (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
                return await authController.login(req, res);
            },
            auth: 'login',
        }
    },
]
