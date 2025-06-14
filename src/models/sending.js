import { updateSubtitleModal } from "@/helpers/headerHelper";
import { useListsStore } from "@/stores/main";

const listsStore = useListsStore();

export class Sending {
    static getRequiredFields() {
        return {
            id_cargo: "Не указан груз",
            id_send_type: "Не указан вид отправки",
            id_rolling_stock_type: "Не указан вид подвижного состава",
            weight: "Не указан вес",
            count_wagon: "Не указано количество вагонов",
            id_country_destination: "Не указана страна назначения",
            id_station_destination: "Не указана станция назначения/выхода из СНГ",
        };
    }

    static getDefaultDocument() {
        return {
            count_wagon: -1,
        };
    }

    static checkRequiredFields(object) {
        updateSubtitleModal("");

        console.log("check", object);

        let requiredFields = this.getRequiredFields();

        for (let field in requiredFields) {
            if (!object[field]) {
                updateSubtitleModal(requiredFields[field]);
                return;
            }
        }

        let cont = this.checkCorrectDate(object);
    }

    static checkCorrectDate(object) {
        return true;
    }

    static checkAutoFilledFields(newVal, oldVal, object) {
        if (!newVal.id_country_destination) {
            console.log(1);
            if (listsStore.message_types[object.id_message_type]?.name === "Прямое" || listsStore.message_types[object.id_message_type]?.name === "Местное") {
                console.log(2);
                let filterCountries = Object.values(listsStore.countries).filter((item) => item.name == "Российская Федерация");
                let idRussia = filterCountries.length ? filterCountries[0].id : null;
                newVal.id_country_destination = idRussia;
                newVal.update = true;
            }
        }
        console.log(newVal, oldVal);
    }
}
