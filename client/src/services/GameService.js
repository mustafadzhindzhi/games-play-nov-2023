import { request } from "../lib/request.js";

//gameData === names

const baseUrl = 'http://localhost:3030/jsonstore/games';

//all games - add new folder lib
export const getAll = async () => {
    const result = await request('GET', baseUrl);

    return Object.values(result);
}

//create
export const create = async (gameData) => {
   const reponse = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = await reponse.json();

    return result;
};
