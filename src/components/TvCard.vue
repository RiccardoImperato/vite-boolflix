<script >

export default {
    props: {
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
            Serie TV: {{ name }}
        </h4>
        <p>
            Titolo originale: {{ ogName }}
        </p>
        <p>
            Lingua originale: {{ lang }}
        </p>
        <p>
            Voto: {{ rate }}
        </p>
    </div>
</template>

<style scoped></style>