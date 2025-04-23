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
                <button type="button" class="btn btn-custom">Испортить</button>
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
                    <label class="col-auto col-form-label mb-0 label-custom">Вид документа</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" disabled="disabled" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" for="customCheck1" style="width: auto">Ввод номера документа вручную</label>
                    <div class="col-auto">
                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Номер документа</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" disabled="disabled" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Период с</label>
                    <div class="col-auto">
                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                    </div>

                    <label class="col-auto col-form-label mb-0">по</label>
                    <div class="col-auto">
                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                    </div>

                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" disabled="disabled" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" for="customCheck1" style="width: auto">Арбитражный суд</label>
                    <div class="col-auto">
                        <input class="form-check-input custom-input" style="width: 20px; height: 20px" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Организация перевозчика</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" disabled="disabled" />
                    </div>

                    <div class="col-auto">
                        <div class="input-group" style="width: 270px">
                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#OrganizaciaPerevozchika">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" disabled="disabled" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom">ж.д.</label>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Место расчета</label>
                    <div class="col-3">
                        <select class="form-select mt-0 custom-input">
                            <option value="">Выберете элемент списка</option>
                            <option value="Прямое">Прямое</option>
                            <option value="Прямое смешанное">Прямое смешанное</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Плательщик</label>
                    <div class="col-auto">
                        <div class="input-group" style="width: 270px">
                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#PlatelshikPoSboru">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 50px">Код</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" disabled="disabled" />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 50px">ОКПО</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" disabled="disabled" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Форма расчета</label>
                    <div class="col-3">
                        <select class="form-select mt-0 custom-input" disabled>
                            <option value="">Безналичный централизованный</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>

                <!--Найти Организация перевозчика модальное окно -->
                <div class="modal fade" id="OrganizaciaPerevozchika" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Организация перевозчика</span>
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
                                                <th>Код ОКПО</th>
                                                <th>Наименование</th>
                                                <th>ИД бизнеса</th>
                                                <th>ИД холдинга</th>
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

                <!--Найти Плательщика модальное окно -->
                <div class="modal fade" id="PlatelshikPoSboru" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                                <th>Код ОКПО</th>
                                                <th>Наименование</th>
                                                <th>ИД бизнеса</th>
                                                <th>ИД холдинга</th>
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

                <!-- Сборы -->
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Сборы</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom">Добавить</button>
                        <button type="button" class="btn btn-custom">Изменить</button>
                        <button type="button" class="btn btn-custom">Удалить</button>
                        <button type="button" class="btn btn-custom">Копировать</button>
                        <button type="button" class="btn btn-custom">Вставить</button>
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#DannieIzAktov">Данные из актов</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <div class="table-responsive" style="border: #c1c1c1 solid 1px; padding-bottom: 50px">
                            <table class="table table-hover table-bordered border-white">
                                <thead style="background-color: #7da5f0; color: white">
                                    <tr>
                                        <th></th>
                                        <th>Дата</th>
                                        <th>Наименование документа</th>
                                        <th>номер документа</th>
                                        <th>Состояние родительского документа</th>
                                        <th>Шифр статьи</th>
                                        <th>Наименование сбора</th>
                                        <th>Примечание</th>
                                        <th>Номер ваг/конт</th>
                                        <th>Сумма, руб.</th>
                                        <th>Сумма, тенге</th>
                                        <th>Признак НДС</th>
                                        <th>Сумма НДС</th>
                                        <th>Ставка НДС</th>
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
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Итого к оплате</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" disabled="disabled" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">ФИО руководителя, подписывающего документ</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" placeholder="" />
                    </div>
                </div>

                <!--Данные по актам Сборов модальное окно -->
                <div class="modal fade bd-example-modal-lg" id="DannieIzAktov" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 90%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center col-auto" id="staticBackdropLabel" style="color: white; font-weight: bold">Сборы</span>
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; background-color: red; margin: 0 35%">Не указана статья сбора</span>
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
                                    <label class="col-auto col-form-label mb-0 label-custom">Дата сбора</label>
                                    <div class="col-auto">
                                        <input type="date" class="form-control mt-0 custom-input" style="width: 150px" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Наименование документа</label>
                                    <div class="col-3">
                                        <select class="form-select mt-0 custom-input">
                                            <option value="">Выберете элемент списка</option>
                                            <option value="Повагонная">Повагонная</option>
                                            <option value="Контейнерная">Контейнерная</option>
                                            <option value="Контейнерная комплектом на вагон">Контейнерная комплектом на вагон</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Номер документа</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#NomerDocumenta">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 180px">По данным ЭТРАН</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 100px" placeholder="" disabled="disabled" />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 30px">Ид*</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 180px">Состояние документа</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Статья сбора</label>
                                    <div class="col-6">
                                        <div class="input-group" style="min-width: 100%">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#StatiaSbora">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">Код статьи</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Признак НДС</label>
                                    <div class="col-3">
                                        <select class="form-select mt-0 custom-input" disabled>
                                            <option value="">Выберете элемент списка</option>
                                            <option value="Большая">Большая</option>
                                            <option value="Грузовая">Грузовая</option>
                                            <option value="Не указано">Не указано</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Дополнительный код</label>
                                    <div class="col-auto">
                                        <div class="input-group" style="width: 270px">
                                            <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                            <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#DopKod">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <label class="col-1 col-form-label mb-0 label-custom" style="width: auto">Код</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 disabled-input" style="width: 120px" placeholder="" disabled="disabled" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Рассчетная сумма</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Сумма сбора</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" />
                                    </div>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" placeholder="" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 110px">Ставка НДС</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: 110px">Сумма НДС</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" disabled />
                                    </div>

                                    <div class="col-auto">
                                        <button type="button" class="btn btn-custom">Формула расчетов</button>
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Коэф. надбавки на безопаность</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom">Коэф. надбавки на компенсацию налогов</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom">Коэф. надбавки на кап. ремонт</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Сумма без неиндек. части тарифа</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom">Сумма без коэф. на безопасность</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom">Сумма без коэф. на налог</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom">Сумма без доп коэф.</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на обесп. безопасности</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на компенсацию налогов</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" disabled />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom">Доход от надбавки на кап. ремонт</label>

                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" style="width: 100px" placeholder="" disabled />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Примечание</label>

                                    <div class="col-10">
                                        <input type="text" class="form-control mt-0 custom-input" style="min-width: 100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти Номер документа модальное окно -->
                <div class="modal fade" id="NomerDocumenta" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Номер документа</span>
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

                <!--Найти Статья сборов модальное окно -->
                <div class="modal fade" id="StatiaSbora" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Статья сборов</span>
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

                <!--Найти Дополнительный код модальное окно -->
                <div class="modal fade" id="DopKod" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="DopKod" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Дополнительный код</span>
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
                <!-- ------------------------------------------------------- -->
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
