import { isLoaded } from './Loader.vue';

onMounted(() => {
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            isLoaded.value = true;
        }
    };
});
