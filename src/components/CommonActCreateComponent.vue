<script setup></script>

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
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Станция составления акта</label>
                    <div class="input-group" style="width: 870px">
                        <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                        <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#stationSostAkta">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </button>
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Код</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" style="width: 173px" disabled="disabled" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Дата составления акта</label>
                    <div class="col-auto">
                        <input type="date" class="form-control mt-0 custom-input" style="width: 250px" />
                    </div>
                </div>
                <!-------------------------Настоящий акт составлен в присутствии следующих лиц-------------------------------------------------------------------->
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Настоящий акт составлен в присутствии следующих лиц</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#aktsostavlen">Добавить</button>
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#aktsostavlen">Изменить</button>
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#">Удалить</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <div class="table-responsive" style="border: #c1c1c1 solid 1px">
                            <table class="table table-hover table-bordered border-white">
                                <thead style="background-color: #7da5f0; color: white">
                                    <tr>
                                        <th></th>
                                        <th style="width: 400px">Должность</th>
                                        <th style="width: 500px">ФИО</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    <tr>
                                        <td><input type="checkbox" class="row-checkbox" /></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!--Настоящий акт составлен в присутствии следующих лиц модальное окно -->
                <div class="modal fade bd-example-modal-lg" id="aktsostavlen" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 60%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center col-auto" id="staticBackdropLabel" style="color: white; font-weight: bold">Акт составлен</span>
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
                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Должность</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" placeholder="" style="width: 300px" />
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">ФИО</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control mt-0 custom-input" placeholder="" style="width: 300px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--------------------------------------------------------------------------------------------->

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Станция отправления</label>
                    <div class="input-group" style="width: 870px">
                        <input type="text" class="form-control custom-search" style="background-color: #e9ecef" aria-label="Введите запрос" disabled />
                        <button class="btn btn-outline-secondary" type="button" style="background-color: #e9ecef" data-toggle="modal" data-target="#" disabled>
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </button>
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Код</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" style="width: 173px" disabled="disabled" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Станция назначения</label>
                    <div class="input-group" style="width: 870px">
                        <input type="text" class="form-control custom-search" style="background-color: #e9ecef" placeholder="" aria-label="Введите запрос" disabled />
                        <button class="btn btn-outline-secondary" type="button" style="background-color: #e9ecef" data-toggle="modal" data-target="#" disabled>
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </button>
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Код</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" style="width: 173px" disabled="disabled" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Наименование груза</label>
                    <div class="input-group" style="width: 870px">
                        <input type="text" class="form-control custom-search" style="background-color: #e9ecef" placeholder="" aria-label="Введите запрос" disabled />
                        <button class="btn btn-outline-secondary" type="button" style="background-color: #e9ecef" data-toggle="modal" data-target="#" disabled>
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </button>
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Код</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" style="width: 173px" disabled="disabled" />
                    </div>
                </div>

                <!-------------------------Вагоны, контейнеры отправки-------------------------------------------------------------------->
                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0" style="width: auto; font-weight: bold">Отправки, вагоны/контейнеры</label>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#otprakaAkt">Добавить</button>
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#otprakaAkt">Изменить</button>
                        <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#">Удалить</button>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-auto">
                        <div class="table-responsive" style="border: #c1c1c1 solid 1px">
                            <table class="table table-hover table-bordered border-white">
                                <thead style="background-color: #7da5f0; color: white">
                                    <tr>
                                        <th></th>
                                        <th>№ п/п</th>
                                        <th>Номер вагона</th>
                                        <th style="width: 400px">Владелец вагона</th>
                                        <th style="width: 400px">Грузополучатель</th>
                                        <th>Номер отправки, дата приема груза к перевозке</th>
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

                <!--Вагоны, контейнеры отправки модальное окно -->
                <div class="modal fade bd-example-modal-lg" id="otprakaAkt" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 70%">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center col-auto" id="staticBackdropLabel" style="color: white; font-weight: bold">Отправки</span>
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
                                    <label class="col-auto col-form-label mb-0 label-custom">Отправка №</label>
                                    <div class="input-group" style="width: 270px">
                                        <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                        <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#naityOtpravku">
                                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                        </button>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">от</label>
                                    <div class="col-auto">
                                        <input type="date" class="form-control mt-0 custom-input" placeholder="" style="width: 150px" disabled="disabled" />
                                    </div>
                                </div>

                                <div class="row mb-1">
                                    <label class="col-auto col-form-label mb-0 label-custom">Вагон, контейнер №</label>
                                    <div class="input-group" style="width: 270px">
                                        <input type="text" class="form-control custom-search" placeholder="Поиск" aria-label="Введите запрос" />
                                        <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#naityVagonCont">
                                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                        </button>
                                    </div>

                                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Дата приема груза к перевозке</label>
                                    <div class="col-auto">
                                        <input type="date" class="form-control mt-0 custom-input" placeholder="" style="width: 150px" disabled="disabled" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--------------------------------------------------------------------------------------------->

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Описание обстоятельств, вызвавших составление акта</label>
                    <div class="col-10">
                        <input type="text" class="form-control mt-0 custom-input" style="height: 150px; min-width: 100%" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Дополнение к описанию обстоятельств</label>
                    <div class="col-10">
                        <input type="text" class="form-control mt-0 custom-input" style="height: 150px; min-width: 100%" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Отправитель</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Код</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" style="width: 173px" disabled="disabled" />
                    </div>
                </div>

                <div class="row mb-1">
                    <label class="col-auto col-form-label mb-0 label-custom">Получатель</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 custom-input" disabled />
                    </div>

                    <label class="col-auto col-form-label mb-0 label-custom" style="width: auto">Код</label>
                    <div class="col-auto">
                        <input type="text" class="form-control mt-0 disabled-input" placeholder="" style="width: 173px" disabled="disabled" />
                    </div>
                </div>

                <!--Найти Станция составления акта модальное окно -->
                <div class="modal fade" id="stationSostAkta" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Станция составления акта</span>
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

                <!--Найти № Отправки модальное окно -->
                <div class="modal fade" id="naityOtpravku" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">Отправки</span>
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
                                                <th>Код отправки</th>
                                                <th>№ отправки</th>
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

                                <div class="row justify-content-md-end">
                                    <button type="button" class="btn btn-custom" style="width: 70px; margin: 10px">Да</button>
                                    <button type="button" class="btn btn-custom" data-dismiss="modal" style="width: 70px; margin: 10px">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!----------------------------- -->

                <!--Найти № Вагона/контейнера модальное окно -->
                <div class="modal fade" id="naityVagonCont" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #7da5f0">
                                <span class="modal-title text-center" id="staticBackdropLabel" style="color: white; font-weight: bold">№ Вагона/контейнера </span>
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

                <!--Найти Подписать акт модальное окно -->
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

                <!--Найти Испортить акт модальное окно -->
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
