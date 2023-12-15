<script >

export default {
    props: {
        img: String,
        name: String,
        ogName: String,
        lang: String,
        rate: Number,
        img: String
    }
}
</script>

<template>
    <div>
        <h3>
            {{ name }} - TV
        </h3>
        <div>
            <img :src="'https://image.tmdb.org/t/p/w342' + img" :alt="name">
        </div>
        <div v-if="name !== ogName">
            Titolo originale: <h4>{{ ogName }}</h4>
        </div>
        <div>
            Voto: {{ rate }}
        </div>
    </div>
</template>

<style scoped></style>