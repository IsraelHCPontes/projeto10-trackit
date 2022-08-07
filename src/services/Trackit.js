import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';



function getListarHabitos() {
    const auth = JSON.parse(localStorage.getItem('useData'))

    const config = {
        headers: {
            'Authorization': `Bearer ${auth.token}`
        }
    }
    console.log(config)
    const promise = axios.get(`${BASE_URL}/habits`, config);
    return promise;
 }  


function getDeleteHabitos({id}){
    const auth = JSON.parse(localStorage.getItem('useData'))

    console.log({id})

    const config = {
        headers: {
            'Authorization': `Bearer ${auth.token}`
        }
    }
    const promise = axios.delete(`${BASE_URL}habits/${id}`,config);
    return promise;
}  


function getBuscaHabitosHoje() {
    const auth = JSON.parse(localStorage.getItem('useData'))
 
    const config = {
        headers: {
            'Authorization': `Bearer ${auth.token}`
        }
    }
    const promise = axios.get(`${BASE_URL}/habits/today`,config);
    return promise;
}  


function getHistoricoHabitos() {
    const promise = axios.get(`${BASE_URL}/auth/habits/history/daily`);
    return promise;
}    


function postCadastro(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`,body);
  return promise;
}


function postLogin(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`,body);
  return promise;
}


function postCriarHabitos(body) {
    const auth = JSON.parse(localStorage.getItem('useData'))

    const config = {
        headers: {
            'Authorization': `Bearer ${auth.token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/habits`,body, config);
    return promise;
}


function postCheckHabitos(idHabito, body) {
    const promise = axios.post(`${BASE_URL}/auth/habits/${idHabito}/check`,body);
    return promise;
}
 

function postUncheckHabitos(idHabito, body) {
    const promise = axios.post(`${BASE_URL}/auth/habits/${idHabito}/uncheck`,body);
    return promise;
} 


export {
    postCadastro,
    postLogin,
    postCriarHabitos,
    getListarHabitos,
    getDeleteHabitos,
    getBuscaHabitosHoje,
    postCheckHabitos,
    postUncheckHabitos,
    getHistoricoHabitos

 };