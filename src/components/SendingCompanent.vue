<script>
import { useMainStore, useListsStore } from "@/stores/main";
import { Sending } from "@/models/sending";
export default {
    props: {
        object: {
            type: Object,
        },
        sendingId: {
            type: Number,
        },
    },
    data() {
        return {
            errorSending: "Не указано наименование груза",
            listsStore: {},
            mainStore: {},
            sending: {},
        };
    },
    methods: {
    },
    created() {
        this.listsStore = useListsStore();
        this.mainStore = useMainStore();
        if (this.sendingId) {
            this.sending = this.listsStore.cargos[this.sendingId];
        } else {
            this.sending = Sending.getDefaultDocument();
        }
    },
    mounted() {
    },
    computed: {
        watchedComputed() {
            return Object.assign({}, this.sending);
        },
    },
    watch: {
        watchedComputed: {
            deep: true,
            handler(newVal, oldVal) {
                console.log(this.object);
                Sending.checkAutoFilledFields(newVal, oldVal, this.object);
                Sending.checkRequiredFields(newVal);

                if (newVal.update) {
                    delete newVal.update;
                    this.sending = Object.assign({}, newVal);
                }
            },
        },
        object: {
            deep: true,
            handler(newVal, oldVal) {
                Sending.checkAutoFilledFields(this.watchedComputed, this.watchedComputed, this.object);

                if (this.watchedComputed.update) {
                    delete this.watchedComputed.update;
                    this.sending = Object.assign({}, this.watchedComputed);
                }
            },
        }
    },
};
</script>

<template>
    <div class="modal fade bd-example-modal-lg" id="DobavitOtpravka" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 90%">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #7da5f0">
                    <span class="modal-title text-center col-auto" id="staticBackdropLabel" style="color: white; font-weight: bold">Отправка</span>
                    <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; background-color: red; margin: 0 35%">{{ mainStore.subtitleModal }}</span>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-3">
                        <div class="col-auto">
                            <simple-button title="Применить" />
                            <simple-button title="Отменить" />
                        </div>
                    </div>

                    <div class="row mb-1">
                        <select-with-search title="Груз" :req="true" :values="listsStore.cargos" valueKey="id" name="name" v-model="sending.id_cargo" modalName="SendingCargo" :fixWidth="false" :fields="{ 'Код груза ЕТСНГ': 'code_ETSNG', 'Наименование груза': 'name', 'Краткое наименование': 'short_name', 'Номер группы груза': 'number_group' }" />
                        <disable-simple-input title="Код груза" :dis="true" :value="listsStore.cargos[sending.id_cargo]?.code_ETSNG" :fixWidth="false" styleInput="width: 120px" />
                    </div>

                    <div class="row mb-1">
                        <select-with-search title="Вид транспотртной упаковки" :values="listsStore.transport_package_types" valueKey="id" name="name" v-model="sending.id_transport_package_type" modalName="SendingTransportPackageType" :fixWidth="false" :fields="{ 'ИД транспортной упаковки': 'id', 'Код транспортной упаковки': 'code', 'Наименование транспортной упаковки': 'name', 'Краткое наименование транспортной упаковки': 'short_name' }" />
                    </div>

                    <div class="row mb-1">
                        <simple-input title="Перевозка поездным формированием, не принадлежащим перевозчику" type="checkbox" v-model="sending.is_train_formation" styleLabel="width: auto;" styleInput="width: 20px; height: 20px;" />
                    </div>

                    <div class="row mb-1">
                        <simple-select title="Вид отправки" :values="listsStore.send_types" valueKey="id" name="name" v-model="sending.id_send_type" :req="true" />
                    </div>

                    <div class="row mb-1">
                        <select-with-search title="Вид подвижного состава" :req="true" :values="listsStore.rolling_stock_types" valueKey="id" name="name" v-model="sending.id_rolling_stock_type" modalName="SendingRollingStockType" :fixWidth="false" :fields="{ 'Код подвижного состава': 'code', Наименование: 'name', Аббревиатура: 'abbreviation', 'Код для РПП': 'RPP', 'Код рода вагонов в накладной': 'code_invoice_wagon', 'Наименование рода вагонов в накладной': 'name_invoice_wagon' }" />
                        <disable-simple-input title="Код" :dis="true" :value="listsStore.rolling_stock_types[sending.id_rolling_stock_type]?.code" :fixWidth="false" styleInput="width: 120px" />
                    </div>

                    <div class="row mb-1">
                        <simple-select title="Скорость перевозки" :values="listsStore.speed_types" valueKey="id" name="name" v-model="sending.id_speed_type" />
                    </div>

                    <div class="row mb-1">
                        <select-with-search title="Владелец/арендатор вагонов" :values="listsStore.legal_entities" valueKey="id" name="name" v-model="sending.id_owner_wagon" modalName="SendingOwnerWagon" :fixWidth="false" :fields="{ 'ИД холдинга': 'id', 'Наименование холдинга': 'name', 'ОКПО': 'OKPO', 'Наименование грузополучателя': '', 'ИД бизнеса': '', 'Наименование бизнеса': '' }" />
                        <disable-simple-input title="ОКПО" :dis="true" :value="listsStore.legal_entities[sending.id_owner_wagon]?.OKPO" :fixWidth="false" styleInput="width: 120px" />
                    </div>

                    <div class="row mb-1">
                        <simple-input title="Вес (тонн)" type="number" :req="true" v-model="sending.weight" styleLabel="width: auto;" />
                    </div>

                    <div class="row mb-1">
                        <simple-input title="Количество вагонов" type="number" :req="true" v-model="sending.count_wagon" styleLabel="width: auto;" />
                    </div>

                    <div class="row mb-1">
                        <select-with-search title="Страна назначения" :req="true" :values="listsStore.countries" valueKey="id" name="name" v-model="sending.id_country_destination" modalName="SendingCountryDestination" :fixWidth="false" :fields="{ 'Код ОСКМ': 'OSCM_code', 'Наименование страны': 'name', 'ОКПО': 'OKPO', 'Краткое наименование': 'short_name' }" />
                    </div>

                    <div class="row mb-1">
                        <select-with-search title="Станция назначения/выхода СНГ" :values="listsStore.stations" valueKey="id" name="name" v-model="sending.id_station_destination" :req="true" modalName="SendingStationDestination" :fields="{ 'Код станции': 'code', 'Наименование станции': 'name', 'Краткое наименование': 'short_name', 'Параграфы': 'paragraph' }" />
                        <disable-simple-input title="Код дороги" :dis="true" :value="listsStore.stations[sending.id_station_destination]?.railway" :fixWidth="false" styleInput="width: 120px" />
                        <disable-simple-input title="Код станции" :dis="true" :value="listsStore.stations[sending.id_station_destination]?.code" :fixWidth="false" styleInput="width: 120px" />
                        <disable-simple-input title="Параграфы" :dis="true" :value="listsStore.stations[sending.id_station_destination]?.paragraph" :fixWidth="false" styleInput="width: auto" />
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
</template>

<style lang="css" scoped></style>
