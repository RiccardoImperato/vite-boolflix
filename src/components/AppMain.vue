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
    <!-- Movies -->
    <section>
        <h2 v-if="this.store.movieList.length">Movies</h2>
        <ul>
            <!-- Card component for movies -->
            <li v-for="movie in this.store.movieList" class="card">
                <Card :img="movie.poster_path" :title="movie.title" :ogTitle="movie.original_title"
                    :rate="movie.vote_average" :lang="movie.original_language" :overview="movie.overview" />
            </li>
            <!--/ Card component for movies -->
        </ul>
    </section>
    <!--/ Movies -->

    <!-- Series -->
    <section>
        <h2 v-if="this.store.tvList.length">Series</h2>
        <ul>
            <!-- Card component for series -->
            <li v-for="serie in this.store.tvList" class="card">
                <Card :img="serie.poster_path" :title="serie.name" :ogTitle="serie.original_name" :rate="serie.vote_average"
                    :lang="serie.original_language" :overview="serie.overview" />
            </li>
            <!--/ Card component for series -->
        </ul>
    </section>
    <!--/ Series -->
</template>

<style scoped lang="scss">
h2 {
    margin-top: 20px;
    margin-left: 30px;
    margin-bottom: 10px;
}

ul {
    margin: 0 20px;
    display: flex;
    flex-wrap: wrap;
    max-width: 100vw;

    .card {
        height: 550px;
        width: calc((100% / 6) - 20px);
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: rgba($color: #000000, $alpha: 0.3);
    }
}
</style>
