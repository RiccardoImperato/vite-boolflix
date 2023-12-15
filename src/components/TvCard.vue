<script >

export default {
    props: {
        img: String,
        name: String,
        ogName: String,
        lang: String,
        rate: Number
    }
}
</script>

<template>
    <div>
        <h3>
            {{ name }} - TV
        </h3>
        <div>
            Titolo originale: <h4>{{ ogName }}</h4>
        </div>
        <div>
            Voto: {{ rate }}
        </div>
    </div>
</template>

<style scoped></style>