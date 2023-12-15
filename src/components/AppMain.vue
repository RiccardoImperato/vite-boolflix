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
    <ul class="container">
        <li v-for="movie in this.store.movieList">
            <Card :img="movie.poster_path" :bdpath="movie.backdrop_path" :title="movie.title"
                :ogTitle="movie.original_title" :rate="movie.vote_average" />
            <Flag :lang="movie.original_language" />
        </li>
        <li v-for="serie in this.store.tvList">
            <Card :img="serie.poster_path" :title="serie.name" :ogTitle="serie.original_name" :rate="serie.vote_average" />
            <Flag :lang="serie.original_language" />
        </li>
    </ul>
</template>

<style scoped lang="scss">
ul {
    margin: 30px 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;

    li {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }
}
</style>
