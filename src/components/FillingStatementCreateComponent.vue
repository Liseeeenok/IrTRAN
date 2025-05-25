<script setup></script>

<template>
    <div class="search-box">
        <div class="row">
            <div class="col-auto">
                <button type="button" class="btn btn-custom">Сохранить</button>
                <button type="button" class="btn btn-custom">Пересчитать</button>
                <button type="button" class="btn btn-custom">Следующая</button>
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
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Станция</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                    </div>

                    <div class="col-auto">
                        <div class="input-group" style="width: 270px">
                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityStation">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </button>
                        </div>
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 100px">Дорога</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                    </div>
                </div>

                <!--Найти Станция модальное окно -->
                <div class="modal fade" id="NaityStation" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Станция</span>
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
                                                <th>Код дороги</th>
                                                <th>Наименование</th>
                                                <th>Аббревиатура</th>
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
                    <label class="col-auto col-form-label mb-0 label-custom">Договор №</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                    </div>

                    <div class="col-auto">
                        <div class="input-group" style="width: 270px">
                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityNomerDogovora">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </button>
                        </div>
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 100px">ОКПО</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                    </div>
                </div>

                <!--Найти Договор модальное окно -->
                <div class="modal fade" id="NaityNomerDogovora" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Договор</span>
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
                                                <th>Код договора</th>
                                                <th>Номер договора</th>
                                                <th>Наименование</th>
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
                    <label class="col-auto col-form-label mb-0 label-custom">Владелец/пользователь п.п.</label>
                    <div class="col-auto">
                        <div class="input-group" style="width: 270px">
                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityVladelcailiPolzov">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </button>
                        </div>
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 100px">ОКПО</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 100px">ИНН</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                    </div>
                </div>

                <!--Найти Владелец/пользователь п.п. модальное окно -->
                <div class="modal fade" id="NaityVladelcailiPolzov" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Владелец/пользователь п.п.</span>
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
                                                <th>Наименование</th>
                                                <th>ИНН</th>
                                                <th>ИД организации</th>
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
                    <label class="col-auto col-form-label mb-0 label-custom">Место расчета</label>
                    <div class="col-3">
                        <select class="form-select mt-0 custom-input">
                            <option value="">Выберете элемент списка</option>
                            <option value="ЦФТО">ЦФТО</option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Плательщик</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                    </div>

                    <div class="col-auto">
                        <div class="input-group" style="width: 470px">
                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityPlatelsika">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </button>
                        </div>
                    </div>
                </div>

                <!--Найти Плательщик модальное окно -->
                <div class="modal fade" id="NaityPlatelsika" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Плательщик</span>
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
                                                <th>Наименование</th>
                                                <th>ИНН</th>
                                                <th>ИД организации</th>
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
                    <label class="col-auto col-form-label mb-0 label-custom" style="margin-right: 20px">Арбитражный суд</label>
                    <div class="col-auto">
                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom" style="margin-right: 20px">Воинская организация</label>
                    <div class="col-auto">
                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Номер формы 2</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" placeholder="" disabled="disabled" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Место передачи вагона</label>
                    <div class="col-3">
                        <select class="form-select mt-0 custom-input">
                            <option value="">Выберете элемент списка</option>
                            <option value="ЦФТО">ЦФТО</option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom" style="margin-right: 20px">Признак пути общего пользования</label>
                    <div class="col-auto">
                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Неоплачиваемое время</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Время оборота вагона</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Время оборота вагона для сдвоен. операций</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom" style="margin-right: 20px">Подача/уборка локомотивом клиента</label>
                    <div class="col-auto">
                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom" style="margin-right: 20px">Расст. ваг. по местам погр./выгр. локом. кл.</label>
                    <div class="col-auto">
                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Принадлежность подъездного пути</label>
                    <div class="col-3">
                        <select class="form-select mt-0 custom-input">
                            <option value="">Выберете элемент списка</option>
                            <option value="ветвевладельцу">ветвевладельцу</option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Расстояние в оба конца для ветвевладельца, км</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Развернутая длина п/п для ветвевладельца, м</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Тарифный план</label>
                    <div class="col-3">
                        <select class="form-select mt-0 custom-input">
                            <option value="">Выберете элемент списка</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Развернутая длина пути для расчета платы за использование пути</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Тип нумерации ведомости</label>
                    <div class="col-3">
                        <select class="form-select mt-0 custom-input" style="width: auto">
                            <option value="">Выберете элемент списка</option>
                            <option value="">шесть знаков (2-месяц, 1 - пятидневка, 3 - порядковый номер)</option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">ВЕДОМОСТЬ ПОДАЧИ И УБОРКИ ВАГОНОВ ОТ</label>
                    <div class="col-auto">
                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                    </div>

                    <label class="col-auto col-form-label mb-0">№</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" disabled="disabled" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">с</label>
                    <div class="col-auto">
                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">по</label>
                    <div class="col-auto">
                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                    </div>
                    <label class="col-auto col-form-label mb-0 label-custom">по местному времени</label>
                </div>

                <!----------------------------------------- Памятки уборки ------------------------------------------>
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Памятки уборки</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom">Добавить памятки из АСУ ЛР</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#DobavitPamaitkyUborky">Добавить</button>
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
                                        <th>Номер памятки</th>
                                        <th>Дата памятки</th>
                                        <th>Вагонооборот</th>
                                        <th>Время уборки</th>
                                        <th>Время дополн. маневр. работы</th>
                                        <th>Сбор за маневровую работу</th>
                                        <th>Сбор за пробег локомотива</th>
                                        <th>По данным АСУЛР</th>
                                        <th>Состояние памятки уборки</th>
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
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!--Добавить Памятки уборки модальное окно -->
                <div class="modal fade" id="DobavitPamaitkyUborky" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="min-width: 90%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Памятки уборки</span>
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; background-color: red; margin: 0 35%">Не заполнен номер памятки</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-1">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="">Применить</button>
                                        <button type="button" class="btn btn-custom" data-dismiss="modal">Отменить</button>
                                        <button type="button" class="btn btn-custom">Предыдущий</button>
                                        <button type="button" class="btn btn-custom">Следующий</button>
                                        <button type="button" class="btn btn-custom">Добавить</button>
                                        <button type="button" class="btn btn-custom">Копировать</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Номер памятки уборки</label>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 170px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityNomerPamiatkyUborky">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">По данным АСУЛР</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Разовый клиент</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 180px">Состояние памятки уборки</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Контрагент</label>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 370px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityKontragent">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">ОКПО</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">ИНН</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Дата памятки</label>
                                    <div class="col-auto">
                                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Время уборки</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">по московскому времени</label>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Вагонооборот (ваг./сут.)</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Дополнительная маневровая работа</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">мин</label>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Станция затребования локомотива</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" disabled />
                                    </div>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 470px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityStationZatrebovania">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Сбор за маневровую работу</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" disabled />
                                    </div>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 470px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" disabled />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaitySborZaManevrRabotu">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom">Расчет</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Сбор за пробег локомотива</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" />
                                    </div>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" disabled />
                                    </div>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 470px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" disabled />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaitySborZaProbegLokomotiva">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------------------------------------------------->

                <!--Найти Номер памятки уборки модальное окно -->
                <div class="modal fade" id="NaityNomerPamiatkyUborky" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Номер памятки уборки</span>
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
                                                <th>Номер</th>
                                                <th>Наименованиеа</th>
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

                <!--Найти Контрагент модальное окно -->
                <div class="modal fade" id="NaityKontragent" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Контрагент</span>
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
                                                <th>ИД холдинга</th>
                                                <th>Наименованиеа</th>
                                                <th>ИНН</th>
                                                <th>Адрес</th>
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

                <!--Найти Станция затребования локомотива модальное окно -->
                <div class="modal fade" id="NaityStationZatrebovania" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Станция затребования локомотива</span>
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
                                                <th>Код дороги</th>
                                                <th>Код локомотива</th>
                                                <th>Наименование станции</th>
                                                <th>Примечание</th>
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

                <!--Найти Сбор за маневровую работу модальное окно -->
                <div class="modal fade" id="NaitySborZaManevrRabotu" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Сбор за маневровую работу</span>
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
                                                <th>Код локомотива</th>
                                                <th>Вид работ</th>
                                                <th>Наименование работ</th>
                                                <th>Сумма сбора</th>
                                                <th>Примечание</th>
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

                <!--Найти Сбор за пробег локомотива модальное окно -->
                <div class="modal fade" id="NaitySborZaProbegLokomotiva" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Сбор за пробег локомотива</span>
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
                                                <th>Код локомотива</th>
                                                <th>Пробег</th>
                                                <th>Наименование сбора</th>
                                                <th>Сумма сбора</th>
                                                <th>Примечание</th>
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

                <!----------------------------------------------------------------------------------------------------------------->

                <!----------------------------------------- Вагоны по памяткам ------------------------------------------>
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Вагоны по памяткам</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom">Добавить памятки из АСУ ЛР</button>
                        <button type="button" class="btn btn-custom">Добавить акты задержки подачи</button>
                        <button type="button" class="btn btn-custom">Добавить вагоны из памяток подачи</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#DobavitVagonPoPamiatkam">Добавить</button>
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
                                        <th>№ п/п</th>
                                        <th>Номер вагона</th>
                                        <th>Номер памятки подачи</th>
                                        <th>Номер памятки уборки</th>
                                        <th>Принадл. вагона</th>
                                        <th>Код группы вагона</th>
                                        <th>Операция</th>
                                        <th>Время подачи</th>
                                        <th>Время завершения операции</th>
                                        <th>Общее время</th>
                                        <th>Расчетное время (час)</th>
                                        <th>Время для расчета платы</th>
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
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!--Добавить Вагоны по памяткам  модальное окно -->
                <div class="modal fade" id="DobavitVagonPoPamiatkam" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="min-width: 80%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Вагоны по ведомостям подачи и уборки</span>
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; background-color: red; margin: 0 15%">Не выбрана памятка уборки!</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-1">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="">Применить</button>
                                        <button type="button" class="btn btn-custom" data-dismiss="modal">Отменить</button>
                                        <button type="button" class="btn btn-custom">Предыдущий</button>
                                        <button type="button" class="btn btn-custom">Следующий</button>
                                        <button type="button" class="btn btn-custom">Добавить</button>
                                        <button type="button" class="btn btn-custom">Копировать</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Номер памятки уборки</label>
                                    <div class="col-3">
                                        <select class="form-select mt-0 custom-input" style="width: auto">
                                            <option value="">Выберете элемент списка</option>
                                            <option value=""></option>
                                            <option value=""></option>
                                        </select>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Без памятки уборки</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Дата и время памятки уборки</label>
                                    <div class="col-auto">
                                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Номер памятки подачи</label>
                                    <div class="col-auto">
                                        <input class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Номер вагона</label>
                                    <div class="col-auto">
                                        <input class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>

                                    <div class="col-auto">
                                        <input class="form-control mt-0 custom-input" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Принадлежность вагона</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 370px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityPrinadlejnostVagona">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Вагон другой администрации</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Длина вагона</label>
                                    <div class="col-auto">
                                        <input class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">для расчета платы за нахождение вагона на МОП</label>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Группа вагона</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 370px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityGruppuVagona">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Операция</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 370px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityOperation">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Груз</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 370px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityGruz">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Код ЕТСНГ</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 250px" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Дата и время подачи вагона</label>
                                    <div class="col-auto">
                                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">по московскому времени</label>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Время завершения грузовой операции</label>
                                    <div class="col-auto">
                                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">по московскому времени</label>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Использ. коэфф. вых. и праздн. дн.</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 400px">Дополнительное неоплачиваемое время для вагона</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>

                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom">Из договора</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 400px">Технологическое время для расчета платы за нахождение на ПОП</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Контрагент</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 370px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityVagonKontragent">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">ОКПО</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">ИНН</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Выбор операции для срока оборота</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 370px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityOperationDliaSrokaOborota">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Замена неопл. врем. или врем. оборота для данного вагона</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 400px">Время нахождения вагона на подъездном пути по норме ( код "Ж" для КОО-4):</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 400px">Время нахождения под грузовой операцией</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 400px">Расч. время нахожд. под гр. операцией (час)</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 400px">Время для расчета платы (час)</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 400px">Время для расчета штрафа (час)</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 400px">Время для расчета платы за нахожд. (час)</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Кратность платы</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 50px" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Вагон подан взамен вагона другой группы</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Сдвоенные операции</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Рефрижераторный вагон без поддержания режима</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Транспортеры 16-осные без обслуживающих бригад</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">8-осный вагон</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Прямое смешанное ж.д.-водное сообщение (по форме ГУ-28)</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Другой администрации без 1.3</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Перевалка широкой на узкую колею</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Вагон ГУП "Рефсервис"</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Без погрузки</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Без выгрузки</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Оставлен</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Ст. 188</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Переадресовка</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">отказ</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Воинские перевозки</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Для прикрытия</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Вагон-теплушка (расчет платы за польз. без штрафа)</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Экспорт</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Таможенный досмотр</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">Вагон привлечен по договору публичной оферты</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">По факту задержки заверш. груз. опер. оформлялся Акт ГУ-23</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 420px">По факту задержки подачи оформлялся Акт ГУ-23</label>
                                    <div class="col-auto">
                                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Сумма платы</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" placeholder="" />
                                    </div>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 150px" placeholder="" disabled="disabled" />
                                    </div>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 370px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaitySummuOplaty">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom">Расчет</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Сумма штрафа</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" placeholder="" />
                                    </div>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 150px" placeholder="" disabled="disabled" />
                                    </div>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 370px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaitySummuShtrafa">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 360px">Сумма штрафа, переданная в уведомление</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" placeholder="" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Сумма платы за нахождение</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" placeholder="" />
                                    </div>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 150px" placeholder="" disabled="disabled" />
                                    </div>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 370px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaitySummaPlatyZaNahojdenie">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Итого по вагону</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 150px" placeholder="" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Примечание</label>
                                    <div class="col-10">
                                        <input type="text" class="form-control mt-0 custom-input" style="min-width: 100%; height: 100px" placeholder="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------------------------------------------------->

                <!--Найти Принадлежность вагона модальное окно -->
                <div class="modal fade" id="NaityPrinadlejnostVagona" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Принадлежность вагона</span>
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
                                                <th>Код локомотива</th>
                                                <th>Номер вагона</th>
                                                <th>Наименование</th>
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

                <!--Найти Группа вагона модальное окно -->
                <div class="modal fade" id="NaityGruppuVagona" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Группа вагона</span>
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
                                                <th>Номер</th>
                                                <th>Наименование</th>
                                                <th>Аббревиатура</th>
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

                <!--Найти Операция модальное окно -->
                <div class="modal fade" id="NaityOperation" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Операция</span>
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

                <!--Найти Груз модальное окно -->
                <div class="modal fade" id="NaityGruz" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Груз</span>
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
                                                <th>Аббревиатура</th>
                                                <th>Код ЕТСНГ</th>
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

                <!--Найти Контрагент модальное окно -->
                <div class="modal fade" id="NaityVagonKontragent" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Контрагент</span>
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
                                                <th>ИД холдинга</th>
                                                <th>Наименование</th>
                                                <th>ИНН</th>
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

                <!--Найти Выбор операции для срока оборота модальное окно -->
                <div class="modal fade" id="NaityOperationDliaSrokaOborota" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Выбор операции для срока оборота</span>
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

                <!--Найти Сумма платы модальное окно -->
                <div class="modal fade" id="NaitySummuOplaty" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Сумма платы</span>
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
                                                <th>Сумма</th>
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

                <!--Найти Сумма штрафа модальное окно -->
                <div class="modal fade" id="NaitySummuShtrafa" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Сумма штрафа</span>
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
                                                <th>Сумма</th>
                                                <th>Причина</th>
                                                <th>Примечание</th>
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

                <!--Найти Сумма платы за нахождение модальное окно -->
                <div class="modal fade" id="NaitySummaPlatyZaNahojdenie" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Сумма платы за нахождение</span>
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
                                                <th>Сумма</th>
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

                <!----------------------------------------------------------------------------------------------------------------->

                <!----------------------------------------- Для расчета сборов за подачу и уборку ------------------------------------------>
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Для расчета сборов за подачу и уборку</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom">Пересчитать количество</button>
                        <button type="button" class="btn btn-custom">Пересчитать суммы</button>
                        <button type="button" class="btn btn-custom">Добавить поданные вагоны</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#DobavitDliaRaschetaSborov">Добавить</button>
                        <button type="button" class="btn btn-custom">Изменить</button>
                        <button type="button" class="btn btn-custom">Удалить</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 50px">
                            <table class="table table-hover table-bordered border-white">
                                <thead style="background-color: #7da5f0; color: white">
                                    <tr>
                                        <th></th>
                                        <th>Номер памятки</th>
                                        <th>Операция</th>
                                        <th>Время операции</th>
                                        <th>Количество вагонов</th>
                                        <th>Источник</th>
                                        <th>Уточнение для расчета</th>
                                        <th>Вагонов для расчета</th>
                                        <th>Ставка</th>
                                        <th>Сумма</th>
                                        <th>Место подачи</th>
                                        <th>Примечание</th>
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
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!--Добавить Для расчета сборов за подачу и уборку  модальное окно -->
                <div class="modal fade" id="DobavitDliaRaschetaSborov" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" style="min-width: 50%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Для расчета сборов за подачу и уборку</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-1">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="">Применить</button>
                                        <button type="button" class="btn btn-custom" data-dismiss="modal">Отменить</button>
                                        <button type="button" class="btn btn-custom">Предыдущий</button>
                                        <button type="button" class="btn btn-custom">Следующий</button>
                                        <button type="button" class="btn btn-custom">Добавить</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Номер памятки</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 220px" placeholder="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Операция</label>

                                    <div class="col-3">
                                        <select class="form-select mt-0 custom-input" style="width: auto">
                                            <option value="">Выберете элемент списка</option>
                                            <option value=""></option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Дата и время операции</label>
                                    <div class="col-auto">
                                        <input type="date" class="form-control mt-0 custom-input" style="width: 220px" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Количество вагонов</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 220px" placeholder="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Место подачи</label>
                                    <div class="col-8">
                                        <input type="text" class="form-control mt-0 custom-input" style="min-width: 100%" placeholder="" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Источник информации</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" placeholder="" style="width: 220px" disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------------------------------------------------->

                <!----------------------------------------------------------------------------------------------------------------->

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Сбор за подачу/уборку</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                    </div>

                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                    </div>

                    <div class="col-auto">
                        <div class="input-group" style="width: 270px">
                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaitySborZaPodachuIUborku">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </button>
                        </div>
                    </div>

                    <div class="col-auto">
                        <button type="button" class="btn btn-custom">Расчет</button>
                    </div>
                </div>

                <!--Найти Сбор за подачу/уборку модальное окно -->
                <div class="modal fade" id="NaitySborZaPodachuIUborku" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Сбор за подачу/уборку</span>
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

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Коэфф. надбавки на безопасность</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Коэфф. надбавки на компенсацию налогов</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Коэфф. надбавки на кап. ремонт</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Сумма платежа без неиндексируемой части тарифа</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Сумма руб без коэф на безопасность</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Сумма руб без коэф на налог</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Сумма руб без доп коэф</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на безопасность</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на компенсацию налогов</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на капитальный ремонт</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Количество суток факт.пользования ПП</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Сбор за пользование ПП</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                    </div>

                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <div class="col-auto">
                        <div class="input-group" style="width: 270px">
                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaitySborZaPolzovaniePP">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </button>
                        </div>
                    </div>
                </div>

                <!--Найти Сбор за пользование ПП модальное окно -->
                <div class="modal fade" id="NaitySborZaPolzovaniePP" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Сбор за пользование ПП</span>
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

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Коэфф. надбавки на безопасность</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Коэфф. надбавки на компенсацию налогов</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Коэфф. надбавки на кап. ремонт</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Сумма платежа без неиндексируемой части тарифа</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Сумма руб без коэф на безопасность</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Сумма руб без коэф на налог</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Сумма руб без доп коэф</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на безопасность</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на компенсацию налогов</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на капитальный ремонт</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <!--------------------------------Штраф----------------------------------------->
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Штраф</label>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Начислено</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Взыскано</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">С лицевого счета</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 220px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">По уведомлению</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 220px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">№</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Плата за пользование</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 220px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Плата за нахождение</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 220px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Коэфф. надбавки на безопасность</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Коэфф. надбавки на компенсацию налогов</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Коэфф. надбавки на кап. ремонт</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Сумма платежа без неиндексируемой части тарифа</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Сумма руб без коэф на безопасность</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Сумма руб без коэф на налог</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Сумма руб без доп коэф</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на безопасность</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на компенсацию налогов</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на капитальный ремонт</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Сбор за маневровые операции</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 220px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Сбор за пробег локомотива</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 220px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Итого</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 220px" placeholder="" disabled />
                    </div>

                    <div class="col-auto">
                        <button type="button" class="btn btn-custom">Чек</button>
                    </div>

                    <div class="col-auto">
                        <button type="button" class="btn btn-custom">Извещение по сборам</button>
                    </div>

                    <div class="col-auto">
                        <button type="button" class="btn btn-custom">Извещение по штрафам</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Коэфф. надбавки на безопасность</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Коэфф. надбавки на компенсацию налогов</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Коэфф. надбавки на кап. ремонт</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Сумма платежа без неиндексируемой части тарифа</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Сумма руб без коэф на безопасность</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Сумма руб без коэф на налог</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Сумма руб без доп коэф</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на безопасность</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на компенсацию налогов</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на капитальный ремонт</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <!-------------------------------------------------------------------------------->

                <!--------------------------------Для отчета КОО-4----------------------------------------->
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Для отчета КОО-4</label>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Погружено вагонов перевозчика</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Выгружено вагонов перевозчика</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Погружено собств. и аренд. вагонов</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Выгружено собств. и аренд. вагонов</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Погружено собств./аренд. ваг. (не указ. в ведом.)</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Выгружено собств./аренд. ваг. (не указ. ведом.)</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Итого погружено (код "Г")</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">Итого выгружено (код "Д")</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Задержано ваг. в пути след. (код "Е")</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Время нахождения вагонов в пути следования на ответственности организации ( код "Л" )</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Сумма платы за польз. ваг. в пути след. (код "О")</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                    </div>
                </div>
                <!-------------------------------------------------------------------------------->

                <!----------------------------------------- Внесено по квитанциям РС-97 / чекам ------------------------------------------>
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Внесено по квитанциям РС-97 / чекам</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#DobavitPoKvitaciamRS">Добавить</button>
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
                                        <th>Серия квитанции</th>
                                        <th>Номер квитанции / чека</th>
                                        <th>Статья сбора</th>
                                        <th>Сумма</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    <tr>
                                        <td><input type="checkbox" class="row-checkbox" /></td>
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

                <!--Добавить Квитанции РС по ведомости подачи-уборки модальное окно -->
                <div class="modal fade" id="DobavitPoKvitaciamRS" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="min-width: 60%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Квитанции РС по ведомости подачи-уборки</span>
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; background-color: red; margin: 0 10%">Выберите статью сбора</span>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Закрыть" style="color: white"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-1">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="">Применить</button>
                                        <button type="button" class="btn btn-custom" data-dismiss="modal">Отменить</button>
                                        <button type="button" class="btn btn-custom">Предыдущий</button>
                                        <button type="button" class="btn btn-custom">Следующий</button>
                                        <button type="button" class="btn btn-custom">Добавить</button>
                                        <button type="button" class="btn btn-custom">Копировать</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Статья сбора</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" disabled />
                                    </div>

                                    <div class="col-auto">
                                        <div class="input-group" style="width: 455px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NaityStatiuSbora">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Сумма</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" placeholder="" />
                                    </div>

                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom">Создать КРС</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Серия квитанции</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 120px" placeholder="" />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Номер квитанции / чека</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" placeholder="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------------------------------------------------->

                <!--Найти Статья сбора модальное окно -->
                <div class="modal fade" id="NaityStatiuSbora" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Статья сбора</span>
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
                <!----------------------------------------------------------------------------------------------------------------->
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
