<script >
import { store } from '../store';
import Card from './Card.vue';

export default {
    components: {
        Card,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <ul class="container">
        <li v-for="movie in this.store.movieList" class="card">
            <Card :img="movie.poster_path" :bdpath="movie.backdrop_path" :title="movie.title"
                :ogTitle="movie.original_title" :rate="movie.vote_average" :lang="movie.original_language"
                :overview="movie.overview" />
        </li>
        <li v-for="serie in this.store.tvList" class="card">
            <Card :img="serie.poster_path" :title="serie.name" :ogTitle="serie.original_name" :rate="serie.vote_average"
                :lang="serie.original_language" :overview="serie.overview" />
        </li>
    </ul>
</template>

<style scoped lang="scss">
ul {
    margin: 30px 20px;
    display: flex;
    flex-wrap: wrap;

    .card {
        width: calc(100vw / 6);
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: rgba($color: #000000, $alpha: 0.3);
    }
}
</style>
