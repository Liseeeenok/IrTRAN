<script setup>
import { ref } from 'vue';
import router from '../router';
import { authorization } from '../helpers/API.js';

</script>

<template>
     <div class="content-container">
        <router-link to="/transporation/create">
            <button type="button" class="btn btn-custom">Создать документ</button>
        </router-link>
        <button type="button" class="btn btn-custom" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Найти документ</button>
        <!--Найти документ модальное окно -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header" style="background-color: #7DA5F0;">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel" style="color: white;">Поиск документа</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" style="color: white;"></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                          <div class="col-4">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                  По заказу ЭТП
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                <label class="form-check-label" for="flexRadioDefault2">
                                  По номеру МЕСПЛАН
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
                                <label class="form-check-label" for="flexRadioDefault3">
                                  Идентификатор заявки
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked>
                                <label class="form-check-label" for="flexRadioDefault4">
                                  Номер заявки
                                </label>
                              </div>
                          </div>
                          <div class="col-8"><input type="text" class="form-control" id="formGroupExampleInput" placeholder="Поиск"></div>
                        </div>
                     </div>
                     <div class="row justify-content-md-center">
                        <button type="button" class="btn btn-custom" style="width: 150px; margin: 1em;">Найти</button>
                         <button type="button" class="btn btn-custom" data-bs-dismiss="modal" style="width: 150px; margin: 1em;">Отмена</button>
                    </div>
                    <div class="table-responsive" style="border: gray solid 1px">
                        <table class="table table-hover table-bordered border-white">
                            <thead style="background-color: #7DA5F0; color: white;">
                                <tr>
                                  <th>ID накладной</th>
                                  <th>№ накладной</th>
                                  <th>Состояние накладной</th>
                                  <th>Дата создания документа</th>
                                  <th>Дата приемосдатчика(дейст.док)</th>
                                  <th>Наим. станции отправления</th>
                                  <th>Наим. станции назначения</th>
                                  <th>№ вагона</th>
                                  <th>Плательщик</th>
                                </tr>
                              </thead>
                              <tbody class="table-group-divider">
                               
                              </tbody>
                        </table>
                      </div>
                </div>
            </div>
          </div>
        </div>
        <!----------------------------- -->
    </div>
</template>

<style scoped>
.content-container {
    padding: 100px 300px;
    display: flex;
    flex-flow: row nowrap;
    box-sizing: border-box;
    width: 100%;
    justify-content: space-around;
    align-items: center;
}
.btn-custom {
    width: 300px;
    background-color: #7DA5F0; /* Цвет кнопки */
    color: white; /* Цвет текста кнопки */
}
.btn-custom:hover {
    background-color: #3E6CB4; /* Цвет кнопки */
    color: white; /* Цвет текста кнопки */
}
body {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
}
</style>