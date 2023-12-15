<script >

export default {
    props: {
        lang: String
    }
}
</script>

<template>
    <div v-if="lang === 'it'">
        <img src="https://cdn.pixabay.com/photo/2012/04/01/19/18/flag-24134_1280.png">
    </div>
    <div v-else-if="lang === 'en'">
        <img src="https://www.britain-visitor.com/images/content_images/union-flag-1.jpg">
    </div>
    <div v-else>Lingua originale: <span>{{ lang }}</span></div>
</template>

<style scoped lang="scss">
div {
    margin-right: auto;

    img {
        display: block;
        width: 50px;
        height: 30px;
    }

    span {
        text-transform: uppercase;
    }
}
</style>