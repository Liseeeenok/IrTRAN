import { useMainStore } from '../stores/main';
const mainStore = useMainStore();

export function updateTitle(title) 
{
    mainStore.title = title;
}