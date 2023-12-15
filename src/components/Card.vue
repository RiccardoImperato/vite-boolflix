<script >

export default {
    props: {
        title: String,
        ogTitle: String,
        lang: String,
        rate: Number,
        img: String
    },
    computed: {
        getStars() {
            return Math.ceil(this.rate / 2);
        }
    }
}
</script>

<template>
    <div class="card">
        <div>
            <h3>
                {{ title }}
            </h3>
            <img v-if="img !== null" :src="'https://image.tmdb.org/t/p/w342' + img" :alt="title">
        </div>
        <div v-if="title !== ogTitle">
            Titolo originale: <h4>{{ ogTitle }}</h4>
        </div>
        <ul>
            <li v-for="n in getStars">
                <font-awesome-icon icon="fa-solid fa-star" />
            </li>
            <li v-for="n in 5 - getStars">
                <font-awesome-icon icon="fa-regular fa-star" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    padding: 0;
    list-style-type: none;
    display: flex;
}
</style>
