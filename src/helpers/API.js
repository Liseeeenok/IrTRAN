import axios from "axios";
import { useListsStore } from "@/stores/main";

const host = "mypew.ru:7071"; //имя или ip хоста api
const listsStore = useListsStore();

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

    listsStore.document_types = processingArray(response);
}

export async function getMessageTypes() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/message_types', request);

    listsStore.message_types = processingArray(response);
}

export async function getSignsSending() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/signs_sending', request);

    listsStore.signs_sending = processingArray(response);
}

export async function getCountries() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/countries', request);

    listsStore.countries = processingArray(response);
}

export async function getLegalEntities() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/legal_entities', request);

    listsStore.legal_entities = processingArray(response);
}

export async function getOwnerships() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/ownerships', request);

    listsStore.ownerships = processingArray(response);
}

export async function getOwnersNonPublicRailway() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/owners_non_public_railway', request);

    listsStore.owners_non_public_railway = processingArray(response);
}

export async function getApprovalsWithOwner() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/approvals_with_owner', request);

    listsStore.approvals_with_owner = processingArray(response);
}

export async function getCargoGroups() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/cargo_groups', request);

    listsStore.cargo_groups = processingArray(response);
}

export async function getMethodsSubmission() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/methods_submission', request);

    listsStore.methods_submission = processingArray(response);
}

export async function getStations() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/stations', request);

    listsStore.stations = processingArray(response);
}

export async function getSendings() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/sending', request);

    listsStore.sendings = processingArray(response);
}

export async function getCargos() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/cargo', request);

    listsStore.cargos = processingArray(response);
}

export async function getTransportPackageTypes() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/transport_package_types', request);

    listsStore.transport_package_types = processingArray(response);
}

export async function getRollingStockTypes() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/rolling_stock_types', request);

    listsStore.rolling_stock_types = processingArray(response);
}

export async function getContracts() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/contracts', request);

    listsStore.contracts = processingArray(response);
}

export async function getDestinationIndications() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/destination_indications', request);

    listsStore.destination_indications = processingArray(response);
}

export async function getSubmissionSchedules() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/submission_schedules', request);

    listsStore.submission_schedules = processingArray(response);
}

export async function getSendNumbers() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/send_numbers', request);

    listsStore.send_numbers = processingArray(response);
}

export async function getPayers() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/payers', request);

    listsStore.payers = processingArray(response);
}

export async function getPayerTypes() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/payer_types', request);

    listsStore.payer_types = processingArray(response);
}

export async function getSendTypes() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/send_types', request);

    listsStore.send_types = processingArray(response);
}

export async function getSpeedTypes() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/speed_types', request);

    listsStore.speed_types = processingArray(response);
}

export async function getTransportations() {
    let request = {
        "act": "read",
        "selection_type": "all"
    };

    let response = await sendRequest('https://' + host + '/requests_transportation', request);

    listsStore.transportations = processingArray(response);
}

export async function getTransportation(id) {
    let request = {
        "act": "read",
        "selection_type": "one",
        "object": {
            "id": id
        }
    };

    let response = await sendRequest('https://' + host + '/requests_transportation', request);
    
    ['approval_with_owner_date', 'registration_date', 'transportation_date_from', 'transportation_date_to', 'created_at'].forEach((item) => {
        response[item] = convertDate(response[item]);
    });

    return response;
}

export async function getSending(id) {
    let request = {
        "act": "read",
        "selection_type": "one",
        "object": {
            "id": id
        }
    };

    let response = await sendRequest('https://' + host + '/sending', request);

    return response;
}

//--------------------------------------------------

//------------------Сохранение----------------------

export async function saveTransporation(object) {
    let act = object.id ? 'update' : 'create';

    let request = {
        "act": act,
        "object": {
            object
        }
    };

    let response = await sendRequest('https://' + host + '/requests_transportation', request);
    
    console.log('API response', response);

    return getTransportation(response.id);
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

function convertDate(date)
{
    return date ? date.split('T')[0] : date;
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
