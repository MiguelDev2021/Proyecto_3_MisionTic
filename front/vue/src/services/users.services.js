import httpClient from "./httpClients"

const ENDPOINT= "/api/";


const insertUser = (user) => httpClient.post(ENDPOINT + "register", user);

export{

    insertUser,    
    
}