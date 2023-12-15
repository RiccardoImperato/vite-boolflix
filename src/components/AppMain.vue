<script >
import { store } from '../store';
import Card from './Card.vue';
import Flag from './Flag.vue';

export default {
    components: {
        Card,
        Flag
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <ul>

        <li v-for="movie in this.store.movieList">
            <Card :img="movie.poster_path" :title="movie.title" :ogTitle="movie.original_title"
                :rate="movie.vote_average" />
            <Flag :lang="movie.original_language" />
            <h4>Movie</h4>
        </li>

        <li v-for="serie in this.store.tvList">
            <Card :img="serie.poster_path" :title="serie.name" :ogTitle="serie.original_name" :rate="serie.vote_average" />
            <Flag :lang="serie.original_language" />
            <h4>TV series</h4>
        </li>
    </ul>
</template>

<style></style>
