import { Config } from "../config/config.js";


const url = Config.Url();

export class Apostas {

    static async getApostas(_data) {

        const response = await fetch(`${url}/aposta/find`, {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        }); 

        return response.json()

    };

};