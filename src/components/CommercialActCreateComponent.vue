<script setup>
import { ref } from "vue";
import router from "../router";
import { authorization } from "../helpers/API.js";

const page = ref("document");
</script>

<template>
    <div class="search-box">
        <div class="row">
            <div class="col-auto">
                <button type="button" class="btn btn-custom">Сохранить</button>
                <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#podpisat">Подписать</button>
                <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#isportit">Испортить</button>
            </div>
        </div>
    </div>

    <div class="content-container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-toggle="tab" data-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Документ</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" style="margin-top: 1em" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                <!----------------------------------------------------------------Раздел А Общие сведения Отправки--------------------------------------------------------------->
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Общие сведения Отправки</label>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Поезд №</label>
                    <div class="col-auto">
                        <div class="input-group" style="width: 270px">
                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NomerPoezda">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Дата прибытия</label>
                    <div class="col-auto">
                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Время прибытия</label>
                    <div class="col-auto">
                        <input type="time" class="form-control mt-0 custom-input" style="width: 150px" />
                    </div>
                </div>

                <!--Найти Номер поезда модальное окно -->
                <div class="modal fade" id="NomerPoezda" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Номер поезда</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Номер поезда</th>
                                                <th>Наименование</th>
                                                <th>Отметки</th>
                                                <th>Примечание</th>
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

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Скорость</label>
                    <div class="col-3">
                        <select class="form-select mt-0 custom-input">
                            <option value="">Выберете элемент списка</option>
                            <option value="Пассажирская">Пассажирская</option>
                            <option value="Грузовая">Грузовая</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom" for="customCheck1">Сопровождение</label>
                    <div class="col-auto">
                        <input class="form-check-input custom-input" style="width: 20px; height: 20px; margin-left: 2px" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Номер накладной</label>
                    <div class="col-auto">
                        <div class="input-group" style="width: 270px">
                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NomerNakladnoy">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!--Найти Номер накладной модальное окно -->
                <div class="modal fade" id="NomerNakladnoy" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Номер накладной</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Номер накладной</th>
                                                <th>Дата создания</th>
                                                <th>Отметки</th>
                                                <th>Примечание</th>
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

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Станция отправления</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 450px" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Станция назвачения</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 450px" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Отправитель</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 450px" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Код ОКПО</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Получатель</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 450px" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Код ОКПО</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Перевозчик</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 450px" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Отметки отправителя о состоянии тары или груза</label>

                    <div class="col-auto">
                        <div class="input-group" style="width: 450px">
                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#OtmetkioSostoinii">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!--Найти Отметки отправителя о состоянии тары или груза модальное окно -->
                <div class="modal fade" id="OtmetkioSostoinii" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Отметки отправителя о состоянии тары или груза</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Номер отметки</th>
                                                <th>Описание</th>
                                                <th>Отметки</th>
                                                <th>Примечание</th>
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

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Объявленная ценность</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 450px" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Груз погружен средствами</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 450px" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">масса груза при погрузке определена</label>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Кем</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 450px" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Каким способом</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 450px" />
                    </div>
                </div>

                <!----------------------------------------------------------------Общие сведения Отправки Вагоны--------------------------------------------------------------->
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Вагоны</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#VagonizOtpr">Добавить</button>
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#VagonizOtpr">Изменить</button>
                        <button type="button" class="btn btn-custom">Удалить</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <div class="table-responsive" style="border: #c1c1c1 solid 1px">
                            <table class="table table-hover table-bordered border-white">
                                <thead style="background-color: #7da5f0; color: white">
                                    <tr>
                                        <th></th>
                                        <th>Номер вагона</th>
                                        <th>Род вагона</th>
                                        <th>Грузоподъемность</th>
                                        <th>Состояние</th>
                                        <th>Технический акт</th>
                                        <th>Принадлежность</th>
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

                <!--Вагоны из отправки модальное окно -->
                <div class="modal fade bd-example-modal-lg" id="VagonizOtpr" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 70%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center col-auto" id="staticBackdropLabel" style="color: white; font-weight: bold">Вагоны</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-3">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom">Применить</button>
                                        <button type="button" class="btn btn-custom">Отменить</button>
                                        <button type="button" class="btn btn-custom">Предыдущий</button>
                                        <button type="button" class="btn btn-custom">Следующий</button>
                                        <button type="button" class="btn btn-custom">Добавить</button>
                                        <button type="button" class="btn btn-custom">Копировать</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Номер вагона</label>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NomerVagona">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom">Род вагона</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Грузоподъемность</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom">Принадлежность</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Состояние</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Технический акт номер</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom">Дата</label>
                                    <div class="col-auto">
                                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!------------------------------------------------------------------------------------------------------------------------------------------------>

                <!----------------------------------------------------------------Общие сведения Отправки Контейнер--------------------------------------------------------------->
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Контейнер</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#ConteinerizOtpr">Добавить</button>
                        <button type="button" class="btn btn-custom">Изменить</button>
                        <button type="button" class="btn btn-custom">Удалить</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <div class="table-responsive" style="border: #c1c1c1 solid 1px">
                            <table class="table table-hover table-bordered border-white">
                                <thead style="background-color: #7da5f0; color: white">
                                    <tr>
                                        <th></th>
                                        <th>Номер контейнера</th>
                                        <th>Типоразмер</th>
                                        <th>Принадлежность</th>
                                        <th>Состояние</th>
                                        <th>Технический акт</th>
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
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!--Контейнеры из отправки модальное окно -->
                <div class="modal fade bd-example-modal-lg" id="ConteinerizOtpr" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 70%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center col-auto" id="staticBackdropLabel" style="color: white; font-weight: bold">Контейнеры</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-3">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom">Применить</button>
                                        <button type="button" class="btn btn-custom">Отменить</button>
                                        <button type="button" class="btn btn-custom">Предыдущий</button>
                                        <button type="button" class="btn btn-custom">Следующий</button>
                                        <button type="button" class="btn btn-custom">Добавить</button>
                                        <button type="button" class="btn btn-custom">Копировать</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Номер контейнеры</label>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NomerKonteinera">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Типоразмер</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Принадлежность</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Состояние</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Технический акт номер</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom">Дата</label>
                                    <div class="col-auto">
                                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!------------------------------------------------------------------------------------------------------------------------------------------------>

                <!----------------------------------------------------------------Общие сведения Отправки ЗПУ--------------------------------------------------------------->
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">ЗПУ</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#ZPUizOtpr">Добавить</button>
                        <button type="button" class="btn btn-custom">Изменить</button>
                        <button type="button" class="btn btn-custom">Удалить</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <div class="table-responsive" style="border: #c1c1c1 solid 1px">
                            <table class="table table-hover table-bordered border-white">
                                <thead style="background-color: #7da5f0; color: white">
                                    <tr>
                                        <th></th>
                                        <th>№ вагона, контейнера</th>
                                        <th>Место наложения ЗПУ</th>
                                        <th>Принадлежность ЗПУ</th>
                                        <th>Тип ЗПУ</th>
                                        <th>Контрольные знаки</th>
                                        <th>Погашение</th>
                                        <th>Следы вскрытия или повреждения</th>
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
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!--ЗПУ из отправки модальное окно -->
                <div class="modal fade bd-example-modal-lg" id="ZPUizOtpr" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 70%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center col-auto" id="staticBackdropLabel" style="color: white; font-weight: bold">ЗПУ</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-3">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom">Применить</button>
                                        <button type="button" class="btn btn-custom">Отменить</button>
                                        <button type="button" class="btn btn-custom">Предыдущий</button>
                                        <button type="button" class="btn btn-custom">Следующий</button>
                                        <button type="button" class="btn btn-custom">Добавить</button>
                                        <button type="button" class="btn btn-custom">Копировать</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Номер вагона, контейнера</label>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NomerVagonaorKonteineraZPU">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 150px">Место наложения ЗПУ</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Принадлежность ЗПУ</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 150px">Тип ЗПУ</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Контрольные знаки</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Погашение</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Следы вскрытия или повреждения</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!------------------------------------------------------------------------------------------------------------------------------------------------>

                <!-------------------------------------------------------------------------Раздел А конец----------------------------------------------------------------------------------------------------------------------------------->

                <!----------------------------------------------------------------Груз--------------------------------------------------------------->

                <!-------------------------------------------------------------------Раздел Б Значится по документам------------------------------------------------------------>
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Значится по документам</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#GruzpoDoc">Добавить</button>
                        <button type="button" class="btn btn-custom">Изменить</button>
                        <button type="button" class="btn btn-custom">Удалить</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <div class="table-responsive" style="border: #c1c1c1 solid 1px">
                            <table class="table table-hover table-bordered border-white">
                                <thead style="background-color: #7da5f0; color: white">
                                    <tr>
                                        <th></th>
                                        <th>№ вагона, контейнера</th>
                                        <th>Марка</th>
                                        <th>Число мест</th>
                                        <th>Род упаковки</th>
                                        <th>Наименование груза</th>
                                        <th>Общая масса в кг</th>
                                        <th>Масса одного места при стандартной упаковке</th>
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
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!--Груз по документам модальное окно -->
                <div class="modal fade bd-example-modal-lg" id="GruzpoDoc" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 70%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center col-auto" id="staticBackdropLabel" style="color: white; font-weight: bold">Груз по документам</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-3">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom">Применить</button>
                                        <button type="button" class="btn btn-custom">Отменить</button>
                                        <button type="button" class="btn btn-custom">Предыдущий</button>
                                        <button type="button" class="btn btn-custom">Следующий</button>
                                        <button type="button" class="btn btn-custom">Добавить</button>
                                        <button type="button" class="btn btn-custom">Копировать</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Номер вагона, контейнера</label>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NomerVagonaorKonteineraPoDoc">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 150px">Марка</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Число мест</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 150px">Род упаковки</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Наименование груза</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Общая масса в кг</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Масса одного места при стандартной упаковке</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!------------------------------------------------------------------------------------------------------------------------------------------------>

                <!-------------------------------------------------------------------Раздел В, Г В действительности оказалось------------------------------------------------------------>
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">В действительности оказалось</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#GruzpoDocvDeist">Добавить</button>
                        <button type="button" class="btn btn-custom">Изменить</button>
                        <button type="button" class="btn btn-custom">Удалить</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <div class="table-responsive" style="border: #c1c1c1 solid 1px">
                            <table class="table table-hover table-bordered border-white">
                                <thead style="background-color: #7da5f0; color: white">
                                    <tr>
                                        <th></th>
                                        <th>№ вагона, контейнера</th>
                                        <th>Марка</th>
                                        <th>Число мест</th>
                                        <th>Род упаковки</th>
                                        <th>Наименование груза</th>
                                        <th>Общая масса в кг</th>
                                        <th>Масса одного места при стандартной упаковке</th>
                                        <th>Отметка о повреждении</th>
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

                <!--Груз в действительности модальное окно -->
                <div class="modal fade bd-example-modal-lg" id="GruzpoDocvDeist" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 70%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center col-auto" id="staticBackdropLabel" style="color: white; font-weight: bold">Груз в действительности</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-3">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom">Применить</button>
                                        <button type="button" class="btn btn-custom">Отменить</button>
                                        <button type="button" class="btn btn-custom">Предыдущий</button>
                                        <button type="button" class="btn btn-custom">Следующий</button>
                                        <button type="button" class="btn btn-custom">Добавить</button>
                                        <button type="button" class="btn btn-custom">Копировать</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Номер вагона, контейнера</label>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NomerVagonaorKonteineraVDeist">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 150px">Марка</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Число мест</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 150px">Род упаковки</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Наименование груза</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Общая масса в кг</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Масса одного места при стандартной упаковке</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Отметка о повреждении</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!------------------------------------------------------------------------------------------------------------------------------------------------>

                <!-------------------------------------------------------------------------Груз конец----------------------------------------------------------------------------------------------------------------------------------->

                <!-------------------------------------------------------------------Результаты проверки------------------------------------------------------------>
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Результаты проверки</label>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Описание оказавшегося груза с указанием количества недосдачи или излишка</label>
                </div>

                <div class="row mb-1">
                    <div class="col-10">
                        <input type="text" class="form-control mt-0 custom-input" style="height: 150px; min-width: 100%" />
                    </div>
                </div>

                <!------------------------------------------------------------------------------------------------------------------------------------------------>

                <!-------------------------------------------------------------------Раздел Е Сведения о проведении экспертизы------------------------------------------------------------>
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Сведения о проведении экспертизы</label>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Номер акта</label>
                    <div class="col-auto">
                        <div class="input-group" style="width: 270px">
                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NomerAckta">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Дата</label>
                    <div class="col-auto">
                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Заключение</label>
                </div>

                <div class="row mb-1">
                    <div class="col-10">
                        <input type="text" class="form-control mt-0 custom-input" style="height: 150px; min-width: 100%" />
                    </div>
                </div>

                <!------------------------------------------------------------------------------------------------------------------------------------------------>

                <div style="display: none">
                    <!-------------------------------------------------------------------Раздел Ж Отметки перевозчика на станции назначения------------------------------------------------------------>
                    <div class="row mb-1">
                        <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Отметки перевозчика на станции назначения</label>
                    </div>

                    <div class="row mb-1">
                        <label class="col-auto col-form-label mb-0">Сосояние груза, прибывшего с актом попутной станции</label>
                    </div>

                    <div class="row mb-1">
                        <div class="col-10">
                            <input type="text" class="form-control mt-0 custom-input" style="height: 150px; min-width: 100%" />
                        </div>
                    </div>

                    <div class="row mb-1">
                        <label class="col-auto col-form-label mb-0">Подписи Перевозчика</label>
                    </div>

                    <div class="row mb-1">
                        <div class="col-auto">
                            <button type="button" class="btn btn-custom">Добавить</button>
                            <button type="button" class="btn btn-custom">Изменить</button>
                            <button type="button" class="btn btn-custom">Удалить</button>
                        </div>
                    </div>

                    <div class="row mb-1">
                        <div class="col-auto">
                            <div class="table-responsive" style="border: #c1c1c1 solid 1px">
                                <table class="table table-hover table-bordered border-white">
                                    <thead style="background-color: #7da5f0; color: white">
                                        <tr>
                                            <th></th>
                                            <th style="width: 300px">Должность</th>
                                            <th style="width: 400px">ФИО</th>
                                            <th>Подпись</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-group-divider">
                                        <tr>
                                            <td><input type="checkbox" class="row-checkbox" /></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-------------------------------------------------------------------Отметки о выдаче груза по досылочному документу------------------------------------------------------------>
                    <div class="row mb-1">
                        <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Отметки о выдаче груза по досылочному документу</label>
                    </div>

                    <div class="row mb-1">
                        <div class="col-auto">
                            <button type="button" class="btn btn-custom">Добавить</button>
                            <button type="button" class="btn btn-custom">Изменить</button>
                            <button type="button" class="btn btn-custom">Удалить</button>
                        </div>
                    </div>

                    <div class="row mb-1">
                        <div class="col-auto">
                            <div class="table-responsive" style="border: #c1c1c1 solid 1px">
                                <table class="table table-hover table-bordered border-white">
                                    <thead style="background-color: #7da5f0; color: white">
                                        <tr>
                                            <th></th>
                                            <th>Номер досылки</th>
                                            <th>Номер вагона</th>
                                            <th>Станция оформления досылки</th>
                                            <th>Дата оформления досылки</th>
                                            <th>Дата выдачи груза</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-group-divider">
                                        <tr>
                                            <td><input type="checkbox" class="row-checkbox" /></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-1">
                        <label class="col-auto col-form-label mb-0">Подписи Перевозчика</label>
                    </div>

                    <div class="row mb-1">
                        <div class="col-auto">
                            <button type="button" class="btn btn-custom">Добавить</button>
                            <button type="button" class="btn btn-custom">Изменить</button>
                            <button type="button" class="btn btn-custom">Удалить</button>
                        </div>
                    </div>

                    <div class="row mb-1">
                        <div class="col-auto">
                            <div class="table-responsive" style="border: #c1c1c1 solid 1px">
                                <table class="table table-hover table-bordered border-white">
                                    <thead style="background-color: #7da5f0; color: white">
                                        <tr>
                                            <th></th>
                                            <th style="width: 300px">Должность</th>
                                            <th style="width: 400px">ФИО</th>
                                            <th>Подпись</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-group-divider">
                                        <tr>
                                            <td><input type="checkbox" class="row-checkbox" /></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!------------------------------------------------------------------------------------------------------------------------------------------------>

                    <!-------------------------------------------------------------------Настоящий акт препровождается------------------------------------------------------------>
                    <div class="row mb-1">
                        <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Настоящий акт препровождается</label>
                    </div>

                    <div class="row mb-1">
                        <div class="col-auto">
                            <input type="text" class="form-control mt-0 custom-input" style="width: 250px" />
                        </div>
                    </div>

                    <div class="row mb-1">
                        <div class="col-auto">
                            <input type="text" class="form-control mt-0 custom-input" style="width: 250px" />
                        </div>
                    </div>

                    <div class="row mb-1">
                        <label class="col-auto col-form-label mb-0">Подписи Перевозчика</label>
                    </div>

                    <div class="row mb-1">
                        <div class="col-auto">
                            <button type="button" class="btn btn-custom">Добавить</button>
                            <button type="button" class="btn btn-custom">Изменить</button>
                            <button type="button" class="btn btn-custom">Удалить</button>
                        </div>
                    </div>

                    <div class="row mb-1">
                        <div class="col-auto">
                            <div class="table-responsive" style="border: #c1c1c1 solid 1px">
                                <table class="table table-hover table-bordered border-white">
                                    <thead style="background-color: #7da5f0; color: white">
                                        <tr>
                                            <th></th>
                                            <th style="width: 300px">Должность</th>
                                            <th style="width: 400px">ФИО</th>
                                            <th>Подпись</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-group-divider">
                                        <tr>
                                            <td><input type="checkbox" class="row-checkbox" /></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Коммерческий акт получил</label>
                        <div class="col-auto">
                            <input type="text" class="form-control mt-0 custom-input" style="width: 250px" />
                        </div>

                        <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">на основании</label>
                        <div class="col-auto">
                            <input type="text" class="form-control mt-0 custom-input" style="width: 250px" />
                        </div>

                        <label class="col-auto col-form-label mb-0 label-custom">Дата выдачи акта</label>
                        <div class="col-auto">
                            <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                        </div>
                    </div>

                    <!------------------------------------------------------------------------------------------------------------------------------------------------>

                    <!------------------------------------------------------------------------------------------------------------------------------------------------>
                </div>

                <!--Найти Номер вагона модальное окно -->
                <div class="modal fade" id="NomerVagona" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Номер вагона</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Номер вагона</th>
                                                <th>Наименование</th>
                                                <th>Кратное наименование</th>
                                                <th>Примечание</th>
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

                <!--Найти Номер контейнера модальное окно -->
                <div class="modal fade" id="NomerKonteinera" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Номер контейнера</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Номер контейнера</th>
                                                <th>Наименование</th>
                                                <th>Кратное наименование</th>
                                                <th>Примечание</th>
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

                <!--Найти Номер вагона/контейнера ЗПУ модальное окно -->
                <div class="modal fade" id="NomerVagonaorKonteineraZPU" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Номер вагона/контейнера</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Номер вагона/контейнера</th>
                                                <th>Наименование</th>
                                                <th>Кратное наименование</th>
                                                <th>Примечание</th>
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

                <!--Найти Номер вагона/контейнера Значится по документам модальное окно -->
                <div class="modal fade" id="NomerVagonaorKonteineraPoDoc" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Номер вагона/контейнера</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Номер вагона/контейнера</th>
                                                <th>Наименование</th>
                                                <th>Кратное наименование</th>
                                                <th>Примечание</th>
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

                <!--Найти Номер вагона/контейнера модальное В действительности окно -->
                <div class="modal fade" id="NomerVagonaorKonteineraVDeist" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Номер вагона/контейнера</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Номер вагона/контейнера</th>
                                                <th>Наименование</th>
                                                <th>Кратное наименование</th>
                                                <th>Примечание</th>
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

                <!--Найти Номер акта  модальное окно -->
                <div class="modal fade" id="NomerAckta" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Номер акта</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center mb-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="clearimput" placeholder="Поиск" aria-label="Поиск" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="clearButton">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 200px">
                                    <table class="table table-hover table-bordered border-white">
                                        <thead style="background-color: #7da5f0; color: white">
                                            <tr>
                                                <th>Номер акта</th>
                                                <th>Наименование</th>
                                                <th>Номер накладной</th>
                                                <th>Примечание</th>
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

                <!-- Подписать акт модальное окно -->
                <div class="modal fade" id="podpisat" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-sm">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Подпись акта</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center">
                                    <label class="col-auto col-form-label mb-0 label-custom">Подписать акт?</label>
                                </div>
                                <div class="row justify-content-md-center">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!-- Испортить акт модальное окно -->
                <div class="modal fade" id="isportit" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-sm">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Удаление акта</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row justify-content-md-center">
                                    <label class="col-12 col-form-label mb-0 label-custom">Вы действительно хотите удалить акт?</label>
                                </div>
                                <div class="row justify-content-md-center">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    background-color: #7da5f0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

.header .title {
    flex-grow: 1;
    text-align: center;
}

.dropdown {
    margin-left: 0 5px;
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
body {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    padding-top: 50px;
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
}
.span-custom {
    background-color: #ffffde;
    border: solid #a8a8a8 1px;
    color: black;
    height: 30px;
    padding: 3px 50px;
}
.disabled-input {
    background-color: #ffffde;
    opacity: 1;
    height: 30px;
    width: 270px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    border: 1px solid #c1c1c1;
}
.custom-input {
    background-color: #e3e2ff;
    height: 30px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    width: 270px;
    border: 1px solid #c1c1c1;
}
.input-group .form-control {
    background-color: #e3e2ff;
    border: 1px solid #c1c1c1;
    height: 30px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
}
.input-group .btn {
    background-color: #e3e2ff;
    border: 1px solid #c1c1c1;
    height: 30px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
}
.input-group .btn:hover {
    background-color: #d1d0ff;
}
.label-custom {
    width: 180px;
}
.form-check-input-checked-bg-color {
    background-color: #7da5f0;
}

.btn-box {
    width: 90%;
    position: fixed;
}

.modal-title {
    text-align: center !important;
}
.selected {
    background-color: #2165b6;
    color: white;
}
</style>
