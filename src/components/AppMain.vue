<script >
import axios from 'axios';
import { store } from '../store';
import Card from './Card.vue';

export default {
    components: {
        Card
    },
    data() {
        return {
            store
        }
    },
    methods: {
        search() {
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
    <ul v-if="this.store.searchKey !== ''">
        <li v-for="movie in this.store.movieList">
            <Card :title="movie.title" :ogTitle="movie.original_title" :lang="movie.original_language"
                :rate="movie.vote_average" />
        </li>
    </ul>
</template>

<style></style>
