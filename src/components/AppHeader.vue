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

            // if (this.store.searchKey === '') {
            //     axios.get('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=a01536814a9012d0b06fa934f49c4c7b').then((response) => {
            //         this.store.movieList = response.data.results;
            //     });
            // } else {
            //     axios.get(this.store.apiURLdefault + '?query=' + this.store.searcKey + '&api_key=' + this.store.apiKey).then((response) => {
            //         this.store.movieList = response.data.results;
            //     });
            // }

            axios.get(this.store.apiURLdefault + '?query=' + this.store.searchKey + '&api_key=' + this.store.apiKey).then((response) => {
                this.store.movieList = response.data.results;
            });

        }
    },
    created() {
        this.search()
    }
}
</script>

<template>
    <header>
        <h1>Boolflix</h1>
        <AppSearch @search="search" />
    </header>
</template>

<style></style>

