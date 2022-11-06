import {ServerRoute} from "@hapi/hapi";
import {userRoutes} from "./user";
import {taskRoutes} from "./task";
import {authRoutes} from "./auth";

export default [].concat(
    userRoutes,
    taskRoutes,
    authRoutes,
) as ServerRoute[];