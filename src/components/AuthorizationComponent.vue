<script setup>
import { ref } from "vue";
import router from "../router";
import { authorization } from "../helpers/API.js";

const auth_err = ref(false);
const login = ref("");
const password = ref("");

async function logIn() {
    auth_err.value = false;
    let response = await authorization(login.value, password.value);

    if (response === "successfully") {
        router.push("/menu");
    } else {
        auth_err.value = true;
    }
}

function togglePassword() {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    eyeIcon.classList.toggle("fa-eye");
    eyeIcon.classList.toggle("fa-eye-slash");
}
</script>

<template>
    <div class="background">
        <div class="container-fluid" style="height: 100vh; display: flex; justify-content: center; align-items: center">
            <div class="container pt-5 pb-5">
                <h2 class="card-title text-center mb-4">Авторизация</h2>
                <div class="form-group">
                    <input v-model="login" type="text" class="form-control" id="login" placeholder="Логин" />
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <input v-model="password" type="password" class="form-control" id="passwordInput" placeholder="Пароль" />
                        <div class="input-group-append">
                            <span class="input-group-text" id="togglePassword" @click="togglePassword()">
                                <i class="fas fa-eye" id="eyeIcon"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <button @click="logIn()" class="btn btn-custom w-100">Войти</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background {
    height: 100vh;
    width: 100%;
    background-image: url("@/assets/back_2.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
}
.container {
    width: 400px;
    background-color: #a3bfff;
    padding: 20px;
    border-radius: 8px;
}
.input-group-text {
    cursor: pointer;
}
.btn-custom {
    background-color: #3e6cb4;
    color: white;
}
.card-title {
    color: white;
}
</style>
