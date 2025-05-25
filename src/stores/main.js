import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => {
        return { 
            title: 'test',
         }
    },
    actions: {},
});