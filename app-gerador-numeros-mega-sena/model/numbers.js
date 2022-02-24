import { Config } from "../config/config.js";

const url = Config.Url();

export class Numbers {

    static async createNumbers(_data) {

        
        const response = await fetch(`${url}/numbers`, {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });

        return response.json();

    }

    static async getNumbers(_data) {

        const response = await fetch(`${url}/numbers/user`, {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });

        return response.json();

    };

};

// const metodo = new Numbers();