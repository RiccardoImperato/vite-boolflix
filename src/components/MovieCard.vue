<script >

export default {
    props: {
        title: String,
        ogTitle: String,
        lang: String,
        rate: Number
    },
}
</script>

<template>
    <div>
        <h3>
            {{ title }} - Movie
        </h3>
        <div>
            Titolo originale: <h4>{{ ogTitle }}</h4>
        </div>
        <div>
            Voto: {{ rate }}
        </div>
    </div>
</template>

<style scoped></style>
