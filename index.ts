import * as Hapi from "@hapi/hapi";
import {databaseWrapper} from "./db/database-wrapper";
import routes from "./routes";
import {authController} from "./controllers/auth";

const init = async() => {
    const server: Hapi.Server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    await databaseWrapper.connect();

    await server.register([
        {
            plugin: require("@hapi/basic")
        },
    ]);

    server.auth.strategy('login', 'basic', {
        validate: authController.validate
    });

    server.route(routes);

    await server.start();

    console.log(`Server is running on port: ${server.info.port}...`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit();
})

init();