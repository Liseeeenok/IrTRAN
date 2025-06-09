export class Transporation {
    static getRequiredFields() {
        return {
            id_document_type: "Нет типа документа",
            registration_date: "Нет даты регистрации документа",
            transportation_date_from: "Нет дат периода перевозок",
            transportation_date_to: "Нет дат периода перевозок",
            id_message_type: "Не выбран вид сообщения",
            id_sign_sending: "Не указан признак отправки",
            id_country_departure: "Не указана страна отправления",
            id_country_departure_point: "Не указана станция отправления/входа в СНГ",
            id_shipper: "Не указан грузоотправитель",
            id_carriage_ownership: "Не указана принадлежность вагонов/контейнеров",
            id_cargo_group: "Не указана группа груза",
            id_method_submission: "Не указан способ подачи",
        };
    }

    static getDefaultDocument() {
        const date = new Date().toISOString().split("T")[0];
        
        return {
            id_document_type: 4,
            registration_date: date,
        };
    }
}
