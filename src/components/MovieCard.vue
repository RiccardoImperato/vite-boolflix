<script >

export default {
    props: {
        title: String,
        ogTitle: String,
        lang: String,
        rate: Number,
        img: String
    },
}
</script>

<template>
    <div>
        <h3>
            {{ title }} - Movie
        </h3>
        <div>
            <img :src="'https://image.tmdb.org/t/p/w342' + img" :alt="title">
        </div>
        <div v-if="title !== ogTitle">
            Titolo originale: <h4>{{ ogTitle }}</h4>
        </div>
        <div>
            Voto: {{ rate }}
        </div>
    </div>
</template>

<style scoped></style>
