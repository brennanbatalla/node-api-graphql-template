// https://www.npmjs.com/package/sequelize-typescript

import {Sequelize} from "sequelize-typescript";

export let sequelize: Sequelize;

export const init = async () => {
    try {
        sequelize = new Sequelize({
            models: [__dirname + '/../database/model/**/*.model.ts'],
            logging: false,                        // Disables logging
            //logging: msg => logger.debug(msg), // Custom Logging
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            dialect: 'mysql',
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        });

        await sequelize.authenticate();
        await sequelize.sync({alter: true});
        console.log("DB Connected");
    } catch (e) {
        console.error("Unable to connect to DB", e);
    }
}

