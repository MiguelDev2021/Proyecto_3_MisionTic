import httpClient from "./httpClients"

const ENDPOINT= "/api/oferts";

const getAllOferts = () => httpClient.get(ENDPOINT);
const getOfert = (code) => httpClient.get(ENDPOINT + "/" + code );  
const insertOfert = (ofert) => httpClient.post(ENDPOINT, ofert);

export{
    getAllOferts, 
    insertOfert,    
    getOfert,
}