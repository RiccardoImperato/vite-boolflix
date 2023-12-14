<script >

export default {
    props: {
        title: String,
        ogTitle: String,
        lang: String,
        rate: Number
    }
}
</script>

<template>
    <div>
        <h4>
            {{ title }}
        </h4>
        <p>
            Titolo originale: {{ ogTitle }}
        </p>
        <p>
            Lingua originale: {{ lang }}
        </p>
        <p>
            Voto: {{ rate }}
        </p>
    </div>
</template>

<style></style>
