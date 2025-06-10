<script setup>
import { onMounted, ref, watch } from "vue";
import { saveTransporation, deleteTransporation, getDocumentTypes, getMessageTypes, getSignsSending, getCountries, getLegalEntities, getOwnerships, getOwnersNonPublicRailway, getApprovalsWithOwner, getCargoGroups, getMethodsSubmission, getTransportation, getStations, getSendings, getCargos } from "@/helpers/API";
import { updateTitle, updateSubtitle } from "@/helpers/headerHelper";
import router from "@/router";
import { useRoute } from "vue-router";
import { getDiffDays } from "@/helpers/dateHelper";
import { Transporation } from "@/models/transporation";

const route = useRoute();
const date = new Date().toISOString().split("T")[0];
const document_types = ref({});
const message_types = ref({});
const signs_sending = ref({});
const countries = ref({});
const legal_entities = ref({});
const ownerships = ref({});
const owners_non_public_railway = ref({});
const approvals_with_owner = ref({});
const cargo_groups = ref({});
const methods_submission = ref({});
const stations = ref({});
const sendings = ref({});
const cargos = ref({});
const document = ref(Transporation.getDefaultDocument());
const requiredFields = Transporation.getRequiredFields();
const errorSending = ref('Не указано наименование груза');

function checkRequiredFields() {
    //скип проверки если документ подписан
    console.log("check", document.value);
    updateSubtitle("");

    for (let field in requiredFields) {
        if (!document.value[field]) {
            updateSubtitle(requiredFields[field]);
            return;
        }
    }

    checkCorrectDate();
}

function checkCorrectDate() {
    if (document.value.registration_date < date) {
        updateSubtitle("Дата регистрации должна быть не раньше текущей даты");
        return;
    }
    if (document.value.transportation_date_from > document.value.transportation_date_to) {
        updateSubtitle("Начало перевозки должно быть раньше конца перевозки");
        return;
    }
    if (document.value.transportation_date_from < date || document.value.transportation_date_to < date) {
        updateSubtitle("Период перевозок должен быть не раньше текущей даты");
        return;
    }
    if (getDiffDays(document.value.transportation_date_from, document.value.transportation_date_to) > 45) {
        updateSubtitle("Перевозка превышает 45 дней");
        return;
    }
}

async function saveDocument() {
    let saveDoc = await saveTransporation(document.value);
    document.value = saveDoc;
    updateTitle("Заявка на перевозку №" + document.value.id);
    router.push("/transporation/create/" + saveDoc.id);
}

function copyDocument() {
    document.id = null;
    saveDocument();
}

function signDocument() {
    //смена типа документа на "Подписан"
    saveDocument();
}

function deleteDocument() {
    deleteTransporation(document.value);
    router.push("/menu");
}

async function fetchData() {
    [document_types.value, message_types.value, signs_sending.value, countries.value, legal_entities.value, ownerships.value, owners_non_public_railway.value, approvals_with_owner.value, cargo_groups.value, methods_submission.value, stations.value, sendings.value, cargos.value] = await Promise.all([getDocumentTypes(), getMessageTypes(), getSignsSending(), getCountries(), getLegalEntities(), getOwnerships(), getOwnersNonPublicRailway(), getApprovalsWithOwner(), getCargoGroups(), getMethodsSubmission(), getStations(), getSendings(), getCargos()]);

    if (route.params.id) {
        document.value = await getTransportation(route.params.id);
        updateTitle("Заявка на перевозку №" + document.value.id);
    } else {
        updateTitle("Заявка на перевозку (Новый документ)");
    }

    checkRequiredFields();
}

onMounted(async () => {
    fetchData();
});

watch(
    document,
    async (newVal) => {
        checkRequiredFields();
    },
    { deep: true }
);
</script>

<template>
    <div class="search-box">
        <div class="row">
            <div class="col-auto">
                <button type="button" class="btn btn-custom" @click="saveDocument">Сохранить</button>
                <button type="button" class="btn btn-custom" @click="copyDocument" v-if="document.id">Копировать</button>
                <button type="button" class="btn btn-custom" @click="signDocument" v-if="document.id">Подписать</button>
                <button type="button" class="btn btn-custom" @click="deleteDocument" v-if="document.id">Испортить</button>
            </div>
        </div>
    </div>
    <div class="content-container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-toggle="tab" data-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Документ</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Учетная карточка</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" style="margin-top: 1em" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                <div class="row mb-1">
                    <disable-simple-input title="Тип документа" :dis="true" :value="document_types[document.id_document_type]?.name" :req="true" />
                </div>

                <div class="row mb-1">
                    <simple-input title="Дата регистрации" type="date" v-model="document.registration_date" :req="true" />
                </div>

                <div class="row mb-1">
                    <simple-input title="Период перевозок с" type="date" v-model="document.transportation_date_from" :req="true" />
                    <simple-input title="по" type="date" v-model="document.transportation_date_to" :req="true" :fixWidth="false" />
                </div>

                <div class="row mb-1">
                    <simple-select title="Вид сообщения" :values="message_types" valueKey="id" name="name" v-model="document.id_message_type" :req="true" />
                </div>

                <div class="row mb-1">
                    <simple-select title="Признак отправки" :values="signs_sending" valueKey="id" name="name" v-model="document.id_sign_sending" :req="true" />
                </div>

                <div class="row mb-1">
                    <select-with-search title="Страна отправления" :values="countries" valueKey="id" name="name" v-model="document.id_country_departure" :req="true" modalName="CountryDeparture" :fields="{ 'Код ОСКМ': 'OSCM_code', 'Наименование страны': 'name', 'Краткое наименование': 'short_name' }" />
                </div>

                <div class="row mb-1">
                    <select-with-search title="Станция отправления/входа в СНГ" :values="stations" valueKey="id" name="name" v-model="document.id_station_departure" :req="true" modalName="StationDeparture" :fields="{ 'Код станции': 'code', 'Наименование станции': 'name', 'Краткое наименование': 'short_name' }" />
                    <disable-simple-input title="Код дороги" :dis="true" :value="stations[document.id_station_departure]?.railway" :fixWidth="false" styleInput="width: 120px" />
                    <disable-simple-input title="Код станции" :dis="true" :value="stations[document.id_station_departure]?.code" :fixWidth="false" styleInput="width: 120px" />
                    <disable-simple-input title="Параграфы" :dis="true" :value="stations[document.id_station_departure]?.paragraph" :fixWidth="false" styleInput="width: auto" />
                </div>

                <div class="row mb-1">
                    <select-with-search title="Грузоотправитель" :values="legal_entities" valueKey="id" name="name" v-model="document.id_shipper" :req="true" modalName="Shipper" :fields="{ 'Код ОКПО': 'OKPO', 'Наименование грузоотправителя': 'name', 'ИД бизнеса': 'id_business', 'ИД холдинга': 'id_holding', 'Наименование холдинга': 'name_holding' }" />
                    <disable-simple-input title="ОКПО" :dis="true" :value="legal_entities[document.id_shipper]?.OKPO" :fixWidth="false" styleInput="width: 120px" />
                    <disable-simple-input title="Код ТГНЛ" :dis="true" :value="legal_entities[document.id_shipper]?.TGNL_code" :fixWidth="false" styleInput="width: 120px" />
                    <disable-simple-input title="ИНН" :dis="true" :value="legal_entities[document.id_shipper]?.INN" :fixWidth="false" styleInput="width: auto" />
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" for="customCheck1" style="width: auto">Среди организаций при станции отправления</label>
                    <div class="col-auto">
                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <disable-simple-input title="Наименование организации грузоотправителя" :dis="true" :value="legal_entities[document.id_shipper]?.name" styleInput="width: 500px" />
                </div>

                <div class="row mb-1">
                    <simple-input title="Адрес" v-model="document.addr" styleInput="width: 500px" />
                </div>

                <div class="row mb-1">
                    <simple-select title="Принадлежность вагонов/контейнеров" :values="ownerships" valueKey="id" name="name" v-model="document.id_carriage_ownership" :req="true" />
                </div>

                <div class="row mb-1">
                    <simple-input title="Номер договора" v-model="document.contract_number" />
                </div>

                <div class="row mb-1">
                    <select-with-search title="Владелец жд. пути необщего пользования" :values="owners_non_public_railway" valueKey="id" name="name" v-model="document.id_owner_non_public_railway" modalName="OwnerNonPublicRailway" :fields="{ 'Код ОКПО': 'code', 'Наименование владельца пути': 'name' }" />
                </div>

                <!-- Появляются при выборе владельца жд пути необщ пользования -->
                <div class="row mb-1" v-if="document.contract_number && document.id_owner_non_public_railway">
                    <simple-select title="Отметка о согласовании владельцем пути" :values="[{ 'id': true, 'name': 'Согласовано'}, {'id': false, 'name': 'Согласовано по доверенности'}]" valueKey="id" name="name" v-model="document.is_owner_approval" :req="true" />
                </div>

                <div class="row mb-1" v-if="document.contract_number && document.id_owner_non_public_railway">
                    <simple-input title="Дата согласования с владельцем пути" type="date" v-model="document.owner_approval_date" />
                </div>
                <!-- ------------------------------------------------------ -->

                <div class="row mb-1">
                    <select-with-search title="Группа груза" :req="true" :values="cargo_groups" valueKey="id" name="name" v-model="document.id_cargo_group" modalName="CargoGroup" :fields="{ 'Код группы груза': 'code', 'Наименование группы груза': 'name', 'Минимальная нагрузка': 'min_load', 'Максимальная нагрузка': 'max_load', }" />
                    <disable-simple-input title="Код группы груза" :dis="true" :value="cargo_groups[document.id_cargo_group]?.code" :fixWidth="false" styleInput="width: 100px" />
                    <disable-simple-input title="Мин. норма загр. т" :dis="true" :value="cargo_groups[document.id_cargo_group]?.min_load" :fixWidth="false" styleInput="width: 100px" />
                    <disable-simple-input title="Макс. норма загр. т" :dis="true" :value="cargo_groups[document.id_cargo_group]?.max_load" :fixWidth="false" styleInput="width: 100px" />
                </div>

                <div class="row mb-1">
                    <simple-select title="Способ подачи" :values="methods_submission" valueKey="id" name="name" v-model="document.id_method_submission" :req="true" />
                </div>

                <!-- Отправки -->
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Отправки</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#DobavitOtpravka">Добавить</button>
                        <button type="button" class="btn btn-custom">Изменить</button>
                        <button type="button" class="btn btn-custom">Удалить</button>
                        <button type="button" class="btn btn-custom">Копировать</button>
                        <button type="button" class="btn btn-custom">Вставить</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 50px">
                            <table class="table table-hover table-bordered border-white">
                                <thead style="background-color: #7da5f0; color: white">
                                    <tr>
                                        <th></th>
                                        <th>№</th>
                                        <th>Код груза</th>
                                        <th>Груз</th>
                                        <th>Род подвижного состава</th>
                                        <th>Кол-во ваг/конт</th>
                                        <th>Вес (тонн)</th>
                                        <th>Станция отправления</th>
                                        <th>Дорога</th>
                                        <th>Страна назначения</th>
                                        <th>Плата</th>
                                        <th>Валюта</th>
                                        <th>Сумма НДС</th>
                                        <th>Примечание</th>
                                        <th>Собственник вагонов</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    <tr>
                                        <td><input type="checkbox" class="row-checkbox" /></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- Стат нагрузка появляется после заполнения отправки -->
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Стат. нагрузка</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" disabled="disabled" />
                    </div>
                </div>

                <!--Создание новой Отправки модальное окно -->
                <div class="modal fade bd-example-modal-lg" id="DobavitOtpravka" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 90%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center col-auto" id="staticBackdropLabel" style="color: white; font-weight: bold">Отправка</span>
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; background-color: red; margin: 0 35%">{{ errorSending }}</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-3">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom">Применить</button>
                                        <button type="button" class="btn btn-custom">Отменить</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Груз</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#staticGruz">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">Код груза</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Вид транспотртной упаковки</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#staticTransportUpakovka">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0" for="customCheck1" style="width: auto">Перевозка поездным формированием, не принадлежащим перевозчику</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Вид отправки</label>
                                    <div class="col-3">
                                        <select class="form-select mt-0 custom-input">
                                            <option value="">Выберете элемент списка</option>
                                            <option value="Повагонная">Повагонная</option>
                                            <option value="Контейнерная">Контейнерная</option>
                                            <option value="Контейнерная комплектом на вагон">Контейнерная комплектом на вагон</option>
                                            <option value="Мелкая">Мелкая</option>
                                            <option value="Мелкая комплектом на вагон">Мелкая комплектом на вагон</option>
                                            <option value="Групповая">Групповая</option>
                                            <option value="Контрейлерная">Контрейлерная</option>
                                            <option value="Контрейлерная комплектом на вагон">Контрейлерная комплектом на вагон</option>
                                            <option value="Маршрутная">Маршрутная</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Вид подвижного состава</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#staticVidPodvizSostava">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">Код</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Скорость перевозки</label>
                                    <div class="col-3">
                                        <select class="form-select mt-0 custom-input">
                                            <option value="">Выберете элемент списка</option>
                                            <option value="Большая">Большая</option>
                                            <option value="Грузовая">Грузовая</option>
                                            <option value="Не указано">Не указано</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Владелец/арендатор вагонов</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#staticVladelecArendatorVagonov">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">ОКПО</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Вес (тонн)</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" placeholder="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Количество вагонов</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" placeholder="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Страна назначения</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#staticStranaNaznach">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Станция назначения/выхода СНГ</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#staticStanciaNaznach">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">Код дороги</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>
                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">Код станции</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>
                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">Параграфы</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 180px" placeholder="" disabled="disabled" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Станция выхода из России</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#staticStanciaVihoda">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">Код дороги</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>
                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">Код станции</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Область назначения</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" disabled="disabled" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Пункт перевалки</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#staticPunktPerevalky">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">ОКПО</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Организация в пункте перевалки</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#staticOrgPunktPerevalky">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">ОКПО</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0" for="customCheck1" style="width: auto">Перевозка по альтернативному маршруту</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Грузополучатель</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#staticGruzopoluchatel">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">ОКПО</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>

                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">ИНН</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: auto" placeholder="" disabled="disabled" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0" for="customCheck1" style="width: auto">Среди организаций при станции назначения</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">ОКПО</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" placeholder="" />
                                    </div>
                                    <label class="col-auto col-form-label mb-0 label-custom">Наименование</label>
                                    <div class="col-7">
                                        <input type="text" class="form-control mt-0 custom-input" style="min-width: 100%" placeholder="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Адрес</label>
                                    <div class="col-10">
                                        <input type="text" class="form-control mt-0 custom-input" style="min-width: 100%" placeholder="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Код исключительного тарифа</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" placeholder="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Примечание</label>
                                    <div class="col-10">
                                        <input type="text" class="form-control mt-0 custom-input" style="height: 100px; min-width: 100%" />
                                    </div>
                                </div>

                                <!-----------------Признак назначения------------------>
                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Признак назначения</label>
                                </div>

                                <div class="row mb-1">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#DobavitPriznak">Добавить</button>
                                        <button type="button" class="btn btn-custom">Удалить</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <div class="col-12">
                                        <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 50px">
                                            <table class="table table-hover table-bordered border-white">
                                                <thead style="background-color: #7da5f0; color: white">
                                                    <tr>
                                                        <th>№</th>
                                                        <th>Признак назначения</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="table-group-divider">
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <!--------------------------------------------------->

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Договор на особых условиях</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#staticDogovorNaOsob">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Груз модальное окно -->
                <div class="modal fade" id="staticGruz" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticGruzLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticGruzLabel" style="color: white; font-weight: bold">Груз</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Код груза ЕТСНГ</th>
                                                <th>Наименование груза</th>
                                                <th>Краткое наименование</th>
                                                <th>Номер группы груза</th>
                                                <th>Наименование группы груза</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Вид транспотртной упаковки модальное окно -->
                <div class="modal fade" id="staticTransportUpakovka" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Вид транспотртной упаковки</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>ИД транспортной упаковки</th>
                                                <th>Код транспортной упаковки</th>
                                                <th>Наименование транспортной упаковки</th>
                                                <th>Краткое наименование транспортной упаковки</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Вид подвижного состава модальное окно -->
                <div class="modal fade" id="staticVidPodvizSostava" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Вид подвижного состава</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Код подвижного состава</th>
                                                <th>Наименование</th>
                                                <th>Аббревиатура</th>
                                                <th>Код для РПП</th>
                                                <th>Код рода вагонов в накладной</th>
                                                <th>Наименование рода вагонов в накладной</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Владелец/арендатор вагонов модальное окно -->
                <div class="modal fade" id="staticVladelecArendatorVagonov" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Владелец/арендатор вагонов</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>ИД холдинга</th>
                                                <th>Наименование холдинга</th>
                                                <th>ОКПО</th>
                                                <th>Наименование грузополучателя</th>
                                                <th>ИД бизнеса</th>
                                                <th>Наименование бизнеса</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Страна назначения модальное окно -->
                <div class="modal fade" id="staticStranaNaznach" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Страна назначения</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Код ОСКМ</th>
                                                <th>Наименование страны</th>
                                                <th>Краткое наименование</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Станция назначения/выхода СНГ модальное окно -->
                <div class="modal fade" id="staticStanciaNaznach" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Страна отправления</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Код станции</th>
                                                <th>Наименование станции</th>
                                                <th>Краткое наименование</th>
                                                <th>Код страны</th>
                                                <th>Наименование страны</th>
                                                <th>Код дороги</th>
                                                <th>Код ОСЖД</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Станция выхода из России модальное окно -->
                <div class="modal fade" id="staticStanciaVihoda" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Станция выхода из России</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Код станции</th>
                                                <th>Наименование станции</th>
                                                <th>Краткое наименование</th>
                                                <th>Код страны</th>
                                                <th>Наименование страны</th>
                                                <th>Код дороги</th>
                                                <th>Код ОСЖД</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Пункт перевалки модальное окно -->
                <div class="modal fade" id="staticPunktPerevalky" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Пункт перевалки</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Код станции</th>
                                                <th>Наименование станции</th>
                                                <th>Краткое наименование</th>
                                                <th>Код страны</th>
                                                <th>Наименование страны</th>
                                                <th>Код дороги</th>
                                                <th>Код ОСЖД</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Организация в пункте перевалки модальное окно -->
                <div class="modal fade" id="staticOrgPunktPerevalky" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Организация в пункте перевалки</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Код</th>
                                                <th>Наименование</th>
                                                <th>Краткое наименование</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Грузополучатель модальное окно -->
                <div class="modal fade" id="staticGruzopoluchatel" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Грузополучатель</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Код ОКПО</th>
                                                <th>Наименование грузополучатель</th>
                                                <th>ИД бизнеса</th>
                                                <th>ИД холдинга</th>
                                                <th>Наименование холдинга</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Добавить Признак назначения модальное окно -->
                <div class="modal fade" id="DobavitPriznak" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Признак назначения</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Код</th>
                                                <th>Наименование</th>
                                                <th>Примечание</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Договор на особых условиях модальное окно -->
                <div class="modal fade" id="staticDogovorNaOsob" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Договор на особых условиях</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Код</th>
                                                <th>Наименование</th>
                                                <th>Краткое</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!-- ------------------------------------------------------- -->

                <!-- График подач -->
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">График подач</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom">Рассчитать график подач</button>
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#staticGraficPodach">Добавить</button>
                        <button type="button" class="btn btn-custom">Изменить</button>
                        <button type="button" class="btn btn-custom">Удалить</button>
                        <button type="button" class="btn btn-custom">Копировать</button>
                        <button type="button" class="btn btn-custom">Вставить</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 50px">
                            <table class="table table-hover table-bordered border-white">
                                <thead style="background-color: #7da5f0; color: white">
                                    <tr>
                                        <th></th>
                                        <th>№</th>
                                        <th>№ отправки</th>
                                        <th>Дата подачи</th>
                                        <th>Кол-во вагонов/контейнеров</th>
                                        <th>Вес (тонн)</th>
                                        <th>Срок доставки</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    <tr>
                                        <td><input type="checkbox" class="row-checkbox" /></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!--Добавить График подач модальное окно -->
                <div class="modal fade" id="staticGraficPodach" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticGraficPodachLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">График подачи</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-1">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom">Применить</button>
                                        <button type="button" class="btn btn-custom" data-dismiss="modal">Отменить</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Отправка</label>
                                    <div class="col-3">
                                        <select class="form-select mt-0 custom-input">
                                            <option value="">Выберете элемент списка</option>
                                            <option value="">Отправка №1</option>
                                            <option value="">Отправка №2</option>
                                            <option value="">Отправка №3</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Дата подачи</label>
                                    <div class="col-auto">
                                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Вес (тонн)</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" placeholder="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Кол-во вагонов (конт)</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" placeholder="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!-- ------------------------------------------------------- -->

                <!-- Плательщики/Экспедиторы -->
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Плательщики/Экспедиторы</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#staticPlatelshic">Добавить</button>
                        <button type="button" class="btn btn-custom">Изменить</button>
                        <button type="button" class="btn btn-custom">Удалить</button>
                        <button type="button" class="btn btn-custom">Копировать</button>
                        <button type="button" class="btn btn-custom">Вставить</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 50px">
                            <table class="table table-hover table-bordered border-white">
                                <thead style="background-color: #7da5f0; color: white">
                                    <tr>
                                        <th></th>
                                        <th>№</th>
                                        <th>Код плательщика</th>
                                        <th>ОКПО</th>
                                        <th>Наименование</th>
                                        <th>Страна</th>
                                        <th>Плат/Экспед</th>
                                        <th>№ отправки</th>
                                        <th>Код перевозчика</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    <tr>
                                        <td><input type="checkbox" class="row-checkbox" /></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!--Добавить Плательщики/Экспедиторы модальное окно -->
                <div class="modal fade" id="staticPlatelshic" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticPlatelshicLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 70%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Плательщики/Экспедиторы</span>
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; background-color: red; margin: 0 20%">Не указано, кто платит по заявке</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-1">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom">Применить</button>
                                        <button type="button" class="btn btn-custom" data-dismiss="modal">Отменить</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Кто платит по заявке</label>
                                    <div class="col-3">
                                        <select class="form-select mt-0 custom-input">
                                            <option value="">Выберете элемент списка</option>
                                            <option value="">Экспедитор</option>
                                            <option value="">Грузоотправитель</option>
                                            <option value="">Плательщик</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Страна, за перевозку по которой, платят</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#staticStranaPlatel">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Плательщик/Экспедитор</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#staticPlatelshicNaity">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom">Код ОКПО</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" placeholder="" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Наименование</label>
                                    <div class="col-9">
                                        <input type="text" class="form-control mt-0 custom-input" placeholder="" style="min-width: 100%" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Адрес</label>
                                    <div class="col-9">
                                        <input type="text" class="form-control mt-0 custom-input" placeholder="" style="min-width: 100%" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Примечание</label>

                                    <div class="col-9">
                                        <input type="text" class="form-control mt-0 custom-input" style="height: 100px; min-width: 100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Плательщик/Экспедитор модальное окно -->
                <div class="modal fade" id="staticPlatelshicNaity" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Плательщик/Экспедитор</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>ИД холдинга</th>
                                                <th>Наименование холдинга</th>
                                                <th>ОКПО</th>
                                                <th>Наименование грузополучателя</th>
                                                <th>ИД бизнеса</th>
                                                <th>Наименование бизнеса</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Страна, за перевозку по которой, платят модальное окно -->
                <div class="modal fade" id="staticStranaPlatel" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Страна, за перевозку по которой, платят</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Код</th>
                                                <th>Наименование</th>
                                                <th>Краткое наименование</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!-- ------------------------------------------------------- -->
                <div class="row mb-1">
                    <div class="col-12">
                        <input type="text" class="form-control mt-0 custom-input" style="height: 100px; min-width: 100%" />
                    </div>
                </div>
            </div>

            <!------------------------------------------------------------------Учетная карточка------------------------------------------------------------------------------------------------------------------------------------------->

            <div class="tab-pane fade" style="margin-top: 1em" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="">Подписать</button>
                    </div>
                </div>
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Грузоотправитель</label>
                    <label class="col-10 col-form-label mb-0 label-custom">(Наименование грузоотправителя из заявки)</label>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Банковские реквизиты</label>
                    <label class="col-10 col-form-label mb-0 label-custom">(Банковские реквизиты грузоотправителя из заявки)</label>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Станция отправления</label>
                    <label class="col-3 col-form-label mb-0 label-custom">(Станция отправления из заявки)</label>
                    <label class="col-auto col-form-label mb-0 label-custom">Группа груза</label>
                    <label class="col-3 col-form-label mb-0 label-custom">(Группа груза из заявки)</label>
                </div>

                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                    <table class="table table-hover table-bordered border-white">
                        <thead style="background-color: #7da5f0; color: white">
                            <tr>
                                <th rowspan="2"></th>
                                <th rowspan="2">Дата погрузки</th>
                                <th rowspan="2">Станция</th>
                                <th colspan="2">Заявлено</th>
                                <th>Подано</th>
                                <th colspan="2">Погружено</th>
                                <th colspan="3">Причины невыполнения заявки</th>
                                <th colspan="2">Подпись</th>
                            </tr>
                            <tr>
                                <td>Вагонов(конт.)</td>
                                <td>Тонн</td>
                                <td>Вагонов(конт.)</td>
                                <td>Вагонов(конт.)</td>
                                <td>Тонн</td>
                                <td>Общий недогруз в вагонах (конт.)</td>
                                <td>Ж.Д.</td>
                                <td>Отправитель</td>
                                <td>Станции</td>
                                <td>Грузоотправителя</td>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr>
                                <td><input type="checkbox" class="row-checkbox" /></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td data-toggle="modal" data-target="#NaityPrichiny"></td>
                                <td data-toggle="modal" data-target="#NaityPrichiny"></td>
                                <td data-toggle="modal" data-target="#NaityPrichiny"></td>
                                <td data-toggle="modal" data-target="#PodpisatSutky"></td>
                                <td data-toggle="modal" data-target="#PodpisatSutky"></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>ИТОГО</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!--Найти Причины не выполнения модальное окно -->
                <div class="modal fade" id="NaityPrichiny" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Причины</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Группа причин</th>
                                                <th>№</th>
                                                <th>Причина не выполнения</th>
                                                <th>Кол-во вагонов (конт.)</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#DobavitDatuPogr" disabled>Добавить дату погр.</button>
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#UdalitDatuPodachy" disabled>Удалить дату погр.</button>
                    </div>
                </div>

                <!--Добавить дату погрузки модальное окно -->
                <div class="modal fade" id="DobavitDatuPogr" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Добавление даты погрузки</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Дата погрузки</label>
                                    <div class="col-auto">
                                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Станция назначения</label>
                                    <div class="col-3">
                                        <select class="form-select mt-0 custom-input">
                                            <option value="">Выберете элемент списка</option>
                                            <option value="">Станция №1</option>
                                            <option value="">Станция №2</option>
                                            <option value="">Станция №3</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Подвижной состав</label>
                                    <div class="col-3">
                                        <select class="form-select mt-0 custom-input">
                                            <option value="">Выберете элемент списка</option>
                                            <option value="">КО</option>
                                            <option value="">КО</option>
                                            <option value="">КО</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row justify-content-md-start">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">ОК</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 80px; margin: 10px">Отмена</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Подписать учетные сутки модальное окно -->
                <div class="modal fade" id="PodpisatSutky" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Подтверждение</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-1">
                                    <label class="col-12 col-form-label mb-0 label-custom">Вы хотите подписать отчётные сутки?</label>
                                </div>
                                <div class="row justify-content-md-start">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">ОК</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 80px; margin: 10px">Отмена</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Подтвердить удаление даты погрузки модальное окно -->
                <div class="modal fade" id="UdalitDatuPodachy" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Подтверждение</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-1">
                                    <label class="col-12 col-form-label mb-0 label-custom">Вы хотите удалить дату погрузки?</label>
                                </div>
                                <div class="row justify-content-md-start">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">ОК</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 80px; margin: 10px">Отмена</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                    <table class="table table-hover table-bordered border-white">
                        <thead style="background-color: #7da5f0; color: white">
                            <tr>
                                <th colspan="13">Ответственность за невыполнение принятой заявки, начисленная на:</th>
                                <th rowspan="4">Сальдо по штрафам</th>
                                <th rowspan="4">№НК / №Ув</th>
                            </tr>
                            <tr>
                                <td colspan="10">Грузоотправителя</td>
                                <td colspan="3">Железную дорогу</td>
                            </tr>
                            <tr>
                                <td colspan="3">Невыполненные заявки</td>
                                <td colspan="3">По дор.(ст.) назначения</td>
                                <td colspan="4">Сбор за изменение заявки</td>
                                <td colspan="3">Невыполненные заявки</td>
                            </tr>
                            <tr>
                                <td>В ваг.(конт.)</td>
                                <td>В тоннах</td>
                                <td>Сумма штрафа</td>
                                <td>В тоннах</td>
                                <td>Сумма сбора</td>
                                <td>В ваг.(конт.)</td>
                                <td>Кол-во изм.</td>
                                <td>В ваг.(конт.)</td>
                                <td>Тонн</td>
                                <td>Сумма сбора</td>
                                <td>В ваг.(конт.)</td>
                                <td>В тоннах</td>
                                <td>Сумма штрафа</td>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
li {
    margin-left: -10px;
}

.search-box {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
    height: 70px;
    width: 100%;
    position: fixed;
    top: 50px;
    left: 15px;
    z-index: 1000;
}

.content-container {
    padding: 120px 15px;
    top: 100px;
    font-size: 14px;
}
.span-custom {
    background-color: #ffffde;
    border: solid #a8a8a8 1px;
    color: black;
    height: 30px;
    padding: 3px 50px;
}

.form-check-input-checked-bg-color {
    background-color: #7da5f0;
}

.btn-box {
    width: 90%;
    position: fixed; /* Закрепление шапки в верхней части страницы */
}

.selected {
    background-color: #2165b6; /* Цвет выделения строки */
    color: white;
}

.btn-custom {
    width: auto;
    background-color: #7da5f0;
    color: white;
    margin: 3px;
}

.btn-custom:hover {
    background-color: #3e6cb4;
    color: white;
}
</style>
