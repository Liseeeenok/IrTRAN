import axios from 'axios';
import router from '../router';

const host = 'mypew.ru:7070'; //имя или ip хоста api
const hostExcel = 'skos.mypew.ru'; //имя или ip хоста api

export async function authorization(login, password) {
    let response = '';
    if (login === 'admin' && password === 'admin')
    {
        response = 'successfully';
    }
    else
    {
        response = 'Неправльный логин или пароль';
    }

    return response;
}