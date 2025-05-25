<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import TransportationCreateComponent from '../components/TransportationCreateComponent.vue';
import { useMainStore } from '../stores/main';
const mainStore = useMainStore();
</script>

<template>
    <HeaderComponent :title="mainStore.title"/>
    <TransportationCreateComponent/>
</template>