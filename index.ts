import * as Hapi from "@hapi/hapi";
import {databaseWrapper} from "./db/database-wrapper";
import routes from "./routes";

const init = async() => {
    const server: Hapi.Server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    await databaseWrapper.connect();

    server.route(routes);

    await server.start();

    console.log(`Server is running on port: ${server.info.port}...`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit();
})

init();