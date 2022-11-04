import {DataSource} from "typeorm";
import {User} from "./entities/user.entity";
import {Task} from "./entities/task.entity";

interface IDatabaseWrapper {
    connect(): Promise<void>,
    getConnection(),
    disconnect(): Promise<void>,
}

class DatabaseWrapper implements IDatabaseWrapper {
    private connection: DataSource;

    async connect(): Promise<void> {
        try {
            this.connection = await new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: Number(5432),
                username: 'postgres',
                password: '1234',
                database: 'test',
                synchronize: true,
                entities: [
                    User, Task
                ]
            }).initialize();

            console.log("Successfully connected to database");
        } catch (error) {
            console.log(error);
            throw new Error("Can't connect to database!");
        }
    }

    getConnection() {
        if (!this.connection) {
            throw new Error("Can't get connection, database connection isn't initialized!");
        }
        return this.connection;
    }

    async disconnect(): Promise<void> {
        if (!this.connection.isInitialized) {
            throw new Error("Can't close connection, database connection isn't initialized!")
        }
        await this.connection.destroy();
        console.log("Database connection was closed successfully");
    }
}

export const databaseWrapper = new DatabaseWrapper();