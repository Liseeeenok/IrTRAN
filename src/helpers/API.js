import axios from "axios";
import router from "../router";

const host = "mypew.ru:7070"; //имя или ip хоста api

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

    let response = [
        {
            id: 1,
            name: "Заявка на перевозку грузов ГУ-12",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
    ];

    return processingArray(response);
}

export async function getMessageTypes() {
    let response = [
        {
            id: 1,
            name: "Прямое",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 2,
            name: "Прямое смешанное",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 3,
            name: "Прямое международное через российские погранстанции",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 4,
            name: "Непрямое международное через российские погранстанции",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 5,
            name: "Непрямое международное через российские порты",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 6,
            name: "Прямое международное через российские погранстанции",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 7,
            name: "Прямое международное железнодорожно-паромное через российские порты (паром)",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
    ];

    return processingArray(response);
}

export async function getSignsSending() {
    let response = [
        {
            id: 1,
            name: "Повагонная",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 2,
            name: "Контейнерная",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 3,
            name: "Мелкая",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 4,
            name: "Групповая",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 5,
            name: "Контрейлерная",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
    ];

    return processingArray(response);
}

export async function getCountries() {
    let response = [
        {
            id: 1,
            name: "Россия",
            OSCM_code: "test",
            short_name: "test",
            COATO_code: "test",
            OSZhD_code: "test",
            type_state: 1,
            administration_code_digit: "test",
            order_number: "test",
            administration_code_symbol: "test",
            country_code_ISO_3166: "test",
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 2,
            name: "Китай",
            OSCM_code: "test",
            short_name: "test",
            COATO_code: "test",
            OSZhD_code: "test",
            type_state: 1,
            administration_code_digit: "test",
            order_number: "test",
            administration_code_symbol: "test",
            country_code_ISO_3166: "test",
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
    ];

    return processingArray(response);
}

export async function getLegalEntities() {
    let response = [
        {
            id: 1,
            name: "test",
            OKPO: "OKPO test",
            TGNL_code: "TGNL_code test",
            INN: "INN test",
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 2,
            name: "test 2",
            OKPO: "OKPO test 2",
            TGNL_code: "TGNL_code test 2",
            INN: "INN test 2",
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
    ];

    return processingArray(response);
}

export async function getOwnerships() {
    let response = [
        {
            id: 1,
            name: "Собственные",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 2,
            name: "Арендованные",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
        {
            id: 3,
            name: "Собственные и арендованные",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        }
    ];

    return processingArray(response);
}

export async function getOwnersNonPublicRailway() {
    let response = [
        {
            id: 1,
            name: "test",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
    ];

    return processingArray(response);
}

export async function getApprovalsWithOwner() {
    let response = [
        {
            id: 1,
            name: "test",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
    ];

    return processingArray(response);
}

export async function getCargoGroups() {
    let response = [
        {
            id: 1,
            name: "test",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
    ];

    return processingArray(response);
}

export async function getMethodsSubmission() {
    let response = [
        {
            id: 1,
            name: "test",
            code: 1,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
    ];

    return processingArray(response);
}

export async function getTransportation(id) {
    let response = {
        id: 1,
        id_document_type: 1,
        registration_date: "2025-05-25",
        transportation_date_from: "2025-05-25",
        transportation_date_to: "2025-05-25",
        id_message_type: 5,
        id_sign_sending: 3,
        id_country_departure: 1,
        id_country_departure_point: 2,
        id_shipper: 1,
        is_departure_station: false,
        addr: "test",
        id_carriage_ownership: 1,
        id_loading_organizer: 1,
        is_common_areas: false,
        contract_number: "test",
        id_owner_non_public_railway: 1,
        id_approval_with_owner: 1,
        approval_with_owner_date: "2025-05-25",
        id_cargo_group: 1,
        id_method_submission: 1,
        is_form_3: false,
        description: "test",
        is_transmitted_by_fax: false,
        created_at: "2025-05-25",
        updated_at: "2025-05-25",
    };

    return response;
}

export async function getTransportations() {
    let response = [
        {
            id: 1,
            id_document_type: 1,
            registration_date: "2025-05-25",
            transportation_date_from: "2025-05-25",
            transportation_date_to: "2025-05-25",
            id_message_type: 1,
            id_sign_sending: 1,
            id_country_departure: 1,
            id_country_departure_point: 1,
            id_shipper: 1,
            is_departure_station: false,
            addr: "test",
            id_carriage_ownership: 1,
            id_loading_organizer: 1,
            is_common_areas: false,
            contract_number: "test",
            id_owner_non_public_railway: 1,
            id_approval_with_owner: 1,
            approval_with_owner_date: "2025-05-25",
            id_cargo_group: 1,
            id_method_submission: 1,
            is_form_3: false,
            description: "test",
            is_transmitted_by_fax: false,
            created_at: "2025-05-25",
            updated_at: "2025-05-25",
        },
    ];

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
