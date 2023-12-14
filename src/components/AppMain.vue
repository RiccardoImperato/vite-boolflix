<script >
import { store } from '../store';
import MovieCard from './MovieCard.vue';
import tvCard from './TvCard.vue'

export default {
    components: {
        MovieCard,
        tvCard
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
            <MovieCard :title="movie.title" :ogTitle="movie.original_title" :lang="movie.original_language"
                :rate="movie.vote_average" />
        </li>
        <li v-for="serie in this.store.tvList">
            <tvCard :name="serie.name" :ogName="serie.original_name" :lang="serie.original_language"
                :rate="serie.vote_average" />
        </li>
    </ul>
</template>

<style></style>
