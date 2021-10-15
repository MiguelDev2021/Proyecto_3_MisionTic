import httpClient from "./httpClients"

const ENDPOINT= "/api/";


const insertUser = (user) => httpClient.post(ENDPOINT + "register", user);
const getUser = (correo) => httpClient.get(ENDPOINT + "login/" + correo );  
export{

    insertUser,    
    getUser,
}