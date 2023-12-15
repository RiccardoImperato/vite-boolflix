<script >
import { store } from '../store';
import MovieCard from './MovieCard.vue';
import TvCard from './TvCard.vue';
import Flag from './Flag.vue';

export default {
    components: {
        MovieCard,
        TvCard,
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
            <MovieCard :title="movie.title" :ogTitle="movie.original_title" :rate="movie.vote_average" />
            <Flag :lang="movie.original_language" />
        </li>
        <li v-for="serie in this.store.tvList">
            <TvCard :name="serie.name" :ogName="serie.original_name" :rate="serie.vote_average" />
            <Flag :lang="serie.original_language" />
        </li>
    </ul>
</template>

<style></style>
