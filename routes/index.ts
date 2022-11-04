import {ServerRoute} from "@hapi/hapi";
import {userRoutes} from "./user";
import {taskRoutes} from "./task";

export default [].concat(
    userRoutes,
    taskRoutes,
) as ServerRoute[];