<script setup>
import ModalSearchDocumentLarge from "./ModalSearchDocumentLarge.vue";
import ModalSearchDocumentMini from "./ModalSearchDocumentMini.vue";
</script>

<template>
    <div class="content-container">
        <router-link to="/reminder/create">
            <button type="button" class="btn btn-custom">Создать документ</button>
        </router-link>
        <button type="button" class="btn btn-custom" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Найти документ</button>
        <ModalSearchDocumentLarge />
    </div>
    <div class="container">
        <div class="table-responsive" style="border: gray solid 1px">
            <table class="table table-hover table-bordered border-white">
                <thead style="background-color: #7DA5F0; color: white;">
                    <tr>
                        <th>ID документа</th>
                        <th>Состояние документа</th>
                        <th>Дата создания документа</th>
                        <th>Тип памятки</th>
                        <th>Наим. станции</th>
                        <th>Наим. владельца п/п(клиента)</th>
			            <th>Подача производилась локомотивом</th>
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
    background-color: #7da5f0; /* Цвет кнопки */
    color: white; /* Цвет текста кнопки */
}
.btn-custom:hover {
    background-color: #3e6cb4; /* Цвет кнопки */
    color: white; /* Цвет текста кнопки */
}
body {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
}
</style>
