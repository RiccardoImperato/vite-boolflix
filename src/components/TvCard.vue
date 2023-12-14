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
        <h4>
            {{ name }} - TV
        </h4>
        <div>
            Titolo originale: {{ ogName }}
        </div>
        <div>
            Voto: {{ rate }}
        </div>

    </div>
</template>

<style scoped></style>