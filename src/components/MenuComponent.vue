<script setup></script>

<template>
    <div class="content-container">
        <div class="row mt-4 justify-content-center">
            <div class="col-md-3">
                <router-link to="/transporation/menu" class="card-square" style="border-radius: 10px">
                    <img src="@/assets/IMAGES/AppID_2.png" alt="Заявка на грузоперевозку" />
                    <span class="card-text" style="text-decoration: none">Заявка на грузоперевозку</span>
                </router-link>
            </div>
            <div class="col-md-3">
                <router-link to="/invoice/menu" class="card-square" style="border-radius: 10px">
                    <img src="@/assets/IMAGES/AppID_1.png" alt="Накладная" />
                    <span class="card-text">Накладная</span>
                </router-link>
            </div>
            <div class="col-md-3">
                <router-link to="/act/menu" class="card-square" style="border-radius: 10px">
                    <img src="https://cdn-icons-png.freepik.com/512/3566/3566009.png" alt="Акты" />
                    <span class="card-text">Акты</span>
                </router-link>
            </div>
            <div class="col-md-3">
                <router-link to="/reminder/menu" class="card-square" style="border-radius: 10px">
                    <img src="https://d1xez26aurxsp6.cloudfront.net/models/mkjAgYDBaZG/thumbnails/6361d9e53a2ff.png" alt="Памятка приемосдатчика" />
                    <span class="card-text">Памятка приемосдатчика</span>
                </router-link>
            </div>
            <div class="col-md-3">
                <router-link to="/filling-statement/menu" class="card-square" style="border-radius: 10px">
                    <img src="@/assets/IMAGES/AppID_19.png" alt="Ведомости подачи и уборки" />
                    <span class="card-text">Ведомости подачи и уборки</span>
                </router-link>
            </div>
            <div class="col-md-3">
                <router-link to="/cumulative-statement/menu" class="card-square" style="border-radius: 10px">
                    <img src="@/assets/IMAGES/AppID_11809.png" alt="Накопительная ведомость" />
                    <span class="card-text">Накопительная ведомость</span>
                </router-link>
            </div>
            <div class="col-md-3">
                <router-link to="/beginner-scenario/menu" class="card-square" style="border-radius: 10px">
                    <img src="https://cdn-icons-png.freepik.com/512/2234/2234794.png" alt="Обучающий сценарий Новичок" />
                    <span class="card-text">Обучающий сценарий "Новичок"</span>
                </router-link>
            </div>
            <div class="col-md-3">
                <router-link to="/advanced-scenario/menu" class="card-square" style="border-radius: 10px">
                    <img src="https://static.tildacdn.com/tild3632-3336-4232-b165-386337626361/main.png" alt="Обучающий сценарий Продвинутый" />
                    <span class="card-text">Обучающий сценарий "Продвинутый"</span>
                </router-link>
            </div>
            <div class="col-md-3">
                <router-link to="/test-mode" class="card-square" style="border-radius: 10px">
                    <img src="https://cdn-icons-png.flaticon.com/512/1508/1508866.png" alt="Режим теста" />
                    <span class="card-text">Режим теста</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content-container {
    padding: 100px 300px;
}
.card-square {
    width: 200px;
    /* Ширина квадрата */
    height: 200px;
    /* Высота квадрата */
    background-color: #efefef;
    /* Цвет фона */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Центрирование по вертикали */
    justify-content: center;
    /* Центрирование по горизонтали */
    position: relative;
    transition: background-color 0.3s;
    /* Плавный переход цвета */
    cursor: pointer;
    /* Изменение курсора при наведении */
    text-align: center;
    /* Центрирование текста */
    margin: 5px;
    /* Центрирование карточки в родительском элементе */
    padding: 8px;
    margin-bottom: 20px;
}
.card-square:hover {
    background-color: #4f85eb;
    /* Цвет при наведении */
}
.card-square img {
    max-width: 50%;
    /* Ограничение размера иконки */
    max-height: 50%;
    /* Ограничение размера иконки */
    margin-bottom: 5px;
    /* Отступ между иконкой и текстом */
}
.card-text {
    font-weight: bold;
    margin: 0;
    /* Убираем отступы у текста */
    font-size: 16px;
    /* Размер шрифта */
    color: #545556;
    /* Цвет текста */
}
.card-square:hover .card-text {
    color: white;
    /* Цвет текста при наведении */
}
</style>
