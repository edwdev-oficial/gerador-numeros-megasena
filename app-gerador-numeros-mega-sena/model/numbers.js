import { Config } from "../config/config.js";

const port = Config.getPort();

export class Numbers {

    static async createNumbers(_data) {

        const url = `http://localhost:${port}/numbers`

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(_data),
            Headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });

        return response.json();

    }

};

const metodo = new Numbers();