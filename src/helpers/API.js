import axios from "axios";
import router from "../router";

const host = "mypew.ru:7071"; //имя или ip хоста api

//-----------------Авторизация----------------------

export async function authorization(login, password) {
    let response = "";

    if (login === "admin" && password === "admin") {
        response = "successfully";
    } else {
        response = "Неправльный логин или пароль";
    }

    return response;
}

//--------------------------------------------------

//-----------------Геттеры--------------------------

export async function getDocumentTypes() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/document_types', request);

    return processingArray(response);
}

export async function getMessageTypes() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/message_types', request);

    return processingArray(response);
}

export async function getSignsSending() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/signs_sending', request);

    return processingArray(response);
}

export async function getCountries() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/countries', request);

    return processingArray(response);
}

export async function getLegalEntities() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/legal_entities', request);

    return processingArray(response);
}

export async function getOwnerships() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/ownerships', request);

    return processingArray(response);
}

export async function getOwnersNonPublicRailway() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/owners_non_public_railway', request);

    return processingArray(response);
}

export async function getApprovalsWithOwner() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/approvals_with_owner', request);

    return processingArray(response);
}

export async function getCargoGroups() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/cargo_groups', request);

    return processingArray(response);
}

export async function getMethodsSubmission() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/methods_submission', request);

    return processingArray(response);
}

export async function getTransportation(id) {
    let request = {
        "act": "read",
        "selection_type": "one",
        "object": {
            "id": id
        }
    };

    let response = await sendRequest('https://' + host + '/methods_submission', request);

    return response;
}

export async function getTransportations() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/requests_transportation', request);

    return processingArray(response);
}

export async function getStations() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/stations', request);

    return processingArray(response);
}

//--------------------------------------------------

//------------------Сохранение----------------------

export function saveTransporation() {
    /*
    let request = {
        'jwt': localStorage.getItem('skos-token'),
        'companies': admin.companies.filter((company) => typeof company.status !== "undefined" && company.status != 3),
        'type_request': 'companies_change',
    }
    axios
        .post('https://' + host + '/companies', request)
        .then((response) => {
            getCompany();
            if (response.data == 'OK') alert('Успешно сохранено!');
            else console.log(request, response);
        })
    */

    alert("Успешно сохранено");

    return getTransportation();
}

//--------------------------------------------------

//------------------Удаление------------------------

export function deleteTransporation() {
    /*
    let request = {
        'jwt': localStorage.getItem('skos-token'),
        'companies': admin.companies.filter((company) => typeof company.status !== "undefined" && company.status != 3),
        'type_request': 'companies_change',
    }
    axios
        .post('https://' + host + '/companies', request)
        .then((response) => {
            getCompany();
            if (response.data == 'OK') alert('Успешно сохранено!');
            else console.log(request, response);
        })
    */
}

//--------------------------------------------------

function processingArray(array) {
    let object = {};

    array.forEach((item) => {
        object[item.id] = item;
    });

    return object;
}

async function sendRequest(url, request)
{
    let result = [];

    await axios
        .post(url, request)
        .then((response) => {
            if (response.status === 200)
            {
                result = response.data;
            }
            else
            {
                console.log(response);
            }
        });

    return result;
}
