import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
    state: () => {
        return {
            title: "",
            subtitle: "",
        };
    },
    actions: {},
});
