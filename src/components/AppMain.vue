<script >
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
