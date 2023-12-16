<script >
import AppSearch from './AppSearch.vue';
import axios from 'axios';
import { store } from '../store';

export default {
    components: {
        AppSearch
    },
    data() {
        return {
            store
        }
    },
    methods: {
        search() {
            axios.get(this.store.apiURL + '?query=' + this.store.searchKey + '&api_key=' + this.store.apiKey).then((response) => {
                this.store.movieList = response.data.results;
            });
            axios.get(this.store.apiURLtv + '?api_key=' + this.store.apiKey + '&query=' + this.store.searchKey).then((response) => {
                this.store.tvList = response.data.results;
            });
        },
    },
}
</script>

<template>
    <header>
        <h1>Boolflix</h1>
        <AppSearch @search="search" />
    </header>
</template>

<style scoped lang="scss">
header {
    padding: 20px 40px;
    background-color: #000;

    h1 {
        font-size: 40px;
        color: #ff0000;
        margin-bottom: 20px;
    }
}
</style>

